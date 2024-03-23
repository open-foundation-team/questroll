// Package imports
import { useState } from "react";

// Component imports
import { Die, Drawer, View } from "./components";


// Die type
interface DieStateType {
  dieType: 2 | 4 | 6 | 8 | 10 | 12 | 20 | 100,
  rolls?: number
};


// App declatation
const App = () => {

  // Application states
  const [rolledValues, setRolledValues] = useState<number[]>([]);

  // Declaration of die states
  const dieList = [2, 4, 6, 8, 10, 12, 20, 100];
  const initialDieState = dieList.map(die => (
    {
      dieType: die as unknown as DieStateType['dieType'],
      rolls: 0
    }
  ));
  const [dieStates, setDieStates] = useState<DieStateType[]>(initialDieState);

  const updateDieState = (id: number) => {
    setDieStates(dieStates.map((die, idx) => {
      if (id === idx) return {
        dieType: die.dieType,
        rolls: die?.rolls ? die.rolls + 1 : 1
      }
      return die;
    }));
  };


  // Function to reset all die states
  const resetDieStates = () => {
    setDieStates(initialDieState);
    setRolledValues([])
  };


  // Function to roll "x" die
  const rollDie = (id: number) => {

    // Roll virtual dice and set value
    const randomNumber = Math.floor(Math.random() * dieList[id]) + 1;
    setRolledValues(prev => [...prev, randomNumber]);

    updateDieState(id);
  };

  return (
    <View>
      {rolledValues.length ?
        <p>{rolledValues.at(-1)}</p>
        :
        <p>table_translations.craps_notifications</p>
      }
      <Drawer
        showReset={rolledValues.length ? true : false}
        resetFunction={resetDieStates}
      >
        {dieStates.map((die, idx) => (
          <Die
            {...die}
            onClick={() => rollDie(idx)}
            key={idx}
          />
        ))}
      </Drawer>
    </View>
  );
};

// App component export
export default App;
