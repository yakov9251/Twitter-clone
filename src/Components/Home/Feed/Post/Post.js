import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material"

import {
  MoreHoriz,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorderOutlined,
  PublishOutlined,
} from '@mui/icons-material';

const Post = () => {
    return( 
    <div className="post">
      <Avatar src="https://www.now14.co.il/wp-content/uploads/2022/02/shutterstock_1392193913-768x512.jpg"
       className="post__avatar"
       />
      <div className="post__content">
       <div className="post__header">
        <div className="post__titles">
          <h3>john Doe</h3>
          <h4>@johndoe</h4>
        </div>

          <MoreHoriz className="post__options" />
        </div>
        <div className="post__description">
          A beautiful smile for your health
          You haven't been abroad for two years? Are you in a bad mood?
          Are you 
        </div>
        <div className="post__media">
          <img
           src="https://www.now14.co.il/wp-content/uploads/2022/02/shutterstock_1392193913-768x512.jpg"
           alt=""
         /> 
        </div>
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorderOutlined fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
 );  
};

 export default Post;