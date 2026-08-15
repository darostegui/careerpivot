import type { RoadmapContent } from "../types";

export const financialAnalystContent: RoadmapContent = {
  roleSlug: "financial-analyst",
  roleTitle: "Financial Analyst",
  topics: [
    {
      id: "financial-modeling",
      title: "Financial modeling",
      outcome:
        "Build an auditable three-statement model that links operating assumptions to cash flow, valuation, and decision-ready scenarios.",
      studyPlan: [
        "Map operating drivers and accounting relationships before formulas.",
        "Build linked statements with balance checks and unusual-case tests.",
        "Explain sensitivity and limits to a non-model reader."
      ],
      project:
        "Complete the scenario as a assumption ledger, scenario bridge, and board decision note; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Financial Modeling Guidelines",
          provider: "Financial Modeling Institute",
          url: "https://pages.stern.nyu.edu/~adamodar/",
          access: "Free",
          format: "Documentation",
          note: "Practical conventions for model structure, formatting, assumptions, and auditability.",
        },
        {
          title: "Financial Markets",
          provider: "Coursera / Yale University",
          url: "https://www.coursera.org/learn/financial-markets-global",
          access: "Free audit",
          format: "Course",
          note: "Optional context for capital markets, valuation, risk, and financial instruments.",
        },
        {
          title: "Excel Help & Learning",
          provider: "Microsoft",
          url: "https://support.microsoft.com/en-us/excel",
          access: "Free",
          format: "Documentation",
          note: "Reference for tables, formulas, scenarios, charts, and error-checking features.",
        },
      ],
      checkpoint:
        "Statements balance, outputs trace to sources, and the decision note identifies the biggest runway sensitivity.",
    },
    {
      id: "management-reporting",
      title: "Management reporting",
      outcome:
        "Turn monthly actuals and budget data into a concise variance narrative that explains drivers, risks, and recommended actions.",
      studyPlan: [
        "Freeze source data and reconcile actuals, budget, prior period, and adjustments.",
        "Separate price, volume, mix, timing, and classification drivers.",
        "Write commentary as decisions, risks, and owners."
      ],
      project:
        "Complete the scenario as a close checklist, P&L bridge, and cash narrative; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Financial Accounting Fundamentals",
          provider: "OpenLearn",
          url: "https://www.open.edu/openlearn/money-business/financial-accounting/content-section-overview",
          access: "Free",
          format: "Course",
          note: "Free modules for understanding statements, transactions, and accounting terminology.",
        },
        {
          title: "Management Accounting",
          provider: "AccountingCoach",
          url: "https://www.accountingcoach.com/managerial-accounting/explanation",
          access: "Free",
          format: "Documentation",
          note: "Plain-language explanations of cost behavior, budgets, and variance analysis.",
        },
        {
          title: "FP&A Guide",
          provider: "Association for Financial Professionals",
          url: "https://www.afponline.org/",
          access: "Free",
          format: "Documentation",
          note: "Optional professional reference for planning, forecasting, and performance management.",
        },
      ],
      checkpoint:
        "The pack reproduces from frozen data and links quantified drivers to dated management actions.",
    },
    {
      id: "valuation-and-investment-analysis",
      title: "Valuation and investment analysis",
      outcome:
        "Evaluate an investment using defensible cash-flow assumptions, comparable evidence, risk adjustments, and a transparent recommendation.",
      studyPlan: [
        "Collect dated primary-source evidence and normalization notes.",
        "Build DCF and comparable cases and stress key assumptions.",
        "Separate fact, estimate, judgment, and reversal hurdle."
      ],
      project:
        "Complete the scenario as a investment committee memo and red-team critique; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Investment Valuation",
          provider: "NYU Stern / Aswath Damodaran",
          url: "https://pages.stern.nyu.edu/~adamodar/",
          access: "Free",
          format: "Documentation",
          note: "Open valuation lectures, spreadsheets, datasets, and reference material from a recognized finance professor.",
        },
        {
          title: "Corporate Finance",
          provider: "Coursera / University of Pennsylvania",
          url: "https://www.coursera.org/browse/business/finance",
          access: "Free audit",
          format: "Course",
          note: "Structured practice for NPV, risk, capital budgeting, and financing decisions.",
        },
        {
          title: "SEC EDGAR Company Search",
          provider: "U.S. Securities and Exchange Commission",
          url: "https://www.sec.gov/edgar/searchedgar/companysearch",
          access: "Free",
          format: "Practice",
          note: "Primary-source filings for building a documented comparable-company dataset.",
        },
      ],
      checkpoint:
        "The memo presents multiple methods, downside uncertainty, and a clear reversal hurdle.",
    },
    {
      id: "forecasting-and-scenarios",
      title: "Forecasting and scenarios",
      outcome:
        "Create a rolling forecast that uses operational drivers, forecast-error tracking, and scenarios to support timely resource decisions.",
      studyPlan: [
        "Translate activity, price, utilization, timing, and payment into drivers.",
        "Compare baseline, seasonal, and driver-based forecasts by error.",
        "Run scenarios with cash consequences and pre-agreed actions."
      ],
      project:
        "Complete the scenario as a forecast-error diary and treasury decision brief; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Forecasting: Principles and Practice",
          provider: "Rob J. Hyndman and George Athanasopoulos",
          url: "https://otexts.com/fpp3/",
          access: "Free",
          format: "Documentation",
          note: "Free, rigorous text covering time series, accuracy, regression, and hierarchical forecasts.",
        },
        {
          title: "Business Forecasting",
          provider: "Coursera / Macquarie University",
          url: "https://www.coursera.org/browse/data-science",
          access: "Free audit",
          format: "Course",
          note: "Optional guided exercises for selecting and evaluating forecasting approaches.",
        },
        {
          title: "Cash Flow Forecasting",
          provider: "Sage Advice",
          url: "https://www.sage.com/en-us/",
          access: "Free",
          format: "Documentation",
          note: "Accessible reference for building and using a practical cash forecast.",
        },
      ],
      checkpoint:
        "The forecast logs error and bias across periods and ties triggers to treasury action.",
    },
    {
      id: "controls-and-compliance",
      title: "Controls and compliance",
      outcome:
        "Protect financial reporting quality by documenting control ownership, evidence, review trails, and appropriate handling of sensitive data.",
      studyPlan: [
        "Map assertions to controls, owners, evidence, and segregation.",
        "Test samples for authorization, cutoff, duplicate, completeness, and support.",
        "Rate exceptions and define remediation evidence."
      ],
      project:
        "Complete the scenario as a risk-control matrix, sample tests, and exception letters; make assumptions, decisions, and verification evidence explicit.",
      resources: [
        {
          title: "Internal Control—Integrated Framework",
          provider: "COSO",
          url: "https://www.coso.org/guidance-on-ic",
          access: "Free",
          format: "Documentation",
          note: "Authoritative framework for thinking about control environment, risk, activities, information, and monitoring.",
        },
        {
          title: "Sarbanes-Oxley Act",
          provider: "U.S. Securities and Exchange Commission",
          url: "https://www.sec.gov/spotlight/sarbanes-oxley.htm",
          access: "Free",
          format: "Documentation",
          note: "Primary-source overview of public-company reporting and internal-control requirements.",
        },
        {
          title: "Accounting Data Analytics",
          provider: "AICPA & CIMA",
          url: "https://www.aicpa-cima.com/resources/landing/accounting-data-analytics",
          access: "Free",
          format: "Documentation",
          note: "Optional reference for applying analytics to audit, controls, and accounting evidence.",
        },
      ],
      checkpoint:
        "The tested sample reconciles to population and each finding has remediation evidence.",
    },
  ],
};
