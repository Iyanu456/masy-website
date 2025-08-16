import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NewHome from './pages/NewHome'; ;
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Header from './components/Header';

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ["/login"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <div className='pt-[6em] w-full grid'>
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/old" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about-us" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </>
  );
}

export default App;
