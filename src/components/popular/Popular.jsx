import React from 'react';
import './Popular.css';
import data_product from '../../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular py-8 px-4 flex flex-col items-center justify-center  w-full '>
    <h1 className='text-4xl py-7'>Popular for women</h1>
    <hr className='hr mb-8' />
    <div className='w-full max-w-screen-xl px-8 gap-12 flex flex-wrap justify-center '>
      {data_product.map((item, i) => (
        <div key={i} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
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
