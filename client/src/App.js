import React, { useState, useEffect } from "react";
import DataTable from "./components/DataTable";
import TextInput from "./components/TextInput";
import { getList } from "./services/getNobels";

const App = () => {
  const [nobelPrizes, setNobelPrizes] = useState([]);
  // const [page, setPage] = useState(1);
  //pageSize is number of rows per page
  const [pageSize, setPageSize] = useState(10);
  const [limit, setLimit] = useState(100);
  const [rowsPerPage, setRowsPerPage] = useState([10, 15, 30]);

  function handleLimit(newLimit) {
    //shortcut for converting string to number
    setLimit(newLimit * 1);
  }

  useEffect(() => {
    //mounted checks that state updates only when component is mounted due to async operations
    let mounted = true;
    getList(limit).then((items) => {
      if (mounted) {
        setNobelPrizes(items);
      }
    });
    return () => (mounted = false);
  }, [limit]);

  useEffect(() => {
    let mounted = true;
    const newArr = [];
    const firstHalf = Math.ceil(limit / 2);
    const secondHalf = Math.ceil(firstHalf / 2);
    const thirdHalf = Math.ceil(secondHalf / 2);
    newArr.push(firstHalf, secondHalf, thirdHalf);

    if (mounted) {
      if (limit === 100 || limit === 0) {
        setPageSize(10);
        setRowsPerPage([10, 15, 30]);
      }
      setPageSize(thirdHalf);
      setRowsPerPage(newArr);
    } else {
      return () => (mounted = false);
    }
  }, [limit, pageSize]);

  // console.log('page', page);

  return (
    <div>
      <DataTable
        nobelPrizes={nobelPrizes}
        rowCount={nobelPrizes.length}
        pageSize={pageSize}
        rowsPages={rowsPerPage}
        // handlePageChange={(param) => setPage(param.page)}
      />
      <TextInput onChange={handleLimit} />
    </div>
  );
};

export default App;
