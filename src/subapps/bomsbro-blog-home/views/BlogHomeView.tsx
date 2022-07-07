import React from "react";

const BlogHomeView = () => {
  return (
    <>
      <div>야호</div>
      <div
        className="relative w-full flex items-center invisible md:visible md:pb-12"
        x-data="getCarouselData()"
      >
        <button
          type="button"
          className="absolute bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 ml-12"
          onClick={async () => console.log("눌렀다")}
        >
          &#8592;
        </button>
        {/** <template x-for="image in images.slice(currentIndex, currentIndex + 6)" :key="images.indexOf(image)">
      <img className="w-1/6 hover:opacity-75" :src="image">
        </template> */}

        <img
          className="w-1/6 hover:opacity-75"
          src="https://picsum.photos/300/300"
          alt=""
        />
        <img
          className="w-1/6 hover:opacity-75"
          src="https://picsum.photos/300/300"
          alt=""
        />
        <img
          className="w-1/6 hover:opacity-75"
          src="https://picsum.photos/300/300"
          alt=""
        />
        <button
          type="button"
          className="absolute right-0 bg-blue-800 hover:bg-blue-700 text-white text-2xl font-bold hover:shadow rounded-full w-16 h-16 mr-12"
          onClick={async () => console.log("눌렀다")}
        >
          &#8594;
        </button>
      </div>
    </>
  );
};

export default BlogHomeView;
