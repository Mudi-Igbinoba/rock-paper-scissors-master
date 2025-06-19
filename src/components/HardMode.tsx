import React, { useEffect, useState } from 'react';
import pentBg from '../assets/images/bg-pentagon.svg';
import {
  LizardButton,
  PaperButton,
  RockButton,
  ScissorsButton,
  SpockButton
} from './Buttons';

import { HARD_CHOICES } from '../constants';
import clsx from 'clsx';

const HardMode = ({
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
    HARD_CHOICES.PAPER,
    HARD_CHOICES.ROCK,
    HARD_CHOICES.SCISSORS,
    HARD_CHOICES.LIZARD,
    HARD_CHOICES.SPOCK
  ];

  const handlePlayerChoice = (choice: string) => {
    setPlayerChoice(choice);
    setIsStageOne(false);
    setIsStageTwo(true);
  };

  const determineWinner = () => {
    if (
      // // paper beats rock
      // (playerChoice === HARD_CHOICES.PAPER &&
      //   computerChoice === HARD_CHOICES.ROCK) ||
      // //player beats spock
      // (playerChoice === HARD_CHOICES.PAPER &&
      //   computerChoice === HARD_CHOICES.SPOCK) ||
      // // rock beat scissors
      // (playerChoice === HARD_CHOICES.ROCK &&
      //   computerChoice === HARD_CHOICES.SCISSORS) ||
      // // rock beats lizard
      // (playerChoice === HARD_CHOICES.ROCK &&
      //   computerChoice === HARD_CHOICES.LIZARD) ||
      // // scissors beats paper
      // (playerChoice === HARD_CHOICES.SCISSORS &&
      //   computerChoice === HARD_CHOICES.PAPER) ||
      // // scissors beats lizard
      // (playerChoice === HARD_CHOICES.SCISSORS &&
      //   computerChoice === HARD_CHOICES.LIZARD) ||
      // // spock beats scissors
      // (playerChoice === HARD_CHOICES.SPOCK &&
      //   computerChoice === HARD_CHOICES.SCISSORS) ||
      // // spock beats rock
      // (playerChoice === HARD_CHOICES.SPOCK &&
      //   computerChoice === HARD_CHOICES.ROCK) ||
      // // lizard beats spock
      // (playerChoice === HARD_CHOICES.LIZARD &&
      //   computerChoice === HARD_CHOICES.SPOCK) ||
      // // lizard beats paper
      // (playerChoice === HARD_CHOICES.LIZARD &&
      //   computerChoice === HARD_CHOICES.ROCK)

      // paper beats rock or spock
      (playerChoice === HARD_CHOICES.PAPER &&
        (computerChoice === HARD_CHOICES.ROCK ||
          computerChoice === HARD_CHOICES.SPOCK)) ||
      // rock beat scissors or lizard
      (playerChoice === HARD_CHOICES.ROCK &&
        (computerChoice === HARD_CHOICES.SCISSORS ||
          computerChoice === HARD_CHOICES.LIZARD)) ||
      // scissors beats paper or lizard
      (playerChoice === HARD_CHOICES.SCISSORS &&
        (computerChoice === HARD_CHOICES.PAPER ||
          computerChoice === HARD_CHOICES.LIZARD)) ||
      // spock beats scissors or rock
      (playerChoice === HARD_CHOICES.SPOCK &&
        (computerChoice === HARD_CHOICES.SCISSORS ||
          computerChoice === HARD_CHOICES.ROCK)) ||
      // lizard beats spock or paper
      (playerChoice === HARD_CHOICES.LIZARD &&
        (computerChoice === HARD_CHOICES.SPOCK ||
          computerChoice === HARD_CHOICES.PAPER))
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
        <section className='relative flex justify-center items-center animate-fade-in'>
          <img
            src={pentBg}
            alt='Background triangle for game choices'
            className='lg:w-4/5 sm:w-7/10 w-13/20  mx-auto relative'
          />

          {/* Scissors */}
          <ScissorsButton
            func={() => handlePlayerChoice(HARD_CHOICES.SCISSORS)}
            outer='absolute md:-top-9 -top-6 md:size-28! size-20! left-1/2   -translate-x-1/2'
            inner='md:size-22! size-16!'
          />

          {/* Paper */}
          <PaperButton
            func={() => handlePlayerChoice(HARD_CHOICES.PAPER)}
            outer='absolute md:size-28! size-20! top-1/5 lg:-right-5 md:-right-0   right-5 '
            inner='md:size-22! size-16!'
          />

          {/* Rock */}
          <RockButton
            func={() => handlePlayerChoice(HARD_CHOICES.ROCK)}
            outer='absolute md:size-28! size-20! lg:-bottom-12 md:-bottom-16  sm:-bottom-10 -bottom-8 lg:left-11/20 md:left-14/25 left-11/20'
            inner='md:size-22! size-16!'
          />

          {/* Lizard */}
          <LizardButton
            func={() => handlePlayerChoice(HARD_CHOICES.LIZARD)}
            outer='absolute md:size-28! size-20! lg:-bottom-12 md:-bottom-16  sm:-bottom-10 -bottom-8 lg:right-11/20 md:right-14/25 right-11/20'
            inner='md:size-22! size-16!'
          />

          {/* Spock */}
          <SpockButton
            func={() => handlePlayerChoice(HARD_CHOICES.SPOCK)}
            outer='absolute md:size-28! size-20! top-1/5 lg:-left-5 md:-left-0   left-5 '
            inner='md:size-22! size-16!'
          />
        </section>
      )}

      {isStageTwo && (
        <section
          className={clsx(
            'flex-1 md:flex-none w-9/10 space-y-8 animate-fade-in',
            {
              'xl:w-3/5 lg:w-4/5 md:w-full': isWinnerSet,
              'lg:w-2/5 md:w-3/4': !isWinnerSet
            }
          )}
        >
          <div
            className={clsx('flex justify-between  mx-auto', {
              'items-center': isWinnerSet,
              'items-end': !isWinnerSet
            })}
          >
            <div className='md:gap-y-8 gap-y-4 h-full flex flex-col items-center'>
              {playerChoice === HARD_CHOICES.SCISSORS ? (
                <ScissorsButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : playerChoice === HARD_CHOICES.ROCK ? (
                <RockButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : playerChoice === HARD_CHOICES.PAPER ? (
                <PaperButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : playerChoice === HARD_CHOICES.SPOCK ? (
                <SpockButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : (
                <LizardButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              )}

              <p className='text-white md:order-first text-center uppercase tracking-widest'>
                You Picked
              </p>
            </div>

            {isWinnerSet && (
              <div className='text-center md:block hidden animate-fade-in'>
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

            <div className='md:gap-y-8 gap-y-4 h-full flex flex-col items-center animate-fade-in'>
              {computerChoice === HARD_CHOICES.SCISSORS ? (
                <ScissorsButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : computerChoice === HARD_CHOICES.ROCK ? (
                <RockButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : computerChoice === HARD_CHOICES.PAPER ? (
                <PaperButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : computerChoice === HARD_CHOICES.SPOCK ? (
                <SpockButton
                  outer='md:size-60! size-32!'
                  inner='md:size-46! size-26!'
                />
              ) : computerChoice === HARD_CHOICES.LIZARD ? (
                <LizardButton
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
              <h2 className='text-white text-4xl uppercase tracking-widest font-bold animate-fade-in'>
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

export default HardMode;
