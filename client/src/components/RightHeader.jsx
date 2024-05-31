import React from 'react';
import { useState } from 'react';
import search from '../assets/mainRight/search.svg'
import filter from '../assets/mainRight/filter.svg'
import FilterModal from './FilterModal';

const RightHeader = () => {
    const [showModal,setShowModal] = useState(false);

  return (
    <div className='flex items-center'>
      <div className='flex w-full items-center'>
        <input
          type='text'
          className='outline-none border-none bg-white rounded-l-xl py-[14px] px-3 w-full'
        />
        <button className='bg-dark py-[13px] px-6 rounded-r-xl'>
          <img src={search} alt='search' />
        </button>
      </div>
      <img
        src={filter}
        alt='filter'
        className='py-[14px] px-5 cursor-pointer'
        onClick={() => setShowModal(!showModal)}
      />
      {showModal && <FilterModal modal={setShowModal}/>}
    </div>
  );
};

export default RightHeader;
