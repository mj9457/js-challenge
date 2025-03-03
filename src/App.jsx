import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
