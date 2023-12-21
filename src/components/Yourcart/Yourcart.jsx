import React, { useState } from 'react';
import { RiChatDeleteLine } from "react-icons/ri";
import './Yourcart.css';

const Yourcart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      imageSrc: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71GqQyjhq6L._AC_UF894,1000_QL80_.jpg',
      text: 'Nest Thermostat',
      price: '$34556',
      description: 'Description for Item 1',
      quantity: 0,
    },
    {
      id: 1,
      imageSrc: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71GqQyjhq6L._AC_UF894,1000_QL80_.jpg',
      text: 'Nest Thermostat',
      price: '$34556',
      description: 'Description for Item 1',
      quantity: 0,
    },
    {
      id: 1,
      imageSrc: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71GqQyjhq6L._AC_UF894,1000_QL80_.jpg',
      text: 'Nest Thermostat',
      price: '$34556',
      description: 'Description for Item 1',
      quantity: 0,
    },
    {
      id: 1,
      imageSrc: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71GqQyjhq6L._AC_UF894,1000_QL80_.jpg',
      text: 'Nest Thermostat',
      price: '$34556',
      description: 'Description for Item 1',
      quantity: 0,
    },
    
  ]);

  const incrementQuantity = (itemId: number): void => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <div className='hole-container'>
      <div className='cart1'>
      <div className='container1'>
        <div>
          <h1 className='heading'>Your Cart</h1>
        </div>
        <div>
          <button type="button" className='button'>KEEP SHOPPING</button>
        </div>
      </div>
      <div className='container2'>
        <div>
          <h4>Item</h4>
        </div>
        
          <div className='price'>
            <h4 >Price</h4>
          </div>
          <div>
            <h4>Quantity</h4>
          </div>
          <div>
            <h4>Total</h4>
          </div>
        
      </div>
      <hr className='line'/>
      <div>
        {items.map((item) => (
          <div key={item.id} className="item container3">
            <img src={item.imageSrc} alt={item.text} />
            <h3 className='text'>{item.text}</h3>
            <h4>{item.price}</h4>
            <div>
            <button onClick={() => incrementQuantity(item.id)} style={{ padding: '10px 20px', fontSize: '16px' }}>{item.quantity}</button>
            </div>
            <p>{item.price}</p>
           <div className='w-24'>
           <RiChatDeleteLine size={32}/>
           </div>
          </div>
        ))}
      </div>
    </div>
    <div>      
  </div>
</div>
  );
};

export default Yourcart;
