import './App.css'
import About from './Components/About'
import Blog from './Components/Blog'
import NewFooter from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import News from './Components/News'
import Product from './Components/Product'
import Service from './Components/Service'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Product />
      <Blog />
      <News />
      <NewFooter />
    </>
  )
}

export default App
