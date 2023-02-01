import DataTable from 'react-data-table-component'
import React from 'react';
import { useState } from "react"

//data table config ---->>>>     https://react-data-table-component.netlify.app/?path=/docs/getting-started-examples--page

function Table() {
    const [entry] = useState([
        { cn: 'Random text1', issued: '2nd random text1', expiration: 'yoda1', days: 5, id: 1 },                //ID -> entry in db, 
        { cn: 'Random text2', issued: '2nd random text2', expiration: 'yoda2', days: 9, id: 2 },
        { cn: 'Random text3', issued: '2nd random text3', expiration: 'yoda3', days: 99, id: 3 },
        { cn: 'Random text4', issued: '2nd random text3', expiration: 'yoda3', days: 12, id: 4 },
        { cn: 'Random text5', issued: '2nd random text3', expiration: 'yoda3', days: 23, id: 5 },
        { cn: 'Random text6', issued: '2nd random text3', expiration: 'yoda3', days: 0, id: 6 },
        { cn: 'Random text7', issued: '2nd random text3', expiration: 'yoda3', days: 1, id: 7 },
        { cn: 'Random text8', issued: '2nd random text3', expiration: 'yoda3', days: 99, id: 8 },
        { cn: 'Random text9', issued: '2nd random text3', expiration: 'yoda3', days: 190, id: 9 },
        { cn: 'Random text10', issued: '2nd random text3', expiration: 'yoda3', days: 397, id: 10 },
        { cn: 'Random text11', issued: '2nd random text3', expiration: 'yoda3', days: 245, id: 11 },
        { cn: 'Random text12', issued: '2nd random text3', expiration: 'yoda3', days: 111, id: 12 },
        { cn: 'Random text13', issued: '2nd random text3', expiration: 'yoda3', days: 147, id: 13 },
        { cn: 'Random text14', issued: '2nd random text3', expiration: 'yoda3', days: 365, id: 14 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 15 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 16 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 17 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 18 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 19 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 20 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 21 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 22 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 23 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 24 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 25 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 26 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 27 },
        { cn: 'Random text15', issued: '2nd random text3', expiration: 'yoda3', days: 43, id: 28 }
    ]);
  
    const columns = [                                   //Columns and keys
      {
        name: "CN",
        selector: (row) => row.cn,
      },
      {
        name: "Issued",
        selector: (row) => row.issued,
      },
      {
        name: "Expires",
        selector: (row) => (row.expiration),
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
          data={entry}
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