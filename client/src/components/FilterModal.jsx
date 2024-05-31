import React, { useEffect, useRef, useState,useContext } from 'react';
import axios from 'axios'
import cross from '../assets/mainRight/cross.svg';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './FilterModal.css';
import DataContext from '../context/DataContext';

const FilterModal = ({ modal }) => {
  const categories = [
    { label: 'Data Analytics', value: 'DATA ANALYTICS' },
    { label: 'Data Science', value: 'Data Science' },
    { label: 'Human Resources', value: 'HUMAN RESOURCES' },
    { label: 'Legal', value: 'LEGAL' },
    { label: 'Marketing', value: 'MARKETING' },
    { label: 'Sales', value: 'SALES' },
    { label: 'Software Development', value: 'SDE' },
  ];
  const skills = [
    { label: 'Angular JS', value: 'Angular' },
    { label: 'AWS', value: 'AWS' },
    { label: 'Azure', value: 'Azure' },
    { label: 'Compliance', value: 'Compliance' },
    { label: 'Content Writing', value: 'Content Writing' },
    { label: 'Contract Drafting', value: 'Contract Drafting' },
    { label: 'CRM', value: 'CRM' },
    { label: 'CSS', value: 'CSS' },
    { label: 'Data Mining', value: 'Data Mining' },
    { label: 'Deep Learning', value: 'Deep Learning' },
    { label: 'Django', value: 'Django' },
    { label: 'Docker', value: 'Docker' },
    { label: 'Employee Relations', value: 'Employee Relations' },
    { label: 'MS Excel', value: 'Excel' },
    { label: 'Express JS', value: 'Express' },
    { label: 'Flutter', value: 'Flutter' },
    { label: 'Google Analytics', value: 'Google Analytics' },
    { label: 'Hadoop', value: 'Hadoop' },
    { label: 'HTML', value: 'HTML' },
    { label: 'Java', value: 'Java' },
    { label: 'Javascript', value: 'JavaScript' },
    { label: 'Keras', value: 'Keras' },
    { label: 'Lead Generation', value: 'Lead Generation' },
    { label: 'Legal Research', value: 'Legal Research' },
    { label: 'Litigation', value: 'Litigation' },
    { label: 'Machine Learning', value: 'Machine Learning' },
    { label: 'MongoDB', value: 'MongoDB' },
    { label: 'Negotiation', value: 'Negotiation' },
    { label: 'Nest JS', value: 'Nest.js' },
    { label: 'Next JS', value: 'Next.js' },
    { label: 'Node JS', value: 'Node.js' },
    { label: 'NumPy', value: 'Numpy' },
    { label: 'Pandas', value: 'Pandas' },
    { label: 'Payroll', value: 'Payroll' },
    { label: 'PHP', value: 'PHP' },
    { label: 'Power BI', value: 'Power BI' },
    { label: 'Python', value: 'Python' },
    { label: 'R', value: 'MARKETING' },
    { label: 'React JS', value: 'React' },
    { label: 'React Native', value: 'React Native' },
    { label: 'Recruitment', value: 'Recruitment' },
    { label: 'Salesforce', value: 'Salesforce' },
    { label: 'SAS', value: 'SAS' },
    { label: 'Scala', value: 'Scala' },
    { label: 'Scikit-Learn', value: 'Scikit-learn' },
    { label: 'SEO', value: 'SEO' },
    { label: 'Social Media', value: 'Social Media' },
    { label: 'Spark', value: 'Spark' },
    { label: 'SQL', value: 'SQL' },
    { label: 'Statistics', value: 'Statistics' },
    { label: 'Tableau', value: 'Tableau' },
    { label: 'Tailwind CSS', value: 'Tailwind' },
    { label: 'TensorFlow', value: 'TensorFlow' },
    { label: 'Typescript', value: 'Typescript' },
    { label: 'UI/UX', value: 'UI/UX' },
    { label: 'Unity3D', value: 'Unity3D' },
    { label: 'Vue JS', value: 'Vue' },
  ];
  const location = [
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Noida', value: 'Noida' },
    { label: 'Pune', value: 'Pune' },
    { label: 'Remote', value: 'Remote' },
  ];

  const [fromStorage,setFromStorage] = useState({})
//   const [catFromStorage,setCatFromStorage] = useState({})

  // const [arrOfCat,setArrOfCat] = useState([])

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("filters"))
    setFromStorage(res);

    const cate = JSON.parse(localStorage.getItem("category"))
    let arrCat = []
    for(let key in cate){
        arrCat.push(cate[key])
    }
    setCategories(arrCat)

    const skil = JSON.parse(localStorage.getItem("skills"))
    let arrSki = []
    for(let key in skil){
        arrSki.push(skil[key])
    }
    setSkills(arrSki)

    const loca = JSON.parse(localStorage.getItem("location"))
    let arrLoc = []
    for(let key in loca){
        arrLoc.push(loca[key])
    }
    setLocation(arrLoc)

    // console.log(arr)
    // setCatFromStorage(cate)
  },[])

  const animatedComponents = makeAnimated();

  const [filters, setFilters] = useState(fromStorage);

  useEffect(() => {
    setFilters(fromStorage)
  },[fromStorage])

  const [cat, setCategories] = useState([]);
  const [ski, setSkills] = useState([]);
  const [loc, setLocation] = useState([]);
  // const [tim, setTimings] = useState({});
  // const [typ, setType] = useState({});
  // const [dur, setDuration] = useState({min:0});
  // const [sti, setStipend] = useState({min:0});
  // const [app, setApplicants] = useState({min:0});

  const durMinRef = useRef();
  const durMaxRef = useRef();
  const stiMinRef = useRef();
  const stiMaxRef = useRef();
  const appMinRef = useRef();
  const appMaxRef = useRef();

  const timPtRef = useRef();
  const timFtRef = useRef();
  const typWfhRef = useRef();
  const typIoRef = useRef();

  const onDropChange = (selectedItems, action) => {
    if (action.name === 'category') {
      if(cat){
        setCategories(null)
      }
      if(selectedItems){
        setCategories(selectedItems)
      }
      else{
        setCategories(cat)
      }
    //   setArrOfCat([...arrOfCat,...selectedItems])
      if (action.action !== 'clear') {
        // console.log(catRef.current.value)
        let res = selectedItems.map((item) => item.value);
        // filters.category = res;
        setFilters({ ...filters, category: res });
        // console.log(filters)
      } else {
        delete filters.category;
      }
    }
    if (action.name === 'skills') {
      if(ski){
        setSkills(null)
      }
      if(selectedItems){
        setSkills(selectedItems)
      }
      else{
        setSkills(ski)
      }

      if (action.action !== 'clear') {
        let res = selectedItems.map((item) => item.value);
        setFilters({ ...filters, skills: res });
      } else {
        delete filters.skills;
      }
    }
    if (action.name === 'location') {
      if(loc){
        setLocation(null)
      }
      if(selectedItems){
        setLocation(selectedItems)
      }
      else{
        setLocation(loc)
      }

      if (action.action !== 'clear') {
        let res = selectedItems.map((item) => item.value);
        setFilters({ ...filters, location: res });
      } else {
        delete filters.location;
      }
    }
  };

  const onCheckChange = (e) => {
    const name = e.target.name;
    const check = e.target.checked;
    if (name === 'timings-part-time') {
    //   if (check) {
    //     fromStorage.timings.push("Part Time")
    //     tim.push('Part Time');
    //     setTimings(tim);
    //   } else {

    //     const i = fromStorage?.timings?.indexOf('Part Time');
    //     if(fromStorage?.timings?.includes("Part Time")){
    //         fromStorage.timings[i] = null
    //     }

    //     let res = tim;
    //     const idx = res.indexOf('Part Time');
    //     res.splice(idx, 1);
    //     setTimings(res);
    //   }
    if(fromStorage?.timings?.pt != null){
        fromStorage.timings.pt = null
    }
    // setTimings({...tim,pt:check})
    setFilters({ ...filters, timings: {pt: timPtRef.current.checked,ft: timFtRef.current.checked}});
    // console.log(tim)
    //   console.log(filters);
    }
    if (name === 'timings-full-time') {
        // if(fromStorage?.timings != null){
        //     fromStorage.timings = null
        // }

    //   if (check) {
    //     fromStorage.timings.push("Full Time")
    //     tim.push('Full Time');
    //     setTimings(tim);
    //   } else {
    //     const i = fromStorage?.timings?.indexOf('Full Time');
    //     if(fromStorage?.timings?.includes("Full Time") ){
    //         fromStorage.timings[i] = null
    //     }
    //     let res = tim;
    //     const idx = res.indexOf('Full Time');
    //     res.splice(idx, 1);
    //     setTimings(res);
    //   }
    if(fromStorage?.timings?.ft != null){
        fromStorage.timings.ft = null
    }
    // setTimings({...tim,ft:check})
    setFilters({ ...filters, timings: {pt: timPtRef.current.checked,ft: timFtRef.current.checked}});
    // console.log(tim)
    }
    if (name === 'type-work-from-home') {
    //   if (check) {
    //     typ.push('Work from Home');
    //     setType(typ);
    //   } else {
    //     let res = typ;
    //     const idx = res.indexOf('Work from Home');
    //     res.splice(idx, 1);
    //     setType(res);
    //   }
    if(fromStorage?.type?.wfh != null){
        fromStorage.type.wfh = null
    }
    // setType({...typ,wfh:check})
    setFilters({ ...filters, type: {wfh: typWfhRef.current.checked,io: typIoRef.current.checked}});
    }
    if (name === 'type-in-office') {
    //   if (check) {
    //     typ.push('In-Office');
    //     setType(typ);
    //   } else {
    //     let res = typ;
    //     const idx = res.indexOf('In-Office');
    //     res.splice(idx, 1);
    //     setType(res);
    //   }
    if(fromStorage?.type?.io != null){
        fromStorage.type.io = null
    }
    // setType({...typ,io:check})
    setFilters({ ...filters, type: {wfh: typWfhRef.current.checked,io: typIoRef.current.checked}});
    }
  };

  const onRangeChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if(name === "duration-min"){
        if(fromStorage?.duration?.min != null){
            fromStorage.duration.min = null
        }

        // if(value <= 0){
        //     setDuration({...dur,min:0})
        //     // setDuration(prev => ({...prev,min:0}))
        // }
        // else{
        //     // setDuration({...dur,min:Number(durMinRef.current.value)})
        //     setDuration(prev => ({...prev,min: value}))
        // }
        // console.log(dur)
        // setFilters(prev => ({...prev,duration: {min: durMinRef.current.value,max:durMaxRef.current.value}}))
        setFilters({...filters,duration: {min: (Number(durMinRef.current.value)<=0 ? 0 : Number(durMinRef.current.value)),max:(Number(durMaxRef.current.value)<=0 ? 0 : Number(durMaxRef.current.value))}})
    }
    if(name === "duration-max"){
        if(fromStorage?.duration?.max != null){
            fromStorage.duration.max = null
        }

        // if(value <= 0){
        //     setDuration(prev => ({...prev,max:0}))
        // }
        // else{
        //     setDuration(prev => ({...prev,max: value}))
        // }
        // console.log(dur)
        // setFilters({...filters,duration: dur})
        // setFilters(prev => ({...prev,duration: dur}))
        setFilters({...filters,duration: {min: (Number(durMinRef.current.value)<=0 ? 0 : Number(durMinRef.current.value)),max:(Number(durMaxRef.current.value)<=0 ? 0 : Number(durMaxRef.current.value))}})
    }
    if(name === "stipend-min"){
        if(fromStorage?.stipend?.min != null){
            fromStorage.stipend.min = null
        }

        // if(value <= 0){
        //     setStipend({...sti,min:0})
        // }
        // else{
        //     setStipend({...sti,min:Number(value)})
        // }
        // setFilters({...filters,stipend: sti})
        setFilters({...filters,stipend: {min: (Number(stiMinRef.current.value)<=0 ? 0 : Number(stiMinRef.current.value)),max:(Number(stiMaxRef.current.value)<=0 ? 0 : Number(stiMaxRef.current.value))}})
    }
    if(name === "stipend-max"){
        if(fromStorage?.stipend?.max != null){
            fromStorage.stipend.max = null
        }
        
        // if(value <= 0){
        //     setStipend({...sti,max:0})
        // }
        // else{
        //     setStipend({...sti,max:Number(value)})
        // }
        // setFilters({...filters,stipend: sti})
        setFilters({...filters,stipend: {min: (Number(stiMinRef.current.value)<=0 ? 0 : Number(stiMinRef.current.value)),max:(Number(stiMaxRef.current.value)<=0 ? 0 : Number(stiMaxRef.current.value))}})
    }
    if(name === "applicants-min"){
        if(fromStorage?.applicantsNo?.min != null){
            fromStorage.applicantsNo.min = null
        }
        
        // if(value <= 0){
        //     setApplicants({...app,min:0})
        // }
        // else{
        //     setApplicants({...app,min:Number(value)})
        // }
        setFilters({...filters,applicantsNo: {min: (Number(appMinRef.current.value)<=0 ? 0 : Number(appMinRef.current.value)),max:(Number(appMaxRef.current.value)<=0 ? 0 : Number(appMaxRef.current.value))}})
    }
    if(name === "applicants-max"){
        if(fromStorage?.applicantsNo?.max != null){
            fromStorage.applicantsNo.max = null
        }

        // if(value <= 0){
        //     setApplicants({...app,max:0})
        // }
        // else{
        //     setApplicants({...app,max:Number(value)})
        // }
        setFilters({...filters,applicantsNo: {min: (Number(appMinRef.current.value)<=0 ? 0 : Number(appMinRef.current.value)),max:(Number(appMaxRef.current.value)<=0 ? 0 : Number(appMaxRef.current.value))}})
    }
  };


  const {setData} = useContext(DataContext)

  const clearClick = async() => {
    localStorage.removeItem('filters');
    localStorage.removeItem('category');
    localStorage.removeItem('skills');
    localStorage.removeItem('location');
    setFromStorage({})
    setFilters({})
    setCategories([])
    setSkills([])
    setLocation([])
    
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/`)
    setData(res.data)
    // setTimings({})
    // setType({})
    // setDuration({min:0})
    // setStipend({min:0})
    // setApplicants({min:0})
    modal(false)
  };

  const applyClick = async() => {
    // console.log(filters);
    // console.log(dur)
    localStorage.setItem('filters',JSON.stringify(filters));

    let cate = {}
    cat.forEach((item,idx) => (
        cate[idx] = item
    ))
    localStorage.setItem('category',JSON.stringify(cate))

    let skil = {}
    ski.forEach((item,idx) => (
        skil[idx] = item
    ))
    localStorage.setItem('skills',JSON.stringify(skil))

    let loca = {}
    loc.forEach((item,idx) => (
        loca[idx] = item
    ))
    localStorage.setItem('location',JSON.stringify(loca))

    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/filter`,{filters})
    setData(res.data)
    // console.log(res.data)

    modal(false);
  };

  return (
      <div className='absolute -right-8 top-20 bg-white rounded-tl-3xl shadow-2xl'>

      {/* {console.log("hii",typeof catRef?.current?.value)} */}
      <div className='pt-6 relative min-w-[600px]'>
        <img
          onClick={() => modal(false)}
          src={cross}
          alt=''
          className='absolute top-6 right-6 cursor-pointer'
        />
        <h2 className='text-xl font-bold text-dark text-center mb-8 mx-6'>
          Filters
        </h2>
        <div className='flex items-start gap-6 mb-8 mx-6'>
          <div className='w-1/2'>
            <div className='mb-5'>
              <h3 className='font-bold mb-2'>Category</h3>
              <div>
                <Select
                  isMulti
                  name='category'
                  value={cat}
                  closeMenuOnSelect={false}
                  options={categories}
                //   defaultValue={["SDE","LEGAL"]}
                //   getOptionLabel={(option) => option.name}
                //   getOptionValue={(option) => option.value}
                  onChange={onDropChange}
                  placeholder=''
                  components={animatedComponents}
                  className='react-select-container'
                  classNamePrefix='react-select'
                />
              </div>
            </div>
            <div className='mb-5'>
              <h3 className='font-bold mb-2'>Timings</h3>
              <div className='space-y-2'>
                <label className='container w-fit'>
                  <input
                    name='timings-part-time'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={fromStorage?.timings?.pt}
                    ref={timPtRef}
                  />
                  <span className='checkmark'></span>
                  <div className='text'>Part time</div>
                </label>
                <label className='container w-fit'>
                  <input
                    name='timings-full-time'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={fromStorage?.timings?.ft}
                    ref={timFtRef}
                  />
                  <span className='checkmark'></span>
                  <div className='text'>Full time</div>
                </label>
              </div>
            </div>
            <div className='mb-5'>
              <h3 className='font-bold mb-2'>Duration (Months)</h3>
              <div className='flex items-center gap-4'>
                <div className='flex flex-col justify-center gap-2'>
                  <input
                    name='duration-min'
                    defaultValue={0}
                    type='number'
                    min='0'
                    placeholder=''
                    value={fromStorage?.duration?.min}
                    className='text-center overflow-hidden p-2 w-16 rounded-xl shadow-lg border outline-none'
                    onChange={onRangeChange}
                    ref={durMinRef}
                  />
                  <p className='text-dark font-semibold text-sm text-center'>
                    Min
                  </p>
                </div>
                <div className='mb-6'>-</div>
                <div className='flex flex-col justify-center gap-2'>
                  <input
                    name='duration-max'
                    type='number'
                    min='0'
                    placeholder=''
                    // value={dur?.max}
                    value={fromStorage?.duration?.max}
                    className='text-center overflow-hidden p-2 w-16 rounded-xl shadow-lg border outline-none'
                    onChange={onRangeChange}
                    ref={durMaxRef}
                  />
                  <p className='text-dark font-semibold text-sm text-center'>
                    Max
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className='font-bold mb-2'>Stipend</h3>
              <div className='flex items-center gap-4'>
                <div className='flex flex-col justify-center gap-2'>
                  <input
                    name='stipend-min'
                    defaultValue={0}
                    type='number'
                    min='0'
                    placeholder=''
                    // value={sti.min}
                    value={fromStorage?.stipend?.min}
                    className='text-center overflow-hidden p-2 w-24 rounded-xl shadow-lg border outline-none'
                    onChange={onRangeChange}
                    ref={stiMinRef}
                  />
                  <p className='text-dark font-semibold text-sm text-center'>
                    Min
                  </p>
                </div>
                <div className='mb-6'>-</div>
                <div className='flex flex-col justify-center gap-2'>
                  <input
                    name='stipend-max'
                    type='number'
                    min='0'
                    placeholder=''
                    // value={sti.max}
                    value={fromStorage?.stipend?.max}
                    className='text-center overflow-hidden p-2 w-24 rounded-xl shadow-lg border outline-none'
                    onChange={onRangeChange}
                    ref={stiMaxRef}
                  />
                  <p className='text-dark font-semibold text-sm text-center'>
                    Max
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='mb-5'>
              <h3 className='font-bold mb-2'>Skills</h3>
              <div>
                <Select
                  isMulti
                  name='skills'
                  value={ski}
                  closeMenuOnSelect={false}
                  options={skills}
                  // getOptionLabel={(option) => option.name}
                  // getOptionValue={(option) => option.value}
                  onChange={onDropChange}
                  placeholder=''
                  components={animatedComponents}
                  className='react-select-container'
                  classNamePrefix='react-select'
                />
              </div>
            </div>
            <div className='mb-5'>
              <h3 className='font-bold mb-2'>Type</h3>
              <div className='space-y-2'>
                <label className='container w-fit'>
                  <input
                    name='type-work-from-home'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={fromStorage?.type?.wfh}
                    ref={typWfhRef}
                  />
                  <span className='checkmark'></span>
                  <div className='text'>Work from Home</div>
                </label>
                <label className='container w-fit'>
                  <input
                    name='type-in-office'
                    type='checkbox'
                    onChange={onCheckChange}
                    checked={fromStorage?.type?.io}
                    ref={typIoRef}
                  />
                  <span className='checkmark'></span>
                  <div className='text'>In Office</div>
                </label>
              </div>
            </div>
            <div className='mb-5'>
              <h3 className='font-bold mb-2'>Location</h3>
              <div>
                <Select
                  isMulti
                  name='location'
                  value={loc}
                  closeMenuOnSelect={false}
                  options={location}
                  // getOptionLabel={(option) => option.name}
                  // getOptionValue={(option) => option.value}
                  onChange={onDropChange}
                  placeholder=''
                  components={animatedComponents}
                  className='react-select-container'
                  classNamePrefix='react-select'
                />
              </div>
            </div>
            <div>
              <h3 className='font-bold mb-2'>Applicants</h3>
              <div className='flex items-center gap-4'>
                <div className='flex flex-col justify-center gap-2'>
                  <input
                    name='applicants-min'
                    defaultValue={0}
                    type='number'
                    min='0'
                    placeholder=''
                    value={fromStorage?.applicantsNo?.min}
                    className='text-center overflow-hidden p-2 w-20 rounded-xl shadow-lg border outline-none'
                    onChange={onRangeChange}
                    ref={appMinRef}
                  />
                  <p className='text-dark font-semibold text-sm text-center'>
                    Min
                  </p>
                </div>
                <div className='mb-6'>-</div>
                <div className='flex flex-col justify-center gap-2'>
                  <input
                    name='applicants-max'
                    type='number'
                    min='0'
                    placeholder=''
                    value={fromStorage?.applicantsNo?.max}
                    className='text-center overflow-hidden p-2 w-20 rounded-xl shadow-lg border outline-none'
                    onChange={onRangeChange}
                    ref={appMaxRef}
                  />
                  <p className='text-dark font-semibold text-sm text-center'>
                    Max
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row-reverse justify-between items-center py-3 px-6 rounded-b-2xl shadow-lg border-b rotate-180'>
          <button
            className='rotate-180 bg-transparent font-bold py-1.5 px-9 text-dark rounded-xl border border-transparent hover:bg-light hover:border-light duration-200'
            onClick={clearClick}
          >
            Clear All
          </button>
          <button
            className='rotate-180 bg-dark font-bold py-1.5 px-9 text-white rounded-xl border border-dark hover:bg-transparent hover:text-dark duration-200'
            onClick={applyClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
