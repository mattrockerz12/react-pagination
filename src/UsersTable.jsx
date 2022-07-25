import React from "react";
import Table from "./Table";

class UsersTable extends React.Component {
  render() {
    const { users, onSort, sortColumn } = this.props;

    return <Table data={users} sortColumn={sortColumn} onSort={onSort} />;
  }
}

export default UsersTable;
