import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState('');
  const [darkToggle, setDarkToggle] = useState(false);
  const clickOnNumber = (number) => {
    setNum((prev) => `${prev}${number}`);
  };

  const del = () => {
    setNum((prev) => prev.slice(0, -1));
  };
  const equal = () => {
    setNum(`${eval(num)}`);
  };
  const reset = () => {
    setNum('');
  };
  let buttonStyles =
    'flex w-20 h-12 bg-Lightgrayishorange rounded-md justify-center mx-auto mt-4 items-center text-xl font-bold hover:bg-Grayishorange dark:bg-Lightgrayishyellow dark:hover:bg-Darkgrayishorange';
  return (
    <div className={`${darkToggle && 'dark'}`}>
      <div className={`bg-desaturatedBlue h-screen dark:bg-Lightgray`}>
        <div className='max-w-xl pt-24 mx-auto flex flex-col'>
          <div className='flex items-center justify-between'>
            <p className='text-xl font-semibold'>calc</p>
            <p className='text-xs font-bold'>THEME</p>
            <div className='bg-darkBlue w-16 h-5 rounded-3xl'>
              <button
                onClick={() => setDarkToggle(!darkToggle)}
                className='w-4 h-4 bg-orange rounded-3xl ml-2 mt-0.5'
              ></button>
            </div>
          </div>
          <div className='items-center mt-10 h-28 rounded-xl bg-darkDesaturatedBlue flex justify-end pr-10 dark:bg-Verylightgray'>
            <p className='text-4xl font-semibold '>{num}</p>
          </div>
          <div className='grid grid-rows-5 grid-flow-col bg-darkBlue rounded-xl  mt-6 dark:bg-Grayishred'>
            <button onClick={() => clickOnNumber(7)} className={buttonStyles}>
              7
            </button>
            <button onClick={() => clickOnNumber(4)} className={buttonStyles}>
              4
            </button>
            <button onClick={() => clickOnNumber(1)} className={buttonStyles}>
              1
            </button>
            <button onClick={() => clickOnNumber('.')} className={buttonStyles}>
              .
            </button>
            <button
              onClick={() => reset()}
              className={
                'flex w-4/5 h-12 bg-Desaturateddarkblue rounded-md justify-center mx-auto mt-2 items-center col-span-2 text-white font-bold hover:bg-Desaturateddarkblue2 dark:bg-Darkmoderatecyan dark:hover:bg-Verydarkcyan'
              }
            >
              RESET
            </button>
            <button onClick={() => clickOnNumber(8)} className={buttonStyles}>
              8
            </button>
            <button onClick={() => clickOnNumber(5)} className={buttonStyles}>
              5
            </button>
            <button onClick={() => clickOnNumber(2)} className={buttonStyles}>
              2
            </button>
            <button onClick={() => clickOnNumber(0)} className={buttonStyles}>
              0
            </button>
            <button onClick={() => clickOnNumber(9)} className={buttonStyles}>
              9
            </button>
            <button onClick={() => clickOnNumber(6)} className={buttonStyles}>
              6
            </button>
            <button onClick={() => clickOnNumber(3)} className={buttonStyles}>
              3
            </button>
            <button onClick={() => clickOnNumber('/')} className={buttonStyles}>
              /
            </button>
            <button
              onClick={() => equal()}
              className={
                'flex w-4/5 h-12 bg-Red rounded-md justify-center mx-auto mt-2 items-center col-span-2 text-white font-bold hover:bg-Darkred dark:bg-orange dark:hover:bg-Darkorange'
              }
            >
              =
            </button>
            <button
              onClick={() => del()}
              className='flex w-20 h-12 bg-Desaturateddarkblue rounded-md justify-center mx-auto mt-4 items-center text-white font-bold hover:bg-Desaturateddarkblue2 dark:bg-Darkmoderatecyan dark:hover:bg-Verydarkcyan'
            >
              DEL
            </button>
            <button onClick={() => clickOnNumber('+')} className={buttonStyles}>
              +
            </button>
            <button onClick={() => clickOnNumber('-')} className={buttonStyles}>
              -
            </button>
            <button onClick={() => clickOnNumber('*')} className={buttonStyles}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
