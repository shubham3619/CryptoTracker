import { useState } from "react";
import "./style.css";

function CoinInfo({ coinData }) {
  const desc =
    typeof coinData.desc === "string" ? coinData.desc : coinData.desc?.en || "";
  const shortDesc =
    desc.slice(0, 350) +
    "<span style ='color:var(--gray)'> Read More...</span>";

    

  const [flag, setFlag] = useState(false);

  return (
    <div className="m-10 bg-muted/10 p-5 rounded-md">
      <h1 className="font-semibold text-3xl">{coinData.name}</h1>
      {desc.length > 350 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="m-5 coin_desc text-gray-200"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : desc }}
        />
      ) : (
        <p
          className="m-5 coin_desc text-gray-200"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}
    </div>
  );
}

export default CoinInfo;
