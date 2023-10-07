import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { blogActions } from '../../redux/slices';
import { CardBlog } from './CardBlog';


const CardsBlog:React.FC = () => {
  const dispatch = useAppDispatch();

  const { posts } = useAppSelector(
    (state: RootState) => state.blog,
  );

  useEffect(() => {
    dispatch(blogActions.getPosts());
  }, [dispatch]);

  return (
    <div className="posts">
      {posts && posts.map(post => <CardBlog key={post.id} post={post} />)}
    </div>
  )
}

export default CardsBlog