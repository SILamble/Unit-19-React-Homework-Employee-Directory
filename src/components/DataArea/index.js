import React from "react";
import Search from "../Search"
import API from "../../Utils/api.js"
import DataTable from "../DataTable"


export default class DataArea extends React.Component {
    state ={
        users: [{}],
    }
    headings = [
      { name: "Image"},
      { name: "Name"},
      { name: "Phone"},
      { name: "Email"},
      { name: "DOB"}
    ]
  

    componentDidMount() {
        API.getUsers().then(results => {
          this.setState({
            users: results.data.results
          });
        });
      };
    

      render() {
        return (
          <>
            <Search/>
            <div className="data-area">
              <DataTable
                headings={this.headings}
                users={this.state.users}
              />
            </div>
          </>
        );
      }
    

}