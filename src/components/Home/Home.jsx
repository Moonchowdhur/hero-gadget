import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../../public/gadget.jpg'
const Home = () => {
    return (
        <section>
        <div className='text-center my-4 p-4 max-w-9xl w-full bg-slate-200 min-h-screen'>
          <h2 className='text-6xl py-8 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold'>Welcome To HeroGadget</h2>  
          <p className='text-xl w-1/2 mx-auto'>Best E-commerce platform for buying high quality Smart Home Appliances at extremely affordable Price.</p> 
          <div className='py-7 items-center'>
            <Link to="/shop"><button className='bg-cyan-400 hover:bg-cyan-600 text-xl mx-4 font-bold p-4 rounded-xl' >Shop Now</button></Link>
            <button className='bg-black text-white text-xl font-bold p-4 rounded-xl' >Learn more</button>
          </div>
        </div>
        <img src={pic} className='mx-auto relative  -top-32' alt="" />
        </section>
    );
};

export default Home;