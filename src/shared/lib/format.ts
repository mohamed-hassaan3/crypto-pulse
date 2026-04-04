export function formatPercentage(value: number): string {
  return `${value.toFixed(2)}%`
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value)
}
