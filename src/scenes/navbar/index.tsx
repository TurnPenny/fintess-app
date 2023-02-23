import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import React from 'react';
import Link from './Link';

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const links = ['Home', 'Benefits', 'Our classes', 'Contact Us'];

  const buildMenu = (links: string[]) => {
    return links.map((item: string) => (
      <Link
        page={item}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    ));
  };

  const flexBetween = 'flex items-center justify-between';
  return (
    <React.Fragment>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt='logo' />

            {/* Right part */}
            <div className={`${flexBetween} w-full`}>
              <nav className={`${flexBetween} gap-8 text-sm`}>
                {buildMenu(links)}
              </nav>

              <div className={`${flexBetween} gap-8`}>
                <p>Sign up</p>
                <button>Become a member</button>
              </div>
            </div>
            {/* Right part */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
