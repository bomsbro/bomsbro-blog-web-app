import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
      <p className="text-xl font-semibold pb-5">About Me</p>
      <p className="pb-2">
        passinate web programmer. main stack is Front-end. instrested in Backend &amp; DevOps too. I
        Always Think about well-made system.
      </p>
      <a
        href="#"
        className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
      >
        Get to know Me
      </a>
    </div>
  );
};

export default AboutMe;
