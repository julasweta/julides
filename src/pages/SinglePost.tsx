import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { RootState } from '../redux/store';
import { ICardInterior, Block } from '../interfaces/blogInterface';


const SinglePost = () => {
  const [singlePost, setSinglePost] = useState<ICardInterior | null>(null);

  const { posts } = useAppSelector(
    (state: RootState) => state.blog,
  );


  const { id } = useParams();

  useEffect(() => {
    const res = posts && posts.filter(post => post._id === id);
    setSinglePost(res && res[0] as ICardInterior);
  }, [id, posts])


  console.log(singlePost);
  return (
    singlePost &&
    <div className="single">
      <h1>{singlePost && singlePost.title}</h1>
        {singlePost.description.blocks.map((block: Block, ind: number) => <div className="block" key={ind}>
        <div className="block-img">
          {block.photo.map((img: string, ind: number) => <img src={process.env.PUBLIC_URL + "/" + img} alt="img" key={ind}></img>)}
        </div>
        {block.title !== "" && <h3>{block.title}</h3>}
        <p>{block.paragraph}</p>


      </div>)}

    </div>
  )
}

export { SinglePost }