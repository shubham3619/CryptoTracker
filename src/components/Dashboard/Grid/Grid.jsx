import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./style.css";
import { Link } from "react-router-dom";

function Grid({ coin, i}) {
  
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: `${i * 0.05}` }}
      >
        <Card
          className={
            coin.market_cap_change_percentage_24h > 0
              ? "h-full hover:border-1 rounded-md hover:border-green-400 hover:rounded-md hover:bg-green-400/20  transition-all duration-500 ease-in-out"
              : "h-full hover:border-1 rounded-md hover:border-red-400 hover:rounded-md hover:bg-red-400/20 transition-all duration-500 ease-in-out "
          }
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <img src={coin.image} className="w-12 coin-logo" />
              <div>
                <CardTitle className="uppercase text-xl font-bold coin-symbol">
                  {coin.symbol}
                </CardTitle>
                <CardDescription className="uppercase">
                  {coin.name}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {coin.market_cap_change_percentage_24h > 0 ? (
              <div>
                <div className="flex items-center gap-5">
                  <p className="border-2 border-green-400 rounded-full py-1 font-semibold px-5 w-fit text-green-400 hover:bg-green-600 hover:text-white price-change">
                    {coin.market_cap_change_percentage_24h.toFixed(2)} %
                  </p>
                  <FaArrowTrendUp className="border-2 border-green-400 text-green-400 border-spacing-5 rounded-full text-4xl p-1.5 hover:bg-green-600 hover:text-white price-change-logo" />
                </div>
                <div className="text-green-400 ml-2 mt-3 font-semibold text-lg curr-price">
                  ${coin.current_price.toLocaleString()}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-5">
                  <p className="border-2 border-red-500 rounded-full py-1 font-semibold px-5 w-fit text-red-500 hover:bg-red-600 hover:text-white price-change">
                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                  </p>
                  <FaArrowTrendDown className="border-2 border-red-500 text-red-500 border-spacing-5 rounded-full text-4xl p-1.5 hover:bg-red-600 hover:text-white price-change-logo" />
                </div>
                <div className="text-red-500 ml-2 mt-3 font-semibold text-lg curr-price">
                  ${coin.current_price.toLocaleString()}
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-start text-gray-400 text-sm mkt-values">
            <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
            <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}

export default Grid;
