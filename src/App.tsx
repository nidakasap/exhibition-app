import BannerVideo from './components/BannerVideo'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className='h-[100vh] bg-black'>      
      <Navbar/>
      <BannerVideo/>
    </div>
  )
}

export default App

// className="h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600 via-cyan-400 to-blue-600"