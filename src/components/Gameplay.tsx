import React from 'react';
import EasyMode from './EasyMode';
import HardMode from './HardMode';

const Gameplay = ({
  difficulty,
  setScore
}: {
  difficulty: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      {difficulty === 'easy' ? (
        <EasyMode setScore={setScore} />
      ) : (
        <HardMode setScore={setScore} />
      )}
    </>
  );
};

export default Gameplay;
