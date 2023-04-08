import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Product from '../Productt/Product';
import { addToDb } from '../../utility/fakedb';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Loading from '../Loading/Loading';
const Shop = () => {
    const navigation=useNavigation()

    if(navigation.state==="loading"){
        return <Loading></Loading>
    }
    const productData=useLoaderData()
    const [cart,setCart]=useState([])
   
    let addedCart=[]
    function addHandler(product){
     addedCart=[...cart,product]
     setCart(addedCart)
      addToDb(product.id)
    }
    
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 md:mx-12'>
             {
                productData.map(product=><Product  addHandler={addHandler} key={product.id} product={product}></Product>)   
             }
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={productData}>
         {/* <XAxis dataKey="name" /> */}
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
         </AreaChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Shop;