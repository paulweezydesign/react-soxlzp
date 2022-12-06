import { Link, useParams } from 'react-router-dom';
import kittens from '../data';
import React from 'react';

const SingleKitten = () => {
  const { kittenId } = useParams();
  const kitten = kittens.find((kitten) => kitten.id === kittenId);
  const { image2, name } = kitten;
  return (
    <section className="container mx-auto ">
      <img className="w-[800px] h-[400px] mx-auto" lsrc={image2} alt={name} />
      <h5 className="text-5xl font-black">{name}</h5>
      <Link to="/kittens">back to kittens</Link>
      <Link to="/contact">Contact us</Link>
    </section>
  );
};

export default SingleKitten;
