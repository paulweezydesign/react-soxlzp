import { Link, useParams } from 'react-router-dom';
import kittens from '../data';
import React from 'react';

const SingleKitten = () => {
  const { kittenId } = useParams();
  const kitten = kittens.find((kitten) => kitten.id === kittenId);
  const { image2, name } = kitten;
  return (
    <section className="container mx-auto px-6 max-w-3xl">
      <img className="w-[800px] h-[400px] mx-auto" lsrc={image2} alt={name} />
      <h5 className="text-5xl font-black">{name}</h5>
      <p className="prose-xl text-lg lg:prose-2xl py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut
        venenatis tellus in metus vulputate eu scelerisque. Dignissim sodales ut
        eu sem integer vitae justo eget magna. Euismod lacinia at quis risus sed
        vulputate odio ut enim. Scelerisque purus semper eget duis at tellus at
        urna condimentum. Fames ac turpis egestas integer. Urna et pharetra
        pharetra massa massa ultricies mi. Iaculis nunc sed augue lacus viverra
        vitae congue. Vel elit scelerisque mauris pellentesque pulvinar
        pellentesque habitant morbi. Egestas quis ipsum suspendisse ultrices
        gravida dictum fusce ut placerat. Commodo elit at imperdiet dui.
        Ultrices neque ornare aenean euismod elementum nisi. Cras sed felis eget
        velit aliquet. Fermentum posuere urna nec tincidunt praesent. Eget velit
        aliquet sagittis id. Non diam phasellus vestibulum lorem sed risus. Sed
        egestas egestas fringilla phasellus faucibus scelerisque eleifend donec
        pretium. Orci porta non pulvinar neque. Id consectetur purus ut faucibus
        pulvinar elementum integer enim. Ante metus dictum at tempor commodo.
      </p>
      <div className="mb-4">
        <Link className="btn" to="/kittens">
          back to kittens
        </Link>
        <Link
          className="btn bg-[deeppink] border-[deeppink] hover:bg-[hotpink] hover:border-[hotpink] hover:text-white"
          to="/contact"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default SingleKitten;
