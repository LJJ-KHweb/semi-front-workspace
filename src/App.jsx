import "./App.css";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import { Routes, Route } from "react-router-dom";
import SignUp from "./features/member/SignUp";
import Login from "./features/member/Login";
import ChangePassword from "./features/member/ChangePassword";
import DeleteAccount from "./features/member/DeleteAccount";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div style={{ height: "600px" }}></div>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<ChangePassword />} />
        <Route path="/delete" element={<DeleteAccount />} />
        <Route path="/*" element={<h1>그런거 없어요~</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
