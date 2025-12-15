import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import NewHome from './pages/NewHome'; ;
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import TutoringPage from './pages/TutoringPage';
import WritingPage from './pages/WritingPage';
import QuoteForm from './pages/Quote';
import ContactForm from './pages/Contact';
import NewTutoringPage from './pages/NewTutoringPage';
import NewLandingPage from './pages/NewLandingPage';


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
          <Route path="/quote" element={<QuoteForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/tutoring" element={<NewTutoringPage />} />
          <Route path="/oldtutoring" element={<TutoringPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/new" element={<NewLandingPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
