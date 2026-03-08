export type Messages = Record<string, unknown>;

export function getMessage(messages: Messages, key: string): string {
  const parts = key.split(".");
  let current: unknown = messages;
  for (const part of parts) {
    if (current === null || current === undefined) return key;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === "string" ? current : key;
}
