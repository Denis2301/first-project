import React, { useState } from "react";
import objStyle from "./Post.module.css";

export const Post = (props) => {
    return (
        <div className={`${objStyle.post}`}>
            <div className={objStyle.post__imgProfile}>
                <img
                    src="https://w7.pngwing.com/pngs/851/967/png-transparent-cat-computer-icons-creative-cat-mammal-cat-like-mammal-animals-thumbnail.png"
                    alt="avatar"
                />
                <span className={objStyle.author}>{props.author}</span>
            </div>
            <p className={objStyle.post__text}>{props.message}</p>
            <span id={objStyle.likeCount}>{props.likeCount}</span>
            <span id={objStyle.like}>like</span>
        </div>
    );
};
