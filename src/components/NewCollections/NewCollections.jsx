import React from 'react';
import "./NewCollections.css";
import Item from '../Item/Item';
import new_collections from '../../assets/new_collections';

const NewCollections = () => {
  return (
    <div className=' py-8 px-4 flex flex-col items-center justify-center w-full'>
      <h1 className='text-4xl md::py-7 pt-28 '>New Collection</h1>
      <hr className='hr mb-8 mt-2' />
      <div className='grid grid-cols-1  sm:grid-cols-2 w-full   p-4 lg:grid-cols-4 gap-4 items-center justify-center'>
        {new_collections.map((item, i) => (
          <div className=' items-center flex justify-center' key={i}>
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
