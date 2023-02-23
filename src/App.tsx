import { useState } from 'react';
import Navbar from './scenes/navbar';
import { pageEnum } from './shared/types';

function App() {
  const [selectedPage, setselectedPage] = useState<pageEnum>(pageEnum.Home);

  return (
    <div className='bg-gray-20'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setselectedPage} />
    </div>
  );
}

export default App;
