import { Route, Routes } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import Layout from "../components/Layout/Layout";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </>
  );
}
