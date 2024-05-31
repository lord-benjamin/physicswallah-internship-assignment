import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Card from './Card';
import RightHeader from './RightHeader';
import Right from './Right';
import DataContext from '../context/DataContext';

const Left = () => {
//   const [internData, setInternData] = useState([]);

  const { data, setData } = useContext(DataContext);
  const filters = JSON.parse(localStorage.getItem('filters'))

//   const [res,setRes] = useState({})
  const getAll = async () => {
    try {
        if(!filters || Object.keys(filters).length===0){
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/`)
            setData(res.data);
        }
        else{
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/filter`,{filters})
            setData(res.data)
        }
        // if(filters){
        //     const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/filter`,{filters})
        //     setData(res.data)
        // }
        // else{
        //     const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/`)
        //     setData(res.data);
        // }
      
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className='flex gap-10 p-8'>
      <div className='w-1/3 space-y-6'>
        <ul className='flex justify-between items-center p-1 rounded-xl bg-white font-semibold gap-1'>
          <li className='py-2.5 px-2 w-1/3 text-center rounded-lg bg-dark text-white cursor-pointer'>
            Popular
          </li>
          <li className='py-2.5 px-2 w-1/3 text-center rounded-lg text-lightText cursor-pointer hover:bg-light duration-200'>
            Newest
          </li>
          <li className='py-2.5 px-2 w-1/3 text-center rounded-lg text-lightText cursor-pointer hover:bg-light duration-200'>
            Bookmarks
          </li>
        </ul>
        <div>
          <h1 className='font-bold text-dark mb-2 text-center'>{data?.length} {data?.length===1 ? "Result" : "Results"} Found</h1>
          <div className=' flex flex-col gap-6 h-[calc(100vh-20px)] overflow-y-scroll'>
            {data?.map((item) => (
              <Card
                key={item.SNo}
                role={item.role}
                companyName={item.companyName}
                skills={item.skills}
                duration={item.duration}
                stipend={item.stipend}
                applicantsNo={item.applicantsNo}
                id={item._id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='w-2/3 h-fit space-y-6 -translate-y-0.5'>
        <RightHeader />
        {/* <div className='h-[calc(100vh-20px)] bg-white rounded-xl flex justify-center items-center text-xl font-medium text-lightText'>Apply Filters</div> */}
        {/* <Right/> */}
      </div>
    </div>
  );
};

export default Left;
