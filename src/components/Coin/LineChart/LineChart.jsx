"use client";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LineChart({ priceHistory, setDays,days,  setPriceType, priceType }) {
  // Transform priceHistory data to fit the chart format
  console.log(priceHistory);

  const chartConfig = {
    price: {
      label: "Price",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <Card className="dark m-10 h-5/6 pb-6">
      <CardHeader>
        <CardTitle>Price Chart</CardTitle>
        <CardDescription>
          <div className="flex justify-start gap-6">
            <Select value={String(days)} onValueChange={async (value) => setDays(Number(value))}>
              <SelectTrigger className="w-auto my-3">
                <SelectValue placeholder="Days" defaultValue={days}/>
              </SelectTrigger>
              <SelectContent className="dark">
                <SelectItem value="7">7 Days</SelectItem>
                <SelectItem value="15">15 Days</SelectItem>
                <SelectItem value="30">30 Days</SelectItem>
                <SelectItem value="60">60 Days</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceType} onValueChange={async (value) => setPriceType(value)}>
              <SelectTrigger className="w-auto my-3">
                <SelectValue placeholder="Price-Type" defaultValue={priceType}/>
              </SelectTrigger>
              <SelectContent className="dark">
                <SelectItem value="prices">Prices</SelectItem>
                <SelectItem value="market_caps">Market CAP</SelectItem>
                <SelectItem value="total_volumes">Total Vol</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Showing price trend for the last {priceHistory.prices.length - 1} days */}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] h-96 w-full"
        >
          <AreaChart
            accessibilityLayer
            data={priceHistory}
            margin={{
              left: 2,
              right: 10,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date" // X-axis uses formatted date
              tickLine={false}
              axisLine={true}
              tickMargin={8}
            />
            {/* <YAxis
            
              tickLine={false}
              axisLine={true}
              tickFormatter={(value) => `${value.toLocaleString()}`}
             domain={["auto", (dataMax) => dataMax * 1.05]}
            /> */}

            <YAxis
              tickLine={false}
              axisLine={true}
              tickFormatter={(value) => {
                if (value >= 1e9) {
                  return `${(value / 1e9).toFixed(1)}B`;
                } else if (value >= 1e6) {
                  return `${(value / 1e6).toFixed(1)}M`;
                } else if (value >= 1e3) {
                  return `${(value / 1e3).toFixed(1)}K`;
                } else {
                  return value.toLocaleString();
                }
              }}
              domain={["auto", (dataMax) => dataMax * 1.05]}
            />

            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey={priceType} // Y-axis uses price data
              type="natural"
              fill="var(--color-price)"
              fillOpacity={0.4}
              stroke="var(--color-price)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default LineChart;
//   // Transform priceHistory data dynamically based on priceType
//   const transformData = (data, priceType) =>
//     data.map((entry) => ({
//       date: entry.date,
//       value: entry[priceType], // Select the appropriate price type
//     }));

//   const transformedData = transformData(priceHistory, priceType);

//   return (
//     <Card className="dark m-10 h-5/6 pb-6">
//       <CardHeader>
//         <CardTitle>Area Chart</CardTitle>
//         <CardDescription>
//           <Select onValueChange={(value) => setDays(Number(value))}>
//             <SelectTrigger className="w-auto my-3">
//               <SelectValue placeholder="Days" />
//             </SelectTrigger>
//             <SelectContent className="dark">
//               <SelectItem value="7">7 Days</SelectItem>
//               <SelectItem value="15">15 Days</SelectItem>
//               <SelectItem value="30">30 Days</SelectItem>
//               <SelectItem value="60">60 Days</SelectItem>
//             </SelectContent>
//           </Select>
//           <Select onValueChange={(value) => setPriceType(value)}>
//             <SelectTrigger className="w-auto my-3">
//               <SelectValue placeholder="Price-Type" />
//             </SelectTrigger>
//             <SelectContent className="dark">
//               <SelectItem value="prices">Prices</SelectItem>
//               <SelectItem value="market_caps">Market CAP</SelectItem>
//               <SelectItem value="total_volumes">Total Volume</SelectItem>
//             </SelectContent>
//           </Select>
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="p-0 m-0">
//         <ChartContainer className="min-h-[300px] h-96 w-full">
//           <AreaChart
//             data={transformedData}
//             margin={{
//               left: -5,
//               right: 10,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="date"
//               tickLine={false}
//               axisLine={true}
//               tickMargin={8}
//             />
//             <YAxis
//               tickLine={false}
//               axisLine={true}
//               tickFormatter={(value) =>
//                 value >= 1e9
//                   ? `${(value / 1e9).toFixed(1)}B`
//                   : value >= 1e6
//                   ? `${(value / 1e6).toFixed(1)}M`
//                   : value.toLocaleString()
//               }
//               domain={["auto", (dataMax) => dataMax * 1.05]}
//             />
//             <Tooltip formatter={(value) => value.toLocaleString()} />
//             <Area
//               dataKey="value"
//               type="natural"
//               fill="#8884d8"
//               fillOpacity={0.4}
//               stroke="#8884d8"
//             />
//           </AreaChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// }

// export default LineChart;
