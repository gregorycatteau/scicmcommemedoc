export function normalizeSearchText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[\u0000-\u001F\u007F]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function includesNormalized(haystack: string, needle: string): boolean {
  const normalizedNeedle = normalizeSearchText(needle)

  if (!normalizedNeedle) {
    return true
  }

  return normalizeSearchText(haystack).includes(normalizedNeedle)
}

export function uniqueSorted(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'fr'))
}
