import AnchorLink from 'react-anchor-link-smooth-scroll';
import { pageEnum } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: pageEnum) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 hover:bg-primary-500 hover:text-white'
      onClick={() => setSelectedPage(pageEnum.ContactUs)}
      href={`#${pageEnum.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
