import React from 'react';
import './Popular.css';
import data_product from '../../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular py-8 px-4 flex items-center justify-center flex-col '>
      <h1 className='text-4xl py-7'>Popular In Women</h1>
      <hr className='hr mb-8' />
      <div className='popular-item flex flex-wrap justify-center gap-12'>
        {data_product.map((item, i) => {
          return ( 
            <div
              key={i}
              className='w-full md:w-1/2 lg:w-1/4'
            >
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
