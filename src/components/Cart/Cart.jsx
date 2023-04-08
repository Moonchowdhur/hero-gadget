import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'; 
import Itemcart from '../Itemcart/Itemcart';
import { deleteShoppingCart, removeFromDb } from '../../utility/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
   const navigation=useNavigation()

   if(navigation.state==="loading"){
       return <Loading></Loading>
   }
    const savedCart=useLoaderData()
   //  console.log(savedCart)
    const [cart,setCart]=useState(savedCart)

 function deleteAll(){
   toast.error("Product Deleted")
   setCart([])
   deleteShoppingCart()
 }

 function deleteOneProduct(id){
  const remainingProduct=cart.filter(pd=>pd.id!==id)

  setCart(remainingProduct)
  removeFromDb(id)
  toast.success("Product Deleted")
 }
   
    return (
       <div className='md:mx-36'>
      <div className='divide-y gap-8 '> 
      <h2 className='font-bold text-2xl'>Review items Here❤️:</h2>
      {
    cart.map(cart=><Itemcart cart={cart} deleteOneProduct={deleteOneProduct} ></Itemcart>)
     }
      </div>
     <div>
        {

        }
     </div>
     <div className='flex items-end  mx-48 '>
      {/* {
         cart.lenght===0? :
      } */}
     <button onClick={deleteAll} className=' hover:bg-cyan-600 border-2 shadow-lg border-cyan-500 text-xl mx-4 font-bold p-4 rounded-2xl' >Clear Cart</button>
     <button className='bg-cyan-400 hover:bg-cyan-600  shadow-lg text-xl mx-4 font-bold p-4 rounded-2xl' >Place Order</button>
     </div>
     <ToastContainer />
       </div>
    );
};

export default Cart;