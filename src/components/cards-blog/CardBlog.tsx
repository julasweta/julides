import React from "react";
import { ICardInterior } from "../../interfaces/blogInterface";
import { Link } from "react-router-dom";

const CardBlog: React.FC<{ post: ICardInterior }> = ({ post }) => {

  return <Link to={`${post.id}`}  className="blog-card">
    
  
    <img src={process.env.PUBLIC_URL + "/" + post.description.blocks[0].photo[0]} alt="Меблі з Власним Характером - Фото 1" />
    <div className="blog-card_info">
      <h2>{post.title}</h2>
    </div>
  </Link>

};

export { CardBlog };
