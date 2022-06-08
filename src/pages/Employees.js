import React from "react";
import Header from "../components/Header";
import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Inject,
  Page,
  PdfExport,
  Resize,
  Search,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import {
  employeesData,
  employeesGrid,
  ordersData,
  ordersGrid,
} from "../data/dummy";
const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowSorting
        allowPaging
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Filter, Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
