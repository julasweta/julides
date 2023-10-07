import React from "react";
import { ICardInterior } from "../../interfaces/blogInterface";

const CardBlog: React.FC<{ post: ICardInterior }> = ({ post }) => {
  return <div className="blog-card">
    
  
    <img src={process.env.PUBLIC_URL + "/" + post.description.blocks[0].photo} alt="Меблі з Власним Характером - Фото 1" />
    <div className="blog-card_info">
      <h2>{post.title}</h2>
    </div>
  </div>

};

export { CardBlog };
