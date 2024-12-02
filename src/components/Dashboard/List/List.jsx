import { TableCell } from "@/components/ui/table";
import { convertNumbers } from "@/function/convertNumbers";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import "./styles.css";

function List({ coin, i }) {
  const percentageChange = coin.market_cap_change_percentage_24h;
  const currentPrice = coin.current_price;
  const totalVolume = coin.total_volume;
  const marketCap = coin.market_cap;

  return (
    <> 
      <TableCell className="font-medium">
        <img src={coin.image} alt={`${coin.name} icon`} className="w-7" />
      </TableCell>
      <TableCell>
        <div className="font-semibold uppercase">{coin.name}</div>
        <div className="text-gray-600 uppercase text-xs min_screen_table">{coin.symbol}</div>
      </TableCell>
      <TableCell className="text-right">
        {percentageChange !== undefined ? (
          percentageChange > 0 ? (
            <div className="flex items-center">
              <p className="price_change border-green-400 rounded-full py-1 text-center text-green-400 hover:bg-green-600 hover:text-white w-20">
                {percentageChange.toFixed(2)} %
              </p>
              <FaArrowTrendUp className="min_screen border-green-400 text-green-400 border-spacing-5 rounded-full text-4xl p-1.5 hover:bg-green-600 hover:text-white" />
            </div>
          ) : (
            <div className="flex items-center">
              <p className="price_change border-red-500 rounded-full py-1 text-center text-red-500 hover:bg-red-600 hover:text-white w-20">
                {percentageChange.toFixed(2)} %
              </p>
              <FaArrowTrendDown className="min_screen border-red-500 text-red-500 border-spacing-5 rounded-full text-4xl p-1.5 hover:bg-red-600 hover:text-white" />
            </div>
          )
        ) : (
          <p>N/A</p>
        )}
      </TableCell>
      <TableCell className="text-start">
        {percentageChange > 0 ? (
          <div className="text-green-400">
            ${currentPrice !== undefined ? currentPrice.toLocaleString() : "N/A"}
          </div>
        ) : (
          <div className="text-red-500">
            ${currentPrice !== undefined ? currentPrice.toLocaleString() : "N/A"}
          </div>
        )}
      </TableCell>
      <TableCell className="desktop_total_vol">
        ${totalVolume !== undefined ? totalVolume.toLocaleString() : "N/A"}
      </TableCell>
      <TableCell className="mobile_total_vol">
        ${totalVolume !== undefined ? convertNumbers(totalVolume) : "N/A"}
      </TableCell>
      <TableCell className="min_screen">
        ${marketCap !== undefined ? marketCap.toLocaleString() : "N/A"}
      </TableCell>
    </>
  );
}

export default List;
