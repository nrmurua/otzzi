import { Navbar, Footer } from '../components';
import { About, Explore, Feedback, Access, Hero, Insights, WhatsNew, World } from '../sections';


const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <Access />
        <div className="gradient-02 z-0" />
      </div>
      <div className="relative">
        <div className="gradient-04 z-0" />
      </div>
    </>
  );
}

export default HomePage;