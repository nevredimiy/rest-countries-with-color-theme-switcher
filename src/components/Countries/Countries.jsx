
import React from 'react';
import dataContries from '../../inc/data.json';
import PropTypes from 'prop-types';
import ItemCountry from './ItemCountry';
import { Link } from 'react-router-dom';

const Countries = ({ search, filter }) => {
    const [dataCountriesFilter, setDataCountriesFilter] = React.useState(dataContries);

    React.useEffect(() => {
        let temp = [];
        if (filter) {
            dataContries.forEach(item => {
                if (item.region === filter) {
                    temp.push(item);
                    
                }   
                setDataCountriesFilter(temp);
            })
        
        } else {
            setDataCountriesFilter(dataContries)
        }
        
        
    }, [filter])

    
    
    return (
        <>
            <ul className='w-full sm:inline-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 '>
                {dataCountriesFilter?.map(dataCountry => {
                return <li key={dataCountry.alpha3Code} className={`bg-white shadow-md overflow-hidden rounded-md dark:bg-dark-blue ${dataCountry.name?.toLowerCase().startsWith(search) ? 'block' : 'hidden'}`} >
                    <Link to={`/${dataCountry.alpha3Code}`}>
                        <ItemCountry dataCountry={dataCountry} />
                    </Link>
                </li> 
                })}
            </ul>

        </>
  )
}

Countries.propTypes = {
    search: PropTypes.string,
    filter: PropTypes.string,
};

export default Countries
