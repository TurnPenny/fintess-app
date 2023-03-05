import { useEffect, useState } from 'react';
import Benefits from './scenes/Benefits';
import ContactUs from './scenes/ContactUs';
import Home from './scenes/Home';
import Navbar from './scenes/Navbar';
import OurClasses from './scenes/OurClasses';
import { pageEnum } from './shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<pageEnum>(pageEnum.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(pageEnum.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-gray-20'>
      <Navbar
        isTopOfpage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
