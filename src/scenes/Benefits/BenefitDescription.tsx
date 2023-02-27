import ActionButton from '@/shared/ActionButton';
import Htext from '@/shared/Htext';
import { pageEnum } from '@/shared/types';
import { motion } from 'framer-motion';
import BenefitsPageGraphics from './../../assets/BenefitsPageGraphic.png';

type Props = {
  setSelectedPage: (value: pageEnum) => void;
};
const BenefitDescription = ({ setSelectedPage }: Props) => {
  return (
    <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
      <img
        className='mx-auto'
        src={BenefitsPageGraphics}
        alt='Benefits page photo'
      />
      <div>
        {/* title */}
        <div className='relative'>
          <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Htext tag='h2'>
                Millions of happy members getting{' '}
                <span className='text-primary-500'>fit</span>
              </Htext>
            </motion.div>
          </div>
        </div>
        {/* Description */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='my-5'>
            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
            vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
            sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
            pretium sapien proin integer nisl. Felis orci diam odio.
          </p>
          <p className='mb-5'>
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>
        {/* button */}
        <div className='relative mt-16'>
          <div className='before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles'></div>
          <ActionButton setSelectedPage={setSelectedPage}>
            Join now
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default BenefitDescription;
