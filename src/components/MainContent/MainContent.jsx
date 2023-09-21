import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import dataContries from '../../inc/data.json';
import Countries from '../Countries/Countries';

const MainContent = () => {
  const [regions, setRegions] = React.useState(null);
  const [inputValueRegion, setInputValueRegion] = React.useState("");
  const [inputValueCountries, setInputValueCountries] = React.useState("");
  const [selected, setSelected] = React.useState("");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    let allRegions = [];
    dataContries.forEach(item => {
        allRegions.push(item.region);
    })
    setRegions([...new Set(allRegions)]);
  }, [])

  const handleRegions = () => {
    let allRegions = [];
    dataContries.forEach(item => {
        allRegions.push(item.region);
    })
    setRegions([...new Set(allRegions)]);
    setOpen(false);
    setInputValueRegion("");
    setSelected("");
  }

  

  return (
    <div className="container bg-very-light-gray dark:bg-very-dark-blue pt-10 pb-5">
      <div className="lg:flex lg:justify-between lg:items-start mb-10">
          <div className="flex items-center mb-10 lg:mb-0 relative shadow-md ">
            <div className="text-dark-gray dark:text-white h-full flex items-center absolute pl-5">
              <AiOutlineSearch size={24} className='text-dark-gray dark:text-white' />
            </div>              
            <input onChange={(e) => { setInputValueCountries(e.target.value.toLocaleLowerCase()) }} value={inputValueCountries} className="bg-white dark:bg-dark-blue dark:text-white placeholder:dark:text-white w-full py-4 pl-16 rounded-md focus:outline-none focus:border-dark-gray font-sans text-sm" placeholder="Search for a country..." type="text" name="search" />        
          </div>
        <div className="w-72 relative">
          <div className={`bg-white text-sm shadow-md dark:bg-dark-blue dark:text-white placeholder:dark:text-white rounded-md w-full p-4 flex justify-between items-center text-dark-gray ${selected && "text-black"}`}
            onClick={() => setOpen(!open)}
          >
            { selected ? selected : 'Filter by Region ...'}
            <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
          </div> 
          <ul className={`bg-white shadow-md absolute top-12 dark:bg-dark-blue dark:text-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"}`}>
            <div className="bg-white dark:bg-dark-blue dark:text-white px-4 flex items-center sticky top-0">
              <AiOutlineSearch size={20} className='text-dark-gray dark:text-white' />
              <input
                className="w-full py-2 px-4 dark:bg-dark-blue dark:text-white placeholder:dark:text-white focus:outline-none"
                value={inputValueRegion}
                onChange={(e) => { setInputValueRegion(e.target.value.toLowerCase()) }}
                type="text" placeholder='Enter region name' />
            </div>
            <li className='p-2 text-md font-semibold hover:bg-very-dark-blue hover:text-white dark:hover:bg-white dark:hover:text-very-dark-blue'
              onClick={handleRegions}>Reset</li>
            {regions?.map((region, index) => {
              return <li
                key={index}
                className={`p-2 text-sm hover:bg-very-dark-blue hover:text-white dark:hover:bg-white dark:hover:text-very-dark-blue
                ${region === selected && "bg-very-dark-blue text-white dark:bg-white dark:text-very-dark-blue"}
                ${region?.toLowerCase().startsWith(inputValueRegion) ? 'block' : 'hidden'}`}
                onClick={() => {
                  if (region !== selected) {
                    setSelected(region)
                    setOpen(false)
                    setInputValueRegion("")
                  }
                }}
              >{region}</li>;
            })}
          </ul>
        </div>
      </div>   
      
      <Countries search={inputValueCountries} filter={selected} />
    </div>
  )
}

export default MainContent
