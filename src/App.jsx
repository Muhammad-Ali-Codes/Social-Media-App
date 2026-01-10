import { useState } from "react";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import Slidebar from "./Components/Slidebar";

const App = () => {
  const [selectedtab, setselectedtab] = useState("CreatePost");
  return (
    <>
      <div className="flex">
        <Slidebar selectedtab={selectedtab} setselectedtab={setselectedtab} />
        <div className="w-full">
          <Header />
          {selectedtab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
