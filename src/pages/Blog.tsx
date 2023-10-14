import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { blogActions } from "../redux/slices";
import { RootState } from "../redux/store";
import { Dna } from "react-loader-spinner";


const Blog = () => {
  const {loading } = useAppSelector(
    (state: RootState) => state.blog,
  );

const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(blogActions.getPosts());
}, [dispatch]);

  return <div className="blog">
    {loading ? (
      <Dna
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    ) : <Outlet />}

</div>;
};

export { Blog };
