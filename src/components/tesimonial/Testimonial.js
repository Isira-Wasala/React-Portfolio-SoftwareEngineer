import React from 'react';
import Title from '../layouts/Title';

const Testimonial = () => {
  return (
    <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT EXPERTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex justify-center items-center py-20">
          <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
            The feedbacks will be added soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
