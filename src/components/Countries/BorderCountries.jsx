import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BorderCountries = ({country, link}) => {
    return (
    <li className='shadow-lg rounded-lg hover:bg-dark-gray hover:text-white transition-colors dark:bg-dark-blue dark:hover:bg-very-dark-blue dark:hover:text-very-light-gray'>
        <Link to={`/${link}`}>
          <button className="px-6 py-1 rounded-lg shadow-lg">{country}</button>
        </Link>
    </li>
  )
}

BorderCountries.propTypes = {
    country: PropTypes.string,
    link: PropTypes.string,
}

export default BorderCountries
