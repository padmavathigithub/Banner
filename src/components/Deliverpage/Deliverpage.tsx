import React, { useState } from 'react';
import "./Deliverpage.css"



const Deliverpage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    name: '',
    state: '',
    district: '',
    address: '',
    locality: '',
    city: '',
    landmark: '',
    pin: '',
    phoneNumber: '',
   
  });

  const [displayData, setDisplayData] = useState<any>(null);
  const listItems = ['Cash On Delivery', 'Online Payment'];

  const listItems1 = ['Items', 'Delivery' , 'GST-(5%)'];
  const listItems2 = ['3478', '68' , '7865.34'];

  

  const toggleForm = () => {
    setShowForm(!showForm);
    setDisplayData(null); 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData(formData); 
    setShowForm(false); 
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center">
      <div className='bg-slate-300 p-5 m-3 lg:w-1/2' > 
        <h1 className='text-red-600 text-3xl text-center font-bold'>Deliver to</h1>
        <p className="border border-black p-4 rounded-md bg-white">Select Address or add a new address</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-5" onClick={toggleForm}>
         Add New Address
        </button>
        {showForm && (
          <form className='m-3' onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border  border-gray-400 rounded-md p-2 w-full "
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="border border-gray-400 rounded-md p-2 w-full"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    id="district"
                    name="district"
                    className="border border-gray-400 rounded-md p-2 w-full"
                    placeholder="Enter district"
                    value={formData.district}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border border-gray-400 rounded-md p-2 w-full"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="locality"
                  name="locality"
                  className="border border-gray-400 rounded-md p-2 w-full"
                  placeholder="Enter locality"
                  value={formData.locality}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="border border-gray-400 rounded-md p-2 w-full"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    id="landmark"
                    name="landmark"
                    className="border border-gray-400 rounded-md p-2 w-full"
                    placeholder="Enter landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    id="pin"
                    name="pin"
                    className="border border-gray-400 rounded-md p-2 w-full"
                    placeholder="Enter PIN"
                    value={formData.pin}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-1/2"> 
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="border border-gray-400 rounded-md p-2 w-full"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                     />
                </div>
              </div>      
              
              
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-5" type="submit">
              Add This Address
            </button>
          </form>
        )}
        
        {displayData && (
          <div className="m-3 border  p-4  bg-white">
            <h2 className="text-lg font-semibold mb-2">Address Details:</h2>
            <p>Name: {displayData.name}</p>
            <p>State: {displayData.state}</p>
           <p>District: {displayData.district}</p>           
            <p>Address: {displayData.address}</p>
            <p>Locality: {displayData.locality}</p>
            <p>City: {displayData.city}</p>
            <p>Landmark: {displayData.landmark}</p>
            <p>PIN: {displayData.pin}</p>
            <p>Phone Number: {displayData.phoneNumber}</p>  
          </div>
        )}
      </div>
    
      <div className='lg:w-2/5'>
      <div className='m-3 bg-slate-300 p-5 h-40'>
        <h1 className='text-red-600 text-2xl text-center font-bold '>Pay With</h1> 
         <div className='text-center'>
         <ul className='list-square'>
          {listItems.map((item, index) => (
            <li key={index} className=" text-1xl mt-3">{item}</li>
          ))}
        </ul>
     
         </div>
        
      </div>
      <div className='bg-slate-300 p-5 m-3 h-80'>
        <h1 className='text-red-600 text-center font-bold text-3xl'> Orders Summary</h1>
        <div className='flex justify-around mt-3 mb-3'>
          <div>
          {listItems1.map((item, index) => (
        <h1 key={index} className="mt-4">{item}</h1>
      ))}
          </div>
          <div>
          {listItems2.map((item, index) => (
        <h1 key={index} className="mt-4 ">{item}</h1>
      ))}
          </div>
        </div>
        <hr className='bg-black'/>
        <div className='flex justify-around'>
          <div>
            <h1 className='text-red-600 text-2xl font-bold'>Order Total:</h1>
          </div>
          <div>
            <h1 className='text-red-600 text-2xl font-bold'>2267</h1>
          </div>
        </div>

      </div>
      <button className='bg-red-500 text-white text-center lg:w-2/5 p-3 rounded-md ml-3' type="button">Place Order</button>
      </div>      
      </div>     
  );
};

export default Deliverpage;

