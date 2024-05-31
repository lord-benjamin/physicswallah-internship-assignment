import React,{useEffect,useState} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import durationImg from '../assets/general/duration.svg';
import endsinImg from '../assets/general/endsin.svg';
import experienceImg from '../assets/general/experience.svg';
import locationImg from '../assets/general/location.svg';
import openpositionsImg from '../assets/general/openpositions.svg';
import postedImg from '../assets/general/posted.svg';
import stipendImg from '../assets/general/stipend.svg';
import totalapplicantsImg from '../assets/general/totalapplicants.svg';

const Right = () => {
  const {id} = useParams();

  const [internData,setInternData] = useState({})

    const getInternship = async() => {
        try{
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/internships/${id}`)
            setInternData(res.data)
            console.log('called')
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
      getInternship()
    },[id])


  return (
    <div className='absolute top-48 right-0 w-2/3 pb-8 pl-[38px] pr-8 -translate-y-0.5'>
      <div className='bg-white rounded-xl p-8 relative overflow-hidden'>
        <div className='absolute top-0 right-0 rounded-bl-full bg-light text-dark py-4 pl-14 pr-10 font-bold text-xl uppercase'>
          {internData.category}
        </div>
        <div className='flex gap-6 items-center mb-8'>
          <img
            src='https://seeklogo.com/images/L/logo-com-hr-logo-5636A4D2D5-seeklogo.com.png'
            alt='logo'
            className='h-[56px]'
          />
          <div>
            <h1 className='text-xl font-bold'>{internData.role}</h1>
            <h2 className='font-semibold text-inactive'>
              {internData.companyName}
            </h2>
          </div>
        </div>
        <div className='flex mb-10'>
          <div className='flex flex-col w-fit'>
            <div className='py-3 border-b'>
              <div className='flex gap-2 px-5 border-r'>
                <img src={durationImg} alt='duration' />
                <div className='leading-5'>
                  <p className='font-medium'>{internData.duration} {internData.duration===1 ? "month" : "months"}</p>
                  <p className='font-light'>Duration</p>
                </div>
              </div>
            </div>
            <div className='py-3'>
              <div className='flex gap-2 px-5 border-r'>
                <img src={postedImg} alt='posted' />
                <div className='leading-5'>
                  <p className='font-medium'>9 Days Ago</p>
                  <p className='font-light'>Posted</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-fit'>
            <div className='py-3 border-b'>
              <div className='flex gap-2 px-5 border-r'>
                <img src={experienceImg} alt='experience' />
                <div className='leading-5'>
                  <p className='font-medium'>{internData.experience}</p>
                  <p className='font-light'>Experience</p>
                </div>
              </div>
            </div>
            <div className='py-3'>
              <div className='flex gap-2 px-5 border-r'>
                <img src={endsinImg} alt='endsin' />
                <div className='leading-5'>
                  <p className='font-medium'>6 Days</p>
                  <p className='font-light'>Ends In</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-fit'>
            <div className='py-3 border-b'>
              <div className='flex gap-2 px-5 border-r'>
                <img src={stipendImg} alt='stipend' />
                <div className='leading-5'>
                  <p className='font-medium'>₹{internData.stipend}</p>
                  <p className='font-light'>Stipend</p>
                </div>
              </div>
            </div>
            <div className='py-3'>
              <div className='flex gap-2 px-5 border-r'>
                <img src={openpositionsImg} alt='openpositions' />
                <div className='leading-5'>
                  <p className='font-medium'>{internData.positions}</p>
                  <p className='font-light'>Open Positions</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-fit'>
            <div className='py-3 border-b'>
              <div className='flex gap-2 px-5'>
                <img src={locationImg} alt='location' />
                <div className='leading-5'>
                  <p className='font-medium'>{internData.location}</p>
                  <p className='font-light'>Location</p>
                </div>
              </div>
            </div>
            <div className='py-3'>
              <div className='flex gap-2 px-5'>
                <img src={totalapplicantsImg} alt='totalapplicants' />
                <div className='leading-5'>
                  <p className='font-medium'>{internData.applicantsNo}</p>
                  <p className='font-light'>Total Applicants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap gap-4 mb-8'>
          {internData.skills?.map((skill,idx) => (
            <div key={idx} className='py-2 px-4 bg-back rounded-full font-medium w-fit'>
              {skill}
            </div>
          ))}
        </div>
        <div className='space-y-8 mb-8'>
            <div>
                <p className='font-bold'>About Us</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio impedit fugit eligendi natus, consequatur velit amet molestias, sed iure magni iste perspiciatis quo optio illo exercitationem placeat consectetur? Odit doloribus delectus a ipsam, officia consequatur illo molestias dicta explicabo quibusdam optio assumenda sunt facilis aspernatur perspiciatis? Sapiente voluptas ut at.</p>
            </div>
            <div>
                <p className='font-bold'>Requirements</p>
                <ul>
                    <li>&nbsp;• Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel?</li>
                    <li>&nbsp;• Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                    <li>&nbsp;• Lorem, ipsum dolor sit amet consectetur adipisicing elit. A minus dolore, maiores error harum incidunt.</li>                    
                    <li>&nbsp;• Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio ut beatae.</li>                    

                </ul> 
            </div>
            <div>
                <p className='font-bold'>Responsibilities</p>
                <ul>
                    <li>&nbsp;• Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio ut beatae.</li>                    
                    <li>&nbsp;• Lorem, ipsum dolor sit amet consectetur adipisicing elit. A minus dolore, maiores error harum incidunt.</li>                    
                    <li>&nbsp;• Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                    <li>&nbsp;• Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel?</li>

                </ul> 
            </div>
            <button className='font-bold text-dark py-2 px-4 hover:bg-light rounded-lg duration-200'>Visit Website</button>
        </div>
        <div className='flex justify-center items-center'>
            <button className='bg-dark rounded-full text-xl font-bold py-3 px-12 border border-dark hover:bg-transparent hover:text-dark duration-200 text-white'>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Right;
