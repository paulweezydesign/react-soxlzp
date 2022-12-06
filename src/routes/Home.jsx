import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="grid grid-cols-1 place-items-center h-screen px-6">
      <main>
        <div className="">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black">
            Come adopt my cute
            <br className="hidden md:block" /> ass kittens.
          </h1>
          <p className="text-xl prose lg:prose-2xl">
            They deserve a good home with plenty of love and affection, annd
            snacks aaannnndddd belly rubbs!
          </p>
          <div className="">
            <Link className="btn" to="/about">
              Learn more
            </Link>
            <Link
              className="btn bg-[deeppink] border-[deeppink] hover:bg-[hotpink] hover:border-[hotpink] hover:text-white"
              to="/kittens"
            >
              To Cuteness
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
