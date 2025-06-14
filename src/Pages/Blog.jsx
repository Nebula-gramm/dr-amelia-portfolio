import React from "react";
import PostCard from "../Components/Cards/PostCard";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 my-4">
      <div className="">
        <h1 className=" text-3xl md:text-4xl font-bold font-primary">Blog</h1>
        <p className="font-primary md:text-xl">
          Stay Informed with the latest health insights and update Dr. Amelia
          carter's practice.
        </p>
        <div className="my-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      <div className="join flex justify-center">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked="checked"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </div>
  );
};

export default Blog;
