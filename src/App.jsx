import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import HomeAdmin from "./pages/HomeAdmin";
import AddNewPost from "./pages/AddNewPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<HomeAdmin />} />
        <Route path="add-new-post" element={<AddNewPost />} />
      </Route>
    </Routes>
  );
}

export default App;
