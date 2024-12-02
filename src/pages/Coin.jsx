import CoinInfo from "@/components/Coin/CoinInfo/CoinInfo";
import LineChart from "@/components/Coin/LineChart/LineChart";
import Header from "@/components/Common/Header";
import Loader from "@/components/Common/Loader/Loader";
import List from "@/components/Dashboard/List/List";
import { Table, TableBody, TableRow } from "@/components/ui/table";
import { coinObject } from "@/function/convertData";
import { getCoinData } from "@/function/getCoinData";
import { getCoinPrices } from "@/function/getCoinPrices";
import { settingChartData } from "@/function/settingChartData";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Coin() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [priceHistory, setPriceHistory] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices")

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id, days, priceType]);

  async function getData() {
    setIsLoading(true);
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const coinPrices = await getCoinPrices(id, days, priceType);
      console.log(coinPrices);
      
      if (coinPrices.length > 0) {
        
        const chartData = settingChartData(coinPrices, priceType);
        console.log(priceType);
        
        
        setPriceHistory(chartData);
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Table className="min_screen_table">
            <TableBody>
              <TableRow className="flex justify-between items-center mx-10 hover:bg-muted/20 border-gray-400">
                <List coin={coinData} i={id} />
              </TableRow>
            </TableBody>
          </Table>
          <LineChart priceHistory={priceHistory} days={days} setDays={setDays} setPriceType={setPriceType} priceType={priceType}/>
          <CoinInfo coinData={coinData} />
        </div>
      )}
    </>
  );
}

export default Coin;
