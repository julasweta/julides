import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { blogActions } from "../redux/slices";


const Blog = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(blogActions.getPosts());
  }, [dispatch]);
  
  return <div className="blog">
    <Outlet />
  </div>;
};

export { Blog };
