import React from 'react';
import { useNavigate } from 'react-router-dom';
import bookmark from '../assets/mainLeft/bookmark.svg';
import durationImg from '../assets/general/duration.svg';
import stipendImg from '../assets/general/stipend.svg';
import totalapplicantsImg from '../assets/general/totalapplicants.svg';
import endsinImg from '../assets/general/endsin.svg';

const Card = ({
  role,
  companyName,
  skills,
  duration,
  stipend,
  applicantsNo,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/internships/${id}`)}
      className='bg-white rounded-xl p-3 space-y-4 shadow-lg cursor-pointer'
    >
      <div className='flex justify-between items-start'>
        <div>
          <h1 className='font-bold'>{role}</h1>
          <p className='text-sm font-semibold text-inactive'>{companyName}</p>
        </div>
        <div className='p-1.5 border border-inactive w-fit rounded-md     hover:bg-light cursor-pointer'>
          <img src={bookmark} alt='bookmark' className='h-6' />
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <img
          src='https://seeklogo.com/images/L/logo-com-hr-logo-5636A4D2D5-seeklogo.com.png'
          alt='logo'
          className='h-10'
        />
        <ul className='flex border border-inactive  rounded-full w-fit text-sm font-semibold bg-light shadow-md'>
          <li className='py-1 px-3 border-r border-inactive'>{skills[0]}</li>
          <li className='py-1 px-3 border-r border-inactive'>{skills[1]}</li>
          {/* <li className='py-1 px-3 border-r border-inactive'>Blender</li> */}
          <li className='py-1 px-3 text-dark'>+{skills?.length - 2}</li>
        </ul>
      </div>
      <div className='flex text-sm gap-2'>
        <div className='flex flex-col w-1/2 gap-3'>
          <div className='flex gap-2 items-center'>
            <img src={durationImg} alt='duration' className='h-6' />
            <p className='font-semibold'>
              {duration} {duration === 1 ? 'Month' : 'Months'}
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <img
              src={totalapplicantsImg}
              alt='totalapplicants'
              className='h-6'
            />
            <p>
              <span className='font-semibold'>{applicantsNo}</span> Applicants
            </p>
          </div>
        </div>
        <div className='flex flex-col w-1/2 gap-3'>
          <div className='flex gap-2 items-center'>
            <img src={stipendImg} alt='stipend' className='h-6' />
            <p className='font-semibold'>
              ₹{stipend === 0 ? 'Unpaid' : stipend}
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={endsinImg} alt='endsin' className='h-6' />
            <p>
              Ends in <span className='font-semibold'>6 days</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
