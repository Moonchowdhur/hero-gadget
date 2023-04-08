import React from 'react';
import { AiFillDelete } from 'react-icons/ai'; 
const Itemcart = ({cart,deleteOneProduct}) => {
    const {name,quantity,picture,price,id}=cart
    return (
        <div>
            <div className='bg-slate-200 mx-48 my-10 p-4 rounded-lg'>
            <div className='flex items-center justify-between'>
               <img src={picture} className='w-[200px]' alt="" />
               <div className='mx-5'>
                 <h2 className='text-2xl font-bold '>Name:{name}</h2>
                 <p>Quantity: {quantity}</p>
                 <span onClick={()=>deleteOneProduct(id)} className='text-2xl flex items-center text-cyan-500'>
                 Remove
                 <AiFillDelete/>
                 </span>
               </div>
               <div className='font-bold  -mt-16'>
                price:${price}
               </div>
            </div>
        </div> 
        </div>
    );
};

export default Itemcart;