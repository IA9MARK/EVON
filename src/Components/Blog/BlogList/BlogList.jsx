import React from "react";

import "./BlogList.css";

import BlogData from "../../../Data/BlogData";
import { Link } from "react-router-dom";

const BlogList = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="blogListSection">
        <div className="blogListHeaderContainer">
          <div className="blogListHeader">
            <h2>Il Blog</h2>
            <div className="blogListHeaderCategories">
              <p>TUTTO</p>
              <p>L'AZIENDA</p>
              <p className="activeCategory">MODA</p>
              <p>STILE</p>
              <p>TENDENZE</p>
              <p>BELLEZZA</p>
            </div>
          </div>
        </div>
        <div className="blogPostListContainer">
          {BlogData.map((blogPost) => (
            <div className="blogPost">
              <div className="blogPostThumb">
                <img src={blogPost.blogThumbnail} alt="blogPost" />
              </div>
              <div className="blogPostContent">
                <div className="blogPostContentDate">
                  <p>Dal Sito Ufficiale</p>
                  <p>{blogPost.blogDate}</p>
                </div>
                <div className="blogPostContentHeading">
                  <Link to="/BlogDetails" onClick={scrollToTop}>
                    {blogPost.blogHeading}
                  </Link>
                </div>
                <div className="blogPostContentDescription">
                  <p>
                    Midst one brought greater also morning green saying had
                    good. Open stars day let over gathered, grass face one every
                    light of under.
                  </p>
                </div>
                <div className="blogPostContentReadMore">
                  <Link to="/BlogDetails" onClick={scrollToTop}>
                    Continua a leggere
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="blogListShowMore" onClick={scrollToTop}>
          Vedi altro
        </p>
      </div>
    </>
  );
};

export default BlogList;
