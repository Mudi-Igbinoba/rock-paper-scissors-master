import clsx from 'clsx';
import { useState } from 'react';
import rules from '../assets/images/image-rules.svg';
import bonusRules from '../assets/images/image-rules-bonus.svg';

import close from '../assets/images/icon-close.svg';

const Rules = ({ difficulty }: { difficulty: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='md:ml-auto'>
      <button
        onClick={handleOpen}
        className='py-2 px-9 rounded-xl cursor-pointer bg-transparent border-2 border-header-outline text-white uppercase tracking-[0.2em] hover:bg-white hover:text-header-outline focus:bg-white focus:text-header-outline ease-in-out transition-colors duration-500'
      >
        Rules
      </button>

      <div
        className={clsx(
          'fixed animate-fade-in inset-0 bg-black/30 duration-500 ease-in-out transition-all justify-center items-center',
          {
            'flex opacity-100': isModalOpen,
            'hidden opacity-0': !isModalOpen
          }
        )}
      >
        <div className='bg-white md:h-fit h-full md:rounded-xl rounded-none text-black md:max-w-[400px] w-full  py-10 md:px-10 px-5 flex flex-col justify-between items-center md:gap-y-10'>
          <div className='flex justify-between w-full'>
            <p className='text-dark-text uppercase font-bold text-3xl'>Rules</p>

            <button
              className='cursor-pointer sm:block hidden'
              onClick={handleClose}
            >
              <img src={close} alt='close icon' />
            </button>
          </div>
          {difficulty === 'easy' ? (
            <img src={rules} alt='image of rules' />
          ) : (
            <img src={bonusRules} alt='image of rules' />
          )}
          {difficulty === 'hard' && (
            <p className='text-center text-sm'>
              Not sure what Rock, Paper, Scissors, Lizard, Spock is?{' '}
              <a
                href='https://www.youtube.com/watch?v=iSHPVCBsnLw'
                target='_blank'
                rel='noopener noreferrer'
                className='italic underline text-blue-800'
              >
                Check out this clip from The Big Bang Theory.
              </a>
            </p>
          )}

          <button className='cursor-pointer md:hidden' onClick={handleClose}>
            <img src={close} alt='close icon' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
