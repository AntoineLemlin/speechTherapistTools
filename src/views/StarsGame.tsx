import {useState, useEffect} from "react";
import ConfettiExplosion, {ConfettiProps} from 'react-confetti-explosion';

const StarsGame = () => {
  const [maxStars,] = useState(3);
  const [currentCheckedNumber, setCheckedState] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const explostionParams: ConfettiProps = {
    force: 0.8,
    duration: 5000,
    particleCount: 200,
    width: 1600,
    colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
  }

  const handleOnChange = (position: number) => {
    if(currentCheckedNumber === position) {
      setCheckedState(state => state + 1);
    }
  };

  const restart = () => {
    setCheckedState(0)
    setIsFinished(false);
  }

  useEffect(() => {
    if(currentCheckedNumber === maxStars) {
      setIsFinished(true)
    }
  }, [currentCheckedNumber] )

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
                       disabled={index < currentCheckedNumber}
                       checked={index < currentCheckedNumber} />

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