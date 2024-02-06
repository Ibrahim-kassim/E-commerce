import React from 'react';
import "./NewCollections.css";
import Item from '../Item/Item';
import new_collections from '../../assets/new_collections';

const NewCollections = () => {
  return (
    <div className='popular py-8 px-4 flex flex-col items-center justify-center'>
      <h1 className='text-4xl py-7'>New Collection</h1>
      <hr className='hr mb-8' />
      <div className='w-full max-w-screen-xl px-8 gap-12 flex flex-wrap justify-center'>
        {new_collections.map((item, i) => (
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

export default NewCollections;
