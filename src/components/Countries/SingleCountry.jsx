import React from 'react';
import { Link, useParams } from 'react-router-dom';
import dataCountries from '../../inc/data.json';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import BorderCountries from './BorderCountries';

const SingleCountry = () => {
  const { countrycode } = useParams();
  const [countryData, setCountryData] = React.useState(null);
  const [borderCounties, setBorderCountries] = React.useState(null);
  const [borderAlpha3Code, setBorderAlpha3Code] = React.useState(null);
  
  

  React.useEffect(() => {
    let temp = [];
    dataCountries.forEach(item => {
      if (item.alpha3Code === countrycode) {
        temp.push(item);
        
      } 
    })
    setCountryData(temp[0]);

    let borderCountryName = [];
    let borderCountryAlpha3Code = [];
    if (temp[0]?.borders) {
      temp[0]?.borders?.forEach(alpha3Code => {
        dataCountries.forEach(country => {
          if (alpha3Code === country.alpha3Code) {
            borderCountryName.push(country.name);
            borderCountryAlpha3Code.push(country.alpha3Code);
          }
        })
      })
    }
    setBorderCountries(borderCountryName);
    setBorderAlpha3Code(borderCountryAlpha3Code);
  }, [countrycode]);
  

  const currencyArr = [];
  countryData?.currencies?.map((currency) => {
    return currencyArr.push(currency?.name);
  });

  const languagesArr = [];
  countryData?.languages?.map((language) => {
    return languagesArr.push(language?.name);
  });
  
  

  return (
    <div className='container bg-very-light-gray dark:bg-very-dark-blue h-full pb-20'>
      <Link className='inline-flex gap-3 items-center hover:bg-dark-gray hover:text-white dark:hover:bg-very-dark-blue dark:hover:text-very-light-gray rounded-md shadow-lg dark:bg-dark-blue px-6 py-2 my-10 md:my-20' to='/'><AiOutlineArrowLeft /> <span>Go back</span></Link>
      
      <div className="md:grid grid-cols-2 md:gap-20 gap-32">
        <img className='w-full h-64 sm:h-96 md:h-56 lg:h-72 xl:h-96' src={countryData?.flag} alt={countryData?.name} />
        <div className="grid md:grid-cols-2">
          <div className="md:col-span-2 py-8">
            <h1 className='text-2xl font-extrabold'>{countryData?.name}</h1>
          </div>          
          <div className="flex flex-col md:justify-start pb-8">
            <div className="text-sm pb-3"><span className='font-semibold'>Native Name:</span> {countryData?.nativeName}</div>
            <div className="text-sm pb-3"><span className='font-semibold'>Population:</span> {new Intl.NumberFormat('en-EN').format(countryData?.population)}</div>
            <div className="text-sm pb-3"><span className='font-semibold'>Region:</span> {countryData?.region}</div>
            <div className="text-sm pb-3"><span className='font-semibold'>Subregion:</span> {countryData?.subregion}</div>
            <div className="text-sm pb-3"><span className='font-semibold'>Capital:</span> {countryData?.capital}</div>
          </div>
          <div className="flex flex-col md:justify-start pb-8">
            <div className="text-sm pb-3"><span className='font-semibold'>Top Lavel Domain:</span> {countryData?.topLevelDomain}</div>
            <div className="text-sm pb-3"><span className='font-semibold'>Currencies:</span> {currencyArr.join(', ')}</div>
            <div className="text-sm pb-3"><span className='font-semibold'>Languages:</span> {languagesArr.join(', ')}</div>
          </div>
          <div className="md:col-span-2 flex flex-wrap text-sm">
            
            <ul className='inline-flex gap-3 flex-wrap items-center'>
              <span className='font-semibold float-left'>Border Countries:</span>
              {borderCounties ? borderCounties?.map((item, index) => {
              return <BorderCountries key={item} country={item} link={borderAlpha3Code[index]} />
            }) : "-"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCountry
