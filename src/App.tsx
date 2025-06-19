import { useEffect, useState } from 'react';
import Header from './components/Header';
import Rules from './components/Rules';
import Gameplay from './components/Gameplay';

function App() {
  const [score, setScore] = useState(() => {
    const scoresStr = localStorage.getItem('scores');
    if (!scoresStr) return 0;
    const scores = JSON.parse(scoresStr);
    return scores['easy'] ?? 0;
  });

  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    const scoresStr = localStorage.getItem('scores');
    const easyScore = scoresStr ? JSON.parse(scoresStr).easy : 0;
    const hardScore = scoresStr ? JSON.parse(scoresStr).hard : 0;

    if (difficulty === 'easy') {
      setScore(easyScore);
    } else {
      setScore(hardScore);
    }
  }, [difficulty]);

  // Save score when it changes
  useEffect(() => {
    const scoresStr = localStorage.getItem('scores');
    const easyScore = scoresStr ? JSON.parse(scoresStr).easy : 0;
    const hardScore = scoresStr ? JSON.parse(scoresStr).hard : 0;
    if (difficulty === 'easy') {
      localStorage.setItem(
        'scores',
        JSON.stringify({
          easy: score,
          hard: hardScore
        })
      );
    } else {
      localStorage.setItem(
        'scores',
        JSON.stringify({
          easy: easyScore,
          hard: score
        })
      );
    }
  }, [score, difficulty]);

  return (
    <main className='flex flex-col pt-6 pb-8 px-6 items-center justify-between min-h-screen w-full overflow-y-scroll'>
      <Header score={score} difficulty={difficulty} />

      <Gameplay setScore={setScore} difficulty={difficulty} />

      <div className='flex sm:flex-row flex-col gap-y-4 justify-between items-center w-full'>
        <select
          className='py-3 pl-5 pr-9 appearance-none bg-down bg-no-repeat bg-[95%_center]  rounded-xl cursor-pointer bg-transparent border-2 border-header-outline text-white uppercase tracking-[0.2em] hover:bg-white hover:text-header-outline focus:bg-white focus:text-header-outline ease-in-out transition-colors duration-500'
          name='difficulty'
          id='difficulty'
          defaultValue={difficulty}
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        >
          <option value='easy'>Easy Mode</option>
          <option value='hard'>Hard Mode</option>
        </select>

        <Rules difficulty={difficulty} />
      </div>
    </main>
  );
}

export default App;
