import PropTypes from 'prop-types';


const ItemCountry = ({ dataCountry }) => {
  return (
    <div className='w-full '>
          <img className='w-full sm:h-44 md:h-36 lg:h-44' src={dataCountry.flags.svg} alt={dataCountry.name} />  
          <div className="p-5">
              <h2 className="font-semibold text-base mb-4">{dataCountry.name}</h2>
              <div className="text-sm">Population: {dataCountry.population}</div>
              <div className="text-sm">Region: {dataCountry.region}</div>
              <div className="text-sm">Capital: {dataCountry.capital}</div>
          </div>
    </div>
  )
}

ItemCountry.propTypes = {
    dataCountry: PropTypes.any,
};

export default ItemCountry
