import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Side-bar";
import Creataposts from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PopstListProvider from "./store/post-list-store";
import { Outlet } from "react-router";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");

  return (
    <PopstListProvider>
      <div className="app-container">
        <Sidebar
          SelectedTab={SelectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="Content">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PopstListProvider>
  );
}

export default App;
