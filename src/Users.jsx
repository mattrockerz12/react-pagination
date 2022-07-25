import axios from "axios";
import React, { useEffect, useState } from "react";
import Paginator from "./Paginator";
//import { paginate } from "./utils/paginate";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "./redux/actions/userActions";

const Users = () => {
  //const [users, setUsers] = useState([]);
  //const [currentPage, setCurrentPage] = useState(1);
  //const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState({
    page: 1,
  });
  const users = useSelector((state) => state.users.users);
  const meta = useSelector((state) => state.users.meta);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers(filters));
  }, [dispatch, filters]);

  const handlePageChange = (page) => {
    setFilters((prevPage) => ({
      ...prevPage,
      page,
    }));
  };

  //const data = paginate(users, filters.page, 4);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator
        itemsCount={meta.total}
        pageSize={meta.per_page}
        currentPage={meta.current_page}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
