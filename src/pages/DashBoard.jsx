import { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs/TabsComponent";
import Search from "@/components/Dashboard/Search/Search";
import PaginationComponent from "@/components/Dashboard/Pagination/PaginationComponent";
import Loader from "../components/Common/Loader/Loader";
import BackToTop from "@/components/Dashboard/BackToTop/BackToTop";
import { getAllCoindData } from "@/function/getAllCoinsData";

function DashBoard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  function onSearchChange(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  var filterCoins = coins.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate coins for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCoins = filterCoins.slice(indexOfFirstItem, indexOfLastItem);

  const fetchCoins = async () => {
    setLoading(true);
    const allCoins = await getAllCoindData();
    setCoins(allCoins);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coins={currentCoins} search={search} />
          <PaginationComponent
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filterCoins.length}
            onPageChange={setCurrentPage}
          />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default DashBoard;
