import React from 'react';
import { NavLink } from 'react-router-dom';

const Filaberta = () => {
  return (
    <section className="">
      <main className="">
        <h1 className="text-7xl font-black">Filaberta</h1>
        <div className="">
          <NavLink to="/kittens">Back</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </div>
      </main>
    </section>
  );
};
export default Filaberta;
