import Logo from '../assets/images/logo.svg';
import BonusLogo from '../assets/images/logo-bonus.svg';

const Header = ({
  score,
  difficulty
}: {
  score: number;
  difficulty: string;
}) => {
  return (
    <header className='lg:w-2/5 w-full border-2 border-header-outline md:rounded-2xl rounded-md px-5 sm:py-4 py-3 flex items-center justify-between'>
      {difficulty === 'easy' ? (
        <img
          src={Logo}
          alt='Logo'
          className='sm:w-1/4 w-7/20  animate-fade-in'
        />
      ) : (
        <img
          src={BonusLogo}
          alt='Logo'
          className='sm:w-1/5 w-1/4  animate-fade-in'
        />
      )}

      <section className='bg-white rounded-md space-y-0.5 text-center py-3 sm:px-10 px-7'>
        <p className='text-score-text uppercase tracking-widest text-xs'>
          Score
        </p>
        <p className='text-dark-text text-5xl font-bold'>{score}</p>
      </section>
    </header>
  );
};

export default Header;
