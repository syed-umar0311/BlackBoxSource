import { Routes, Route } from 'react-router-dom'
import MouseCircle from './components/MouseCircle'
import Loader from './components/Loader'
import Index from './pages/Index'
import Service from './pages/Service'
import Work from './pages/Work'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <MouseCircle />
      <Loader show={false} />
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/service" element={<Service />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
