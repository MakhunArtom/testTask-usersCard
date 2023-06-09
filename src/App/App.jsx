import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Header, Home, Tweets } from "../page/index";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Header setUsers={setUsers} setFilter={setFilter}></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tweets"
          element={<Tweets filter={filter} users={users} setUsers={setUsers} />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
