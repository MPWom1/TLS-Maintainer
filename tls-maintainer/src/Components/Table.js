import DataTable from 'react-data-table-component'
import React, { useEffect } from 'react';
import { useState } from "react"


//data table config ---->>>>     https://react-data-table-component.netlify.app/?path=/docs/getting-started-examples--page

function Table() {

 const [getAllData, setGetAllData] = useState( [ {cn: 'No Entry found', issued: '01-01-9999', expires: '01-01-9999', days: 0, id: 1} ] );  

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    fetch("/api/getAll")
      .then(res => res.json()) 
      .then(json => {
        setGetAllData(json)
      });
  } 



  const columns = [                                   //Columns and keys
  {
    name: "CN",
    selector: (row) => (row.cn),
  },
  {
    name: "Issued",
    selector: (row) => (row.issued),
  },
  {
    name: "Expires",
    selector: (row) => (row.expires),
  },
  {
    name: "Days till expiration",
    selector: (row) => (row.days),
    sortable: true,
    right: true
  }
  ]



  return (
    <div style={{ margin: "20px" }}>
      <DataTable
        columns={columns}
        data={getAllData}
        selectableRows
        selectableRowsHighlight
        pagination
        highlightOnHover
        striped
        fixedHeader
      />
    </div>
  )
}
export default Table


