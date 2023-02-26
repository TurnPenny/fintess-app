import { pageEnum } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';

// IMAGES
import HomePageText from './../../assets/HomePageText.png';
import HomePageGraphic from './../../assets/HomePageGraphic.png';
import SponsorReBull from './../../assets/SponsorRedBull.png';
import SponsorForbes from './../../assets/SponsorForbes.png';
import SponsorFortune from './../../assets/SponsorFortune.png';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  setSelectedPage: (value: pageEnum) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      {/* Image and header */}
      <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/* main header */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* headings */}
          <div className='md:-mt-20'>
            <div className='relative'>
              <div className='before:absolute before:-top-20  before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                <img src={HomePageText} alt='home-page-text' />
              </div>
            </div>
            <p className='mt-8 text-sm md:text-start w-5/6'>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* actions */}
          <div className='mt-8 flex items-center gap-8'>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink
              href={`#${pageEnum.ContactUs}`}
              onClick={() => setSelectedPage(pageEnum.ContactUs)}
              className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* image */}
        <div
          className='flex basis-3/5 justify-center
                        md:ml-40 md:mt-16 md:justify-items-end'
        >
          <img src={HomePageGraphic} alt='home page graphic' />
        </div>
      </div>

      {/* Sponsors only for desktop*/}
      {isAboveMediumScreens && (
        <div className='bg-primary-100 py-10'>
          <div>
            <div className='flex justify-evenly items-center'>
              <div>
                <img src={SponsorReBull} alt='redbull sponsor' />
              </div>
              <div>
                <img src={SponsorFortune} alt='redbull sponsor' />
              </div>
              <div>
                <img src={SponsorForbes} alt='redbull sponsor' />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
