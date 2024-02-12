import React from 'react';
import './Popular.css';
import data_product from '../../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div
    data-aos='fade-up' data-aos-offset='200' data-aos-delay='50' data-aos-duration='1000' data-aos-easing='ease-in-out'
     className='popular py-8 px-4 flex flex-col items-center justify-center w-full' >
      <h1 className='text-4xl py-7'>Popular for women</h1>
      <hr className='hr mb-8' />
      <div className='grid grid-cols-1  sm:grid-cols-2 w-full  p-4 lg:grid-cols-4 gap-4 items-center justify-center'>
        {data_product.map((item, i) => (
          <div className=' items-center flex justify-center'  key={i} >
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
