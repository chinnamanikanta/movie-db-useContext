import React from "react";
import { useGlobalContext } from "../../context";

import Pagination from "react-js-pagination";

const PaginationItems = () => {
  const { setPageNumber, pageNumber } = useGlobalContext();
  // const [curentPage, setCurrentPage] = useState(1);

  // const handlePageChange = (pageNumber) => {
  //   console.log(setPageNumber);
  //   setCurrentPage(pageNumber);
  //   setPageNumber(curentPage);
  // };
  return (
    <div className="pagination-class">
      <Pagination
        itemClass="page-item" // add it for bootstrap 4
        linkClass="page-link"
        activePage={pageNumber}
        totalItemsCount={100}
        pageRangeDisplayed={10}
        onChange={(pageNumber) => setPageNumber(pageNumber)}
      />
    </div>
  );
};

export default PaginationItems;
