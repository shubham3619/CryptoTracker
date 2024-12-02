import { API_KEY } from "@/utils/constant";
import axios from "axios";

export const getAllCoindData = async() => {
    try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=layer-1",
          {
            headers: {
              "X-CoinGecko-API-Key": API_KEY,
            },
          }
        );
        const data = response.data;
        return data;
        //setCoins(data);
        //setLoading(false);
      } catch (err) {
        console.log(err);
        //setLoading(false);
      }
}