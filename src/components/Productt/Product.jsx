import React from 'react';

const Product = ({product,addHandler}) => {

    const {id,name,picture,price}=product
    return (
        <div className='shadow-xl p-4 rounded-lg bg-slate-200 my-5'>
            <img src={picture} className='rounded-xl p-5' alt="" />
            <h2 className='font-bold text-2xl'>{name}</h2>
            <h2 className='text-xl'>Category: Home Appliance</h2>
            <p className='font-bold text-xl'>Price: ${price}</p>
            <button onClick={()=>addHandler(product)} className='bg-cyan-400 w-full my-5 mx-auto  hover:bg-cyan-600 text-xl  font-bold p-4 rounded-xl' >Add To Cart</button>
        </div>
    );
};

export default Product;