import { useState, useEffect } from 'react';

import type React from 'react';
import triBg from '../assets/images/bg-triangle.svg';
import { PaperButton, RockButton, ScissorsButton } from './Buttons';
import clsx from 'clsx';
import { EASY_CHOICES } from '../constants';

const EasyMode = ({
  setScore
}: {
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isStageOne, setIsStageOne] = useState(true);
  const [isStageTwo, setIsStageTwo] = useState(false);
  const [isWinnerSet, setIsWinnerSet] = useState(false);
  const [winner, setWinner] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');

  const choices = [
    EASY_CHOICES.PAPER,
    EASY_CHOICES.ROCK,
    EASY_CHOICES.SCISSORS
  ];

  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(choice);
    setIsStageOne(false);
    setIsStageTwo(true);
  };

  const determineWinner = () => {
    if (
      (playerChoice === EASY_CHOICES.PAPER &&
        computerChoice === EASY_CHOICES.ROCK) ||
      (playerChoice === EASY_CHOICES.ROCK &&
        computerChoice === EASY_CHOICES.SCISSORS) ||
      (playerChoice === EASY_CHOICES.SCISSORS &&
        computerChoice === EASY_CHOICES.PAPER)
    ) {
      setWinner('player');
      setScore((prevScore) => prevScore + 1);
    } else if (playerChoice === computerChoice) {
      setWinner('tie');
    } else {
      setWinner('computer');
    }
    setIsWinnerSet(true);
  };

  const resetGame = () => {
    setIsStageOne(true);
    setIsStageTwo(false);
    setIsWinnerSet(false);
    setWinner('');
    setPlayerChoice('');
    setComputerChoice('');
  };

  useEffect(() => {
    if (isStageTwo) {
      setTimeout(() => {
        const random = Math.floor(Math.random() * choices.length);
        setComputerChoice(choices[random]);
      }, 1500);
    }
  }, [isStageTwo]);

  useEffect(() => {
    if (computerChoice) {
      determineWinner();
    }
  }, [computerChoice]);
  return (
    <section className='flex-1 flex w-full justify-center items-center h-full animate-fade-in'>
      {isStageOne && !playerChoice && (
        <section className='relative flex justify-center items-center'>
          <img
            src={triBg}
            alt='Background triangle for game choices'
            className='lg:w-4/5 md:w-7/10 w-3/5 mx-auto relative'
          />

          {/* Paper */}
          <PaperButton
            func={() => handlePlayerChoice(EASY_CHOICES.PAPER)}
            outer='absolute top-1 lg:-left-33 md:-left-15 left-0 -translate-y-1/2'
          />

          {/* Scissors */}
          <ScissorsButton
            func={() => handlePlayerChoice(EASY_CHOICES.SCISSORS)}
            outer='absolute top-1 lg:-right-33 md:-right-15  right-0 -translate-y-1/2'
          />

          {/* Rock */}
          <RockButton
            func={() => handlePlayerChoice(EASY_CHOICES.ROCK)}
            outer='absolute lg:-bottom-40 md:-bottom-28  -bottom-15 left-1/2 -translate-x-1/2'
          />
        </section>
      )}

      {isStageTwo && (
        <section
          className={clsx('flex-1 md:flex-none w-9/10 space-y-8 ', {
            'xl:w-3/5 lg:w-4/5 md:w-full': isWinnerSet,
            'lg:w-2/5 md:w-3/4': !isWinnerSet
          })}
        >
          <div
            className={clsx('flex justify-between  mx-auto', {
              'items-center': isWinnerSet,
              'items-end': !isWinnerSet
            })}
          >
            <div className='md:gap-y-8 gap-y-4 h-full flex flex-col items-center'>
              {playerChoice === EASY_CHOICES.SCISSORS ? (
                <ScissorsButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : playerChoice === EASY_CHOICES.ROCK ? (
                <RockButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : (
                <PaperButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              )}

              <p className='text-white md:order-first text-center uppercase tracking-widest'>
                You Picked
              </p>
            </div>

            {isWinnerSet && (
              <div className='text-center md:block hidden'>
                <h2 className='text-white lg:text-5xl text-4xl uppercase tracking-widest font-bold'>
                  {winner === 'player'
                    ? 'You Win!'
                    : winner === 'computer'
                    ? 'You Lose!'
                    : "It's a Tie!"}
                </h2>
                <button
                  onClick={resetGame}
                  className='mt-6 px-16 py-3 bg-white text-dark-text rounded-md uppercase tracking-widest hover:text-rock-100 hover:shadow-2xl hover:shadow-white/20 duration-500 ease-in-out cursor-pointer'
                >
                  Play Again
                </button>
              </div>
            )}

            <div className='md:gap-y-8 gap-y-4 h-full flex flex-col items-center'>
              {computerChoice === EASY_CHOICES.SCISSORS ? (
                <ScissorsButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : computerChoice === EASY_CHOICES.ROCK ? (
                <RockButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : computerChoice === EASY_CHOICES.PAPER ? (
                <PaperButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : (
                <div className='rounded-full animate-heartbeat md:size-60 size-32 bg-[#172240] mx-auto'></div>
              )}

              <p className='text-white md:order-first text-center uppercase tracking-widest'>
                The House Picked
              </p>
            </div>
          </div>

          {isWinnerSet && (
            <div className='text-center md:hidden'>
              <h2 className='text-white text-4xl uppercase tracking-widest font-bold'>
                {winner === 'player'
                  ? 'You Win!'
                  : winner === 'computer'
                  ? 'You Lose!'
                  : "It's a Tie!"}
              </h2>
              <button
                onClick={resetGame}
                className='mt-6 px-16 py-3 bg-white text-dark-text rounded-md uppercase tracking-widest hover:text-rock-100 hover:shadow-2xl hover:shadow-white/20 duration-500 ease-in-out cursor-pointer'
              >
                Play Again
              </button>
            </div>
          )}
        </section>
      )}
    </section>
  );
};

export default EasyMode;
