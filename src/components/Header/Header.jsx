import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Header = () => {
  const [themeMode, setThemeMode] = React.useState("light")

  const handleThemeMode = () => {
    document.documentElement.classList.toggle('dark');
    if (themeMode === "dark") {
      setThemeMode("light");

    } else {
      setThemeMode("dark");
    }    
  }

  return (
    <header>
      <div className="container">
        <div className="flex justify-between flex-wrap py-5">
          <Link to="/">
            <h1 className="font-extrabold lg:text-2xl">Where in the world</h1>
            </Link>
            <div className="flex items-center gap-3">
            <button onClick={handleThemeMode}>
              { themeMode === "light" ? <BsMoon size={18} /> : <BsSun size={18} />}
              </button>      
              
            <div className="text-sm">{themeMode === 'light' ? "Light Mode" : "Dark Mode"}</div>
            </div>  
          </div>
      </div>{/* container */}
    </header>
  )
}

export default Header
