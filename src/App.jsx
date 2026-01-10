import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import Slidebar from "./Components/Slidebar";

const App = () => {
  return (
    <>
      <div className="flex">
        <Slidebar />
        <div className="w-full">
          <Header />
          <CreatePost/>
          <PostList/>
          <Footer />
          
        </div>
      </div>
    </>
  );
};

export default App;
