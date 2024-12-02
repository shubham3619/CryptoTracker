import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCoindData } from "@/function/getAllCoinsData";
import { Table, TableBody, TableRow } from "../../ui/table";
import List from "../../Dashboard/List/List";
import { coinObject } from "@/function/convertData";
import { getCoinData } from "@/function/getCoinData";
import CompareChart from "../LineChart/CompareChart";

export default function CompareCoins() {
  const [coin1, setCoin1] = useState("bitcoin");
  const [coin2, setCoin2] = useState("ethereum");
  const [coinList, setCoin1List] = useState([]);
  const [coin1Data, setCoin1Data] = useState({});
  const [coin2Data, setCoin2Data] = useState({});
  const [coin1Price, setCoin1Price] = useState(0);
  const [coin2Price, setCoin2Price] = useState(0);

  // Fetch coin list when component mounts
//   useEffect(() => {
//     getCoinList();
//     getCoin1Data();
//     getCoin2Data();
//   }, [coin1, coin2]);

useEffect(() => {
    getCoinList();
  }, []);

  // Fetch data for coin1
  useEffect(() => {
    getCoin1Data();
  }, [coin1]);

  // Fetch data for coin2
  useEffect(() => {
    getCoin2Data();
  }, [coin2]);


  async function getCoinList() {
    const response = await getAllCoindData();
    setCoin1List(response);
  }
  async function getCoin1Data() {
    const data = await getCoinData(coin1);
    if (data) {
      coinObject(setCoin1Data, data);
    }
  }
  async function getCoin2Data() {
    const data = await getCoinData(coin2);
    if (data) {
      coinObject(setCoin2Data, data);
    }
  }

  console.log(coin1Data);
  console.log(coin2Data);

  return (
    <div className="mx-8">
      <h2 className="font-bold text-lg mb-5">CompareCoins</h2>

      <div className="flex justify-start gap-10">
        <Select onValueChange={async (value) => setCoin1(value)}>
          <SelectTrigger className="w-fit min-w-28">
            <SelectValue placeholder="Coin 1" />
          </SelectTrigger>
          <SelectContent className="dark">
            <SelectGroup>
              <SelectLabel>Coin List</SelectLabel>
              {coinList.map((item) => {
                return (
                  <SelectItem value={item.id} key={item.id}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={async (value) => setCoin2(value)}>
          <SelectTrigger className="w-fit min-w-28">
            <SelectValue placeholder="Coin 2" />
          </SelectTrigger>
          <SelectContent className="dark">
            <SelectGroup>
              <SelectLabel>Coin List</SelectLabel>
              {coinList.map((item) => {
                return (
                  <SelectItem value={item.id} key={item.id}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Table className="min_screen_table mt-8">
        <TableBody>
          <TableRow className="flex justify-between items-center hover:bg-muted/20 border-gray-400">
            <List coin={coin1Data} i={coin1} />
          </TableRow>
          <TableRow className="flex justify-between items-center hover:bg-muted/20 border-gray-400">
            <List coin={coin2Data} i={coin2} />
          </TableRow>
        </TableBody>
      </Table>

      <CompareChart coin1={coin1} coin2={coin2} />
    </div>
  );
}
