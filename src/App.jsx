import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Side-bar";
import Creataposts from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar
        SelectedTab={SelectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div className="Content">
        <Header></Header>
        {SelectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <Creataposts></Creataposts>
        )}

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
