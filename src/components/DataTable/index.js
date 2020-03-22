import React from "react";
import DataResults from "../DataResults";

function DataTable({headings, users}) {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name }) => {
              return (
                <th
                  className="col"
                  key={name}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <DataResults users={users} />
      </table>
    </div>
  );
}

export default DataTable;
