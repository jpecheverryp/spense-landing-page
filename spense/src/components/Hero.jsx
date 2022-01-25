import React from 'react';
import heroImg from '../assets/HeroImage(Desktop).png';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='img-container'>
        <img src={heroImg} alt='Woman working in a laptop inside a cafeteria' />
      </div>
      <section className='hero__text'>
        <h1 className='hero__heading'>
          Share your unfiltered thoughts. Get paid.
        </h1>
        <p>
          Spense is an open platform for individuals to share their unfiltered
          thoughts. Discuss the topics you love, and get paid for{' '}
          <span className='italic'>just</span> doing that
        </p>
        <ul>
          <li>Receive 99% off the earnings.</li>
          <li>Get paid via Debit Card, ACH, or Paypal.</li>
          <li>Withdraw your earnings anytime.</li>
        </ul>
        <form>
          <input type='email' placeholder='john@example.com' />
          <button>Get Started</button>
        </form>
      </section>
    </section>
  );
};

export default Hero;
