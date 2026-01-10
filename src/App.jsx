import { useState } from "react";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import Slidebar from "./Components/Slidebar";
import PostListProvider from "./Store/PostStore";

const App = () => {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <>
    <PostListProvider>
      <div className="flex">
        <Slidebar selectedtab={selectedtab} setselectedtab={setselectedtab} />
        <div className="w-full">
          <Header />
          {selectedtab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
      </PostListProvider>
    </>
  );
};

export default App;
