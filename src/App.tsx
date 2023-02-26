import { useEffect, useState } from 'react';
import Benefits from './scenes/Benefits';
import Home from './scenes/Home';
import Navbar from './scenes/Navbar';
import { pageEnum } from './shared/types';

function App() {
  const [selectedPage, setselectedPage] = useState<pageEnum>(pageEnum.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setselectedPage(pageEnum.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className='bg-gray-20'>
      <Navbar
        isTopOfpage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setselectedPage}
      />
      <Home setSelectedPage={setselectedPage} />
      <Benefits setSelectedPage={setselectedPage} />
    </div>
  );
}

export default App;
