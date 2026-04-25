export function formatPercentage(value: number): string {
  const isMissing = value === undefined || value === null;
  return `${isMissing ? "-" : value.toFixed(2)}%`;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export const formatCompactNumber = (value: number, locale = "en-US") => {
  if (value === null || value === undefined || isNaN(value)) return "0";

  return new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
};
