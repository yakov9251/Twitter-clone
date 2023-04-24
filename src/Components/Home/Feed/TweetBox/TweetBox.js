import {Avatar, Button} from "@mui/material";
import React from 'react';
import "./TweetBox.css";

import { 
   ImageOutlined,
   GifBoxOutlined,
   PollOutlined,
   SentimentSatisfiedAltOutlined,
   CalendarTodayOutlined,
   LocationOnOutlined,
 } from "@mui/icons-material";
       
const TweetBox = () => {
  return (
  <div className="tweetbox">
     <form className="tweetbox__form">
        <Avatar className="tweetbox__avatar"/>
         <div className="tweetbox__form-field">
            <div className="tweetbox__input">
             <input type="text" placeholder="what's happening?" />
          </div>
          <div className="tweetbox__input">
            <div className="tweetbox__icons">
               <ImageOutlined  className="tweetbox__icons"/>
               <GifBoxOutlined  className="tweetbox__icons"/>
               <PollOutlined  className="tweetbox__icons"/>
               <SentimentSatisfiedAltOutlined  className="tweetbox__icons"/>
               <CalendarTodayOutlined  className="tweetbox__icons"/>
               <LocationOnOutlined  className="tweetbox__icons"/>
            </div>
            <Button className="tweetbox__btn">Tweet</Button>
          </div>
       </div>
     </form>
  </div>
  );
};

export default TweetBox

