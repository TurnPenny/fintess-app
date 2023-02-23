import { useState } from 'react';
import Navbar from './scenes/navbar';

function App() {
  const [selectedPage, setselectedPage] = useState<string>('benefits');

  return (
    <div className='bg-gray-20'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setselectedPage} />
    </div>
  );
}

export default App;
