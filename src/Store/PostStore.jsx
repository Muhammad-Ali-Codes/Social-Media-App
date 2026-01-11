import { createContext, useReducer } from "react";
const default_export = {
  postlist: [],
  addpost: () => {},
  deletepost: () => {},

};

const PostList = createContext()

 
const postlistReduser = (curentpost, action) => {
  return curentpost
}
const  PostListProvider = ({children}) => {
  const [postlist , dispatchpostlist] = useReducer(postlistReduser)


  const addpost = () => {

  }
  const deletepost = () => {

  }
  return <PostList.Provider value={{postlist,addpost, deletepost}}>
    {children}</PostList.Provider>
 
}

export default PostListProvider
