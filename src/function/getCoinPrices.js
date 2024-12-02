import { API_KEY } from "@/utils/constant";
import axios from "axios";

export const getCoinPrices = async (id, days, priceType) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      {
        headers: {
          "X-CoinGecko-API-Key": API_KEY,
        },
      }
    );
    const data = response.data;
    return data[priceType];
  } catch (err) {
    console.log(err);
  }
};
