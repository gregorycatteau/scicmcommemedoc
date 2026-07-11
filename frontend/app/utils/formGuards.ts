export function normalizeFormText(value: string, maxLength: number): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]+/g, ' ')
    .replace(/[\r\n]+/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

export function isSafeHttpUrl(value: string): boolean {
  if (!value) {
    return true
  }

  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}
