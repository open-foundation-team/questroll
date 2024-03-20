// Package imports
import { useState } from "react";

// Component imports
import { Die, DieSum, DieHistory, Drawer, View } from "./components";


// TODO: types should be extracted from main app
// Die type
type DieType = 2 | 4 | 6 | 8 | 10 | 12 | 20 | 100;
interface DieStateType {
  dieType: DieType,
  rolls?: number
};

// Die history state type
export type DieHistoryType = {
  type: 'roll',
  dieType: DieType,
  value: number
} |
{
  type: 'modifier',
  value: number
};


// App declatation
const App = () => {

  // Application states
  const [dieHistory, setDieHistory] = useState<DieHistoryType[]>([]);

  // Declaration of die states
  const dieList: DieType[] = [2, 4, 6, 8, 10, 12, 20, 100];
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


  // Function to add a die modifier
  const dieModifier = (action: 'add' | 'sub') => {
    setDieHistory(prev => {
      const currentHistory = [...prev];
      const lastIndex = currentHistory.length - 1;
      const lastValue = currentHistory[lastIndex];

      if (lastValue.type === 'modifier') {

        if (action === 'add') currentHistory[lastIndex] = {
          ...currentHistory[lastIndex],
          value: currentHistory[lastIndex].value + 1
        };
        if (action === 'sub') currentHistory[lastIndex] = {
          ...currentHistory[lastIndex],
          value: currentHistory[lastIndex].value - 1
        };
        if (currentHistory[lastIndex].value === 0) {
          currentHistory.pop();
        };

        return currentHistory;

      } else {

        return [...currentHistory, {
          type: 'modifier',
          value: action === 'add' ? 1 : -1
        }];
      }
    });
  };


  // Function to reset all die states
  const resetDieStates = () => {
    setDieStates(initialDieState);
    setDieHistory([]);
  };


  // Function to roll "x" die
  const rollDie = (id: number) => {

    // Roll virtual dice and set value
    const randomNumber = Math.floor(Math.random() * dieList[id]) + 1;

    // Store roll in history
    setDieHistory(prev => ([...prev, {
      type: 'roll',
      dieType: dieList[id],
      value: randomNumber
    }]));

    updateDieState(id);
  };

  return (
    <View>
      <DieHistory
        rolls={dieHistory}
      />
      <DieSum
        rolls={dieHistory}
        modifierFunction={dieModifier}
      />
      <Drawer
        showReset={dieHistory.length ? true : false}
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
