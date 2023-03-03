import DataTable from 'react-data-table-component'
import React, { useEffect } from 'react';
import { useState } from "react"


//data table config ---->>>>     https://react-data-table-component.netlify.app/?path=/docs/getting-started-examples--page

const Table=() => {

  // const [getAllData, setGetAllData] = useState([ ])        //  inside useState >>>  { cn: 'Random text1', issued: '2nd random text1', expiration: 'yoda1', days: 5, id: 1 } 



  // useEffect(() => {
  //   fetch("/database/getAll") 
  //     .then((data) => data.json())
  //     .then((data) => setGetAllData(data))
  // }, [])
  //   console.log(getAllData)               //Console receives get all query but doesnt input fields


  // const columns = [                                   //Columns and keys
  // {
  //   name: "CN",
  //   selector: (row) => row.CN,
  // },
  // {
  //   name: "Issued",
  //   selector: (row) => row.Issued,
  // },
  // {
  //   name: "Expires",
  //   selector: (row) => (row.Expires),
  // }
  // {
  //   name: "Days till expiration",
  //   selector: (row) => (row.days),
  //   sortable: true,
  //   right: true
  // }
  //]



  return (
    <div style={{ margin: "20px" }}>
      <DataTable
        //columns={columns}
        //data={getAllData}
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


