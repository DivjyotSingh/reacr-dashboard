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
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import {
  customersData,
  customersGrid,
  employeesData,
  employeesGrid,
  ordersData,
  ordersGrid,
} from "../data/dummy";
const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowSorting
        allowPaging
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Filter, Page, Selection, Toolbar, Sort, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
