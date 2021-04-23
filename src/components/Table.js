import MaterialTable from "material-table";
import React from "react";

const Table = ({ data }) => {
  const columns = [
    { title: "Ülke", field: "country" },
    { title: "Toplam Vaka", field: "totalCases" },
    { title: "Günlük Vaka", field: "newCases" },
    { title: "Toplam Vefat", field: "totalDeaths" },
    { title: "Günlük Vefat", field: "newDeaths" },

    { title: "Günlük İyileşen Sayısı", field: "activeCases" },
    { title: "Toplam İyileşen Sayısı", field: "totalRecovered" },
  ];

  return (
    <>
      <MaterialTable
        title="Covid19 daily"
        data={data}
        columns={columns}
        options={{
          exportButton: true,
          exportAllData: true,
          pageSize: 10,
          pageSizeOptions: [10, 25, 50, 100, 200],
          paginationType: "stepped",
        }}
      />
    </>
  );
};

export default Table;
