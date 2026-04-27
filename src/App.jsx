import Home from './Pages/FirstPage/Home'
import NavBar from './utils/NavBar'
import { Routes, Route } from 'react-router-dom'
import SearchPage from './Pages/SearchPage'
import Upload from './Pages/Upload'
import About from './Pages/About'

const App = () => {
  return (
    <div >
      <NavBar />
      <div className='pt-10 md:pt-20 '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App