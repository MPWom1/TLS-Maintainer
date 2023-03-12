import DataTable from 'react-data-table-component'
import React, { useEffect } from 'react';
import { useState } from "react"

//data table config ---->>>>     https://react-data-table-component.netlify.app/?path=/docs/getting-started-examples--page

function Table() {

 const [getAllData, setGetAllData] = useState( [ {cn: 'No Entry found', issued: '01-01-9999', expires: '01-01-9999', days: 0, id: 1} ] );  

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    fetch("/api/getAll")
      .then(res => res.json()) 
      .then(json => {
        setGetAllData(json)
      });
  };


  //convert to utc  >> minus difference >> convert utc difference into days

  function dayDiff(input) {
    const today = new Date();
    const expirationDate = new Date(input);

    var Difference_In_Time = expirationDate.getTime() - today.getTime();

    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    var rounded = Math.round(Difference_In_Days)

    if(rounded > 0){
      return (rounded)
    };
    if(rounded <= 0){
      return (0)
    };
  };
  

  const columns = [                                   //Columns and keys
  {
    name: "CN",
    selector: (row) => (row.cn)
  },
  {
    name: "Issued",
    selector: (row) => (row.issued)
  },
  {
    name: "Expires",
    selector: (row) => (row.expires)
  },
  {
    name: "Days till Expiration",
    selector: (row) => (dayDiff(row.expires)),
    sortable: true,
  }
  ]

  const conditionalRowStyles = [
    {
      when: row => (dayDiff(row.expires)) < 1,
      style: {
        backgroundColor: 'red',
      }
    },
    {
      when: row => (dayDiff(row.expires)) < 30 && (dayDiff(row.expires)) > 0,
      style: {
        backgroundColor: "#AFB53347",
      }
    }
  ];


  return (
    <div style={{ margin: "20px" }}>
      <DataTable
        columns={columns}
        data={getAllData}
        conditionalRowStyles={conditionalRowStyles}
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

