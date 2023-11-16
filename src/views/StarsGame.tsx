import {useState} from "react";
import ConfettiExplosion, {ConfettiProps} from 'react-confetti-explosion';

const StarsGame = () => {
  const [maxStars,] = useState(3);
  const CHECKSTATE_DEFAULT_VALUE = new Array(maxStars).fill(false);
  const [checkedState, setCheckedState] = useState(CHECKSTATE_DEFAULT_VALUE);
  const [isFinished, setIsFinished] = useState(false);

  const explostionParams: ConfettiProps = {
    force: 0.8,
    duration: 5000,
    particleCount: 300,
    width: 1600,
    colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
  }

  const handleOnChange = (position: number) => {
    const canCheck = position === checkedState.filter((s) => !!s).length;
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position && canCheck ? !item : item
    );
    if(updatedCheckedState.every((s) => !!s)) {
      setIsFinished(true);
    }
    setCheckedState(updatedCheckedState);
  };

  const restart = () => {
    setCheckedState(CHECKSTATE_DEFAULT_VALUE)
    setIsFinished(false);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex flex-col justify-evenly items-center hero-content text-center max-w-screen-lg w-full h-full relative">
        <div className="w-48 h-auto relative">
        {isFinished && <ConfettiExplosion style={{position: "absolute", top: 0, left: '50%'}} {...explostionParams} />}
          <img className="h-auto max-w-full object-contain" src="./images/trophy.png" alt="image description" />
        </div>
        <div>
          {
            Array.from(Array(maxStars).keys()).map((starIdx, index) => (
              <label className="swap text-9xl">

                {/* this hidden checkbox controls the state */}
                <input key={starIdx} type="checkbox"  onChange={() => handleOnChange(index)}
                       disabled={checkedState[index]}
                       checked={checkedState[index]} />

                <div className="swap-on">⭐</div>
                <div className="swap-off">✩</div>
              </label>
            ))
          }
        </div>
        <div>
          {
            isFinished && (<button onClick={restart} className="btn btn-primary">Recommencer</button>)
          }
        </div>

      </div>
    </div>
  )
}

export default StarsGame;