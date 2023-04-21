import React from "react";
import "./Sidebar.css";
import SidebarOption from './SidebarOption/SidebarOption';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
    BookmarkBorder,
    Home,
    ListAlt,
    MoreHoriz,
    NotificationsNone,
    PermIdentity,
    Search,
    Twitter,
} from "@mui/icons-material";
import {Button} from "@mui/material";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Twitter className="sidebar__twitter-icon" />

            <SidebarOption active Icon={Home} text="Home" />
            <SidebarOption Icon={Search} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="NotificationsNone" />
            <SidebarOption Icon={MailOutlineIcon} text="Message" />
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOption Icon={ListAlt} text="List" />
            <SidebarOption Icon={PermIdentity} text="Profile" />
            <SidebarOption Icon={MoreHoriz} text="More" />

            <Button className="sidebar__tweet-btn" variant="outlined" fullwidth>
                Tweet
            </Button>
        </div>
    );
};

export default Sidebar;

 