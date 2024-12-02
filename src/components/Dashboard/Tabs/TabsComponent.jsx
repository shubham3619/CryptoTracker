import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Grid from "../Grid/Grid";

import { motion } from "framer-motion";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import List from "../List/List";
import { useNavigate } from "react-router-dom";

function TabsComponent({ coins }) {
  const navigate = useNavigate();

  const handleRowClick = (coinId) => {
    navigate(`/coin/${coinId}`);
  };

  return (
    <Tabs defaultValue="grid" className=" dark m-8">
      <TabsList className="grid w-full h-12 grid-cols-2">
        <TabsTrigger value="grid" className="font-semibold text-lg">
          Grid
        </TabsTrigger>
        <TabsTrigger value="list" className="font-semibold text-lg">
          List
        </TabsTrigger>
      </TabsList>

      <TabsContent value="grid">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-6 grid grid-cols-4 gap-6 grid-view"
        >
          {coins.map((coin, i) => {
            return <Grid coin={coin} key={i} i={i} />;
          })}
        </motion.div>
      </TabsContent>

      <TabsContent value="list">
        <Table className="min_screen_table">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Coin</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price Change(24hr)</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>Total Vol.</TableHead>
              <TableHead className="min_screen">Market Cap.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coins.map((coin, i) => (
              <TableRow
                key={i}
                onClick={() => handleRowClick(coin.id)}
                className={
                  coin.market_cap_change_percentage_24h > 0
                    ? "hover:bg-green-400/20"
                    : "hover:bg-red-400/20"
                }
              >
                <List coin={coin} i={i} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}

export default TabsComponent;
