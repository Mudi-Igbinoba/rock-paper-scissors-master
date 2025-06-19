import type { MouseEventHandler } from 'react';
import paper from '../assets/images/icon-paper.svg';
import rock from '../assets/images/icon-rock.svg';
import scissors from '../assets/images/icon-scissors.svg';
import lizard from '../assets/images/icon-lizard.svg';
import spock from '../assets/images/icon-spock.svg';

export const PaperButton = ({
  outer,
  inner,
  func
}: {
  outer?: string;
  inner?: string;
  func?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={func} className={`${outer} outer-button paper group`}>
      <div className='rounded-full '>
        <div className={`${inner} inner-button`}>
          <img src={paper} alt='paper' className='button-icon' />
        </div>
      </div>
    </button>
  );
};

export const ScissorsButton = ({
  outer,
  inner,
  func
}: {
  outer?: string;
  inner?: string;
  func?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={func} className={`${outer} outer-button scissors group`}>
      <div className='rounded-full '>
        <div className={`${inner} inner-button`}>
          <img src={scissors} alt='scissors' className='button-icon' />
        </div>
      </div>
    </button>
  );
};

export const RockButton = ({
  outer,
  inner,
  func
}: {
  outer?: string;
  inner?: string;
  func?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={func} className={`${outer} outer-button rock group`}>
      <div className='rounded-full '>
        <div className={`${inner} inner-button`}>
          <img src={rock} alt='rock' className='button-icon' />
        </div>
      </div>
    </button>
  );
};

export const LizardButton = ({
  outer,
  inner,
  func
}: {
  outer?: string;
  inner?: string;
  func?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={func} className={`${outer} outer-button lizard group`}>
      <div className='rounded-full '>
        <div className={`${inner} inner-button`}>
          <img src={lizard} alt='lizard' className='button-icon w-11/20!' />
        </div>
      </div>
    </button>
  );
};

export const SpockButton = ({
  outer,
  inner,
  func
}: {
  outer?: string;
  inner?: string;
  func?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={func} className={`${outer} outer-button spock group`}>
      <div className='rounded-full '>
        <div className={`${inner} inner-button`}>
          <img src={spock} alt='spock' className='button-icon w-9/20!' />
        </div>
      </div>
    </button>
  );
};
