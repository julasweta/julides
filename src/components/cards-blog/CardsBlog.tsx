import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { CardBlog } from './CardBlog';


const CardsBlog: React.FC = () => {

  const { posts } = useAppSelector(
    (state: RootState) => state.blog,
  );



  return (
    <div className="posts">

      <h1>Ідеї для дизайну та ремонту: залишайтесь в тренді та знайдіть своє джерело натхнення.</h1>
      {posts && posts.map(post =>
        <CardBlog key={post._id} post={post} />)}
    </div>
  )
}

export default CardsBlog