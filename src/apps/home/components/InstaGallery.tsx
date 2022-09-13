import React from "react";

const InstaGallery = () => {
  return (
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
      <p className="text-xl font-semibold pb-5">Instagram</p>
      <div className="grid grid-cols-3 gap-3">
        <img
          className="hover:opacity-75"
          src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
          alt=""
        />
        <img
          className="hover:opacity-75"
          src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
          alt=""
        />
        <img
          className="hover:opacity-75"
          src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
          alt=""
        />
        <img
          className="hover:opacity-75"
          src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
          alt=""
        />
        <img
          className="hover:opacity-75"
          src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
          alt=""
        />
        <img
          className="hover:opacity-75"
          src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
          alt=""
        />
        <img
          className="hover:opacity-75"
          src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
          alt=""
        />
        <img
          className="hover:opacity-75"
          src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
          alt=""
        />
        <img
          className="hover:opacity-75"
          src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
          alt=""
        />
      </div>
      <a
        href="#"
        className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
      >
        <i className="fab fa-instagram mr-2" /> Follow @dgrzyb
      </a>
    </div>
  );
};

export default InstaGallery;
