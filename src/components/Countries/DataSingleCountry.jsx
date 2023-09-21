import PropTypes from 'prop-types';
import React from 'react';

const DataSingleCountry = ({ data }) => {
  const [currencies, setCurrencies] = React.useState(null);
  const [languages, setLanguages] = React.useState(null);

  React.useEffect(() => {
    let arrCurrencies = [];
    data.currencies.forEach(element => {
      arrCurrencies.push(element.name);
    });
    setCurrencies(arrCurrencies);

    let arrLanguages = [];
    data.languages.forEach(element => {
      arrLanguages.push(element.name);
    });
    setLanguages(arrLanguages);

  }, [data])


  return (
    <div className='flex gap-10'>
      
      <img className='w-full md:w-1/2 pr-5' src={data.flag} alt={data.name} />

      <div className="grid grid-cols-2">
        <h1 className='col-span-2  text-2xl font-extrabold py-5'>{data.name}</h1>
        <div className="flex flex-col justify-center">
          <div className="text-sm"><span className='font-semibold'>Native Name:</span> {data.nativeName}</div>
          <div className="text-sm"><span className='font-semibold'>Population:</span> {data.population}</div>
          <div className="text-sm"><span className='font-semibold'>Region:</span> {data.region}</div>
          <div className="text-sm"><span className='font-semibold'>Subregion:</span> {data.subregion}</div>
          <div className="text-sm"><span className='font-semibold'>Capital:</span> {data.capital}</div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-sm"><span className='font-semibold'>Top Lavel Domain:</span> {data.topLevelDomain}</div>
          <div className="text-sm"><span className='font-semibold'>Currencies:</span> {currencies?.join(', ')}</div>
          <div className="text-sm"><span className='font-semibold'>Languages:</span> {languages?.join(', ')}</div>
        </div>
        <div className="col-span-2">
          <span className='font-semibold'>Border Counties:</span> {data.borders.join(', ')}
        </div>
      </div>
      
    </div>
  )
}

DataSingleCountry.propTypes = {
    data: PropTypes.object,
}

export default DataSingleCountry
