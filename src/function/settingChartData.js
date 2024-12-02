export const settingChartData = (coinPrices, priceType) => {
  const chartData = coinPrices.map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
    }),
    [priceType]: price, // dynamically bind value based on the priceType
  })) || [];
      return chartData
}