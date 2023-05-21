import { Routes, Route } from "react-router-dom";

import { Header, Home, Tweets } from "../page/index";

export const App = () => {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
