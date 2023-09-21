import MainContent from './components/MainContent/MainContent'
import { Routes, Route } from 'react-router-dom'
import SingleCountry from './components/Countries/SingleCountry';
import NotFoundPage from './components/NotFoundPage';
import { Layout } from './components/Layout';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<MainContent />} />
          <Route path="/:countrycode" element={<SingleCountry />} />                
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
