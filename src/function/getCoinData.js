import { API_KEY } from "@/utils/constant";
import axios from "axios";

export const getCoinData = async (id) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}?vs_currency=usd&category=layer-1`,
      {
        headers: {
          "X-CoinGecko-API-Key": API_KEY,
        },
      }
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
    return err.message
  }
  return null;
};
