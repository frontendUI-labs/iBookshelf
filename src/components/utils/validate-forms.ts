export function validateIfEmpty(
  value: string | number | undefined,
  label: string
) {
  return value === "" || value == undefined ? `${label} is required` : "";
}
export function validateIfStringLength(
  value: string,
  limit: number,
  label: string
) {
  return value.length <= limit
    ? `${label} should be minimum of ${limit} characters`
    : "";
}
