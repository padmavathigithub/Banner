import React from 'react'

const order= [
    {
      order: 'ORDER',
      date:'DATE',
      status:'STATUS',
     total:'TOTAL',
    },
    
  ];
 
  const order1=[

    {
        orders:'#45456',
        month:'January 24 2023',
        status:'processing',
        amount:'2344.04 item',
        text:'View',
    },
    {
        orders:'#45456',
        month:'January 24 2023',
        status:'processing',
        amount:'2344.04 item',
        text:'View',

    },
    {
        orders:'#45456',
        month:'January 24 2023',
        status:'processing',
        amount:'2344.04 item',
        text:'View',
    },
    {
        orders:'#45456',
        month:'January 24 2023',
        status:'processing',
        amount:'2344.04 item',
        text:'View',
    },
    {
        orders:'#45456',
        month:'January 24 2023',
        status:'processing',
        amount:'2344.04 item',
        text:'View',
    },
    {
        orders:'#45456',
        month:'January 24 2023',
        status:'processing',
        amount:'2344.04 item',
        text:'View',
    },
  ]


const Orders = () => {
  return (
    <div className='p-5 bg-slate-200 '>
     <div className='flex flex-col justify-center items-center overflow-x: scroll overflow-y:scroll'>
      {order.map((product, index) => (
        <div className="w-full lg:w-2/3 md:w-5/6 bg-white p-5 " key={index} >
            <div className='flex justify-between md:w-5/6 lg:w-3/4'>
            <div>
            <h1 className='font-bold text-blue-950'>{product.order}</h1>
                </div> 
                <div>
                <h1 className='font-bold text-blue-950'>{product.date}</h1>
                </div>   
                <div className=''>
                <h1 className='font-bold text-blue-950 '>{product.status}</h1>
                </div>        
                <div>
                <h1 className='font-bold text-blue-950 '>{product.total}</h1>
                </div>
         
        </div>
        </div>
      ))}
      
      

      
        {order1.map((item,index)=>(
            <div key={index} className='md:w-5/6 lg:w-2/3 w-full p-5'>
              <div className='flex justify-between'>
                <div className='sm:m-2'>
                <h3 className='text-pink-700 font-bold '>{item.orders}</h3>
                </div>
                <div className='sm:m-2'>
                <h3 className='text-slate-400 font-bold'>{item.month}</h3>
                </div>
                <div className='sm:m-2'>
                <h3 className='text-slate-400 font-bold'>{item.status}</h3>
                </div>
                < div className='sm:m-2'>
                <h3 className='text-slate-400 font-bold'>{item.amount}</h3>
                </div>
                 
                 
                <button type="button" className='bg-blue-900 text-white p-2 rounded-md'>{item.text}</button>
              </div>

               <hr className='bg-black mt-3'/>
            </div>
           

        ))}
      </div>
      </div>
  )
}

export default Orders