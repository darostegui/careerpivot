type LogEvent = 
  | 'AI_AGENT_ANALYSIS_STARTED'
  | 'AI_AGENT_ANALYSIS_COMPLETED'
  | 'AI_AGENT_ANALYSIS_FAILED'
  | 'AI_AGENT_CHAT_STARTED'
  | 'AI_AGENT_CHAT_COMPLETED'
  | 'AI_AGENT_CHAT_FAILED'
  | 'AI_AGENT_MANUAL_ANALYSIS_STARTED'
  | 'AI_AGENT_MANUAL_ANALYSIS_COMPLETED'
  | 'AI_AGENT_MANUAL_ANALYSIS_FAILED'
  | 'STRIPE_CHECKOUT_STARTED'
  | 'STRIPE_WEBHOOK_RECEIVED'
  | 'STRIPE_WEBHOOK_SUCCESS'
  | 'STRIPE_WEBHOOK_FAILED';

export const telemetry = {
  log: (event: LogEvent, data: Record<string, unknown> = {}) => {
    const payload = {
      timestamp: new Date().toISOString(),
      event,
      ...data,
      environment: process.env.NODE_ENV || 'development'
    };
    
    // Output structured JSON for logging agents like Vercel Analytics or Splunk
    console.log(JSON.stringify(payload));
    
    // If Splunk is configured via HEC (HTTP Event Collector)
    const splunkUrl = process.env.SPLUNK_HEC_URL;
    const splunkToken = process.env.SPLUNK_HEC_TOKEN;
    if (splunkUrl && splunkToken) {
      fetch(splunkUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Splunk ${splunkToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ event: payload }),
      }).catch(err => console.error("Splunk telemetry failed", err));
    }
  },
  
  error: (event: LogEvent, error: unknown, data: Record<string, unknown> = {}) => {
    const payload = {
      timestamp: new Date().toISOString(),
      event,
      error: error instanceof Error ? error.message : String(error),
      ...data,
      environment: process.env.NODE_ENV || 'development'
    };
    
    console.error(JSON.stringify(payload));
  }
};
