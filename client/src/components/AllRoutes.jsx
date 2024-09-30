import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import SearchBar from "../pages/SearchBar";

const AllRoutes = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
