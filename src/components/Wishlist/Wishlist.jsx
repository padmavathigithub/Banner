import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io'; 
import "./Wishlist.css"

const Wishlist = () => {

  const [products, setProducts] = useState([
    { id: 1, 
      name: 'Nest Thermostat', 
      price: 10, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxpV6h6O3sRFPctf_Znla7KTOfrsEK0DYrLVKYJXgug&s' 
    },

    { id: 2, 
      name: 'Nest Thermostat',
       price: 15, 
       imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxpV6h6O3sRFPctf_Znla7KTOfrsEK0DYrLVKYJXgug&s' 
      },

    { id: 3, 
      name: 'Nest Thermostat', 
      price: 20, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxpV6h6O3sRFPctf_Znla7KTOfrsEK0DYrLVKYJXgug&s' 
    },
    { id: 4, 
      name: 'Nest Thermostat', 
      price: 25, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxpV6h6O3sRFPctf_Znla7KTOfrsEK0DYrLVKYJXgug&s' 
    },
  ]);

  

  const deleteProduct = (productId) => {
    
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };



  return (
    <div className='bg-slate-200  p-3'>
        <div className='bg-white  rounded-md p-7 '>
      <h1 className='text-center text-3xl'>My WishList</h1>
      <div className='flex justify-around pt-5 pb-5'>
        <div>
            <h1 className='text-3xl text-sky-950'>Product name</h1>
        </div>
        <div className='unit-price'>
            <h1 className='text-3xl text-sky-950'>Unit Price</h1>
        </div>
        <div>
            <h1 className='text-3xl text-sky-950'>Stock status</h1>
        </div>
      
      </div>
      <hr className='bg-dark  border '/>      
      <div>
        {products.map((product) => (
        <div key={product.id}>
          <div className='flex justify-around items-center m-3 container'>
            <div className='flex justify-center items-center img' >
          <img src={product.imageUrl} alt={product.name} className='h-32'/>
          <p className='ml-5 text-blue-950 font-bold text-1xl'>{product.name}</p>
          </div>          
          <div>
          <p className='text-3xl price '>${product.price}</p>
          </div>
          <div>
            <button className='button' type="button">
            <IoMdClose onClick={() => deleteProduct(product.id)} style={{ cursor: 'pointer' }} />
            </button>         
         
          </div>
          <button  className='bg-slate-500 text-white p-5 rounded-md button w-32'>Add to Cart</button>
          
        </div>
        <hr className='bg-dark  border '/>
        </div>
      ))}
    
      </div>
        </div>   
       
    </div>
  )
}

export default Wishlist;
