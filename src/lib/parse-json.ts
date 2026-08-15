export function extractAndParseJSON<T>(text: string): T {
  const cleanText = text.trim();

  // 1. Try parsing the raw text directly
  try {
    return JSON.parse(cleanText) as T;
  } catch (e) {}

  // 2. Try extracting from markdown code block
  const match = cleanText.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (match) {
    try {
      return JSON.parse(match[1]) as T;
    } catch (e) {}
  }

  // 3. Brute force: find the first { and try parsing substrings from the end
  const start = cleanText.indexOf("{");
  if (start >= 0) {
    let end = cleanText.lastIndexOf("}");
    while (end > start) {
      try {
        const candidate = cleanText.slice(start, end + 1);
        return JSON.parse(candidate) as T;
      } catch (e) {
        // Not valid yet, find the previous '}'
        end = cleanText.lastIndexOf("}", end - 1);
      }
    }
  }

  throw new Error("Failed to parse valid JSON from the AI response.");
}
