import { useState, useEffect } from "react";
import GoodLuck from "./coponents/GoodLuck";
import BalanceLine from "./coponents/BalanceLine";
import Slot from "./coponents/Slot";
import LineNumbers from "./coponents/LineNumbers";
import Spin from "./coponents/Spin";

export function App() {
  const [randomNumbers, setRandomNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6,
  ]);

  useEffect(() => {
    LineWin();
  }, [randomNumbers]);

  const [choosedLine, setChoosedLine] = useState(1);

  const [coinValue, setCoinValue] = useState(1);

  const [bet, setBet] = useState(choosedLine * coinValue);
  useEffect(() => {
    setBet(choosedLine * coinValue);
  }, [choosedLine, coinValue]);

  const [winArr, setWinArr] = useState([]);

  const [win, setWin] = useState(0);

  const [balance, setBalance] = useState(100);

  useEffect(() => {
    setWin(winArr.reduce((total, value) => total + value, 0));
  }, [winArr]);

  useEffect(() => {
    setBalance((prevBalance) => prevBalance + win);
  }, [win]);

  useEffect(() => {
    LineWin();
  }, [randomNumbers]);

  const LineWin = () => {
    let newWins = [];

    if (choosedLine >= 1) {
      if (
        randomNumbers[5] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[7]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[7] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[9]
      )
        newWins.push(coinValue);
    }
    if (choosedLine >= 2) {
      if (
        randomNumbers[0] === randomNumbers[1] &&
        randomNumbers[1] === randomNumbers[2]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[1] &&
        randomNumbers[1] === randomNumbers[3]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[1] &&
        randomNumbers[1] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[3]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[3] &&
        randomNumbers[3] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[1] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[3]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[1] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[1] === randomNumbers[3] &&
        randomNumbers[3] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[2] === randomNumbers[3] &&
        randomNumbers[3] === randomNumbers[4]
      )
        newWins.push(coinValue);
    }
    if (choosedLine >= 3) {
      if (
        randomNumbers[10] === randomNumbers[11] &&
        randomNumbers[11] === randomNumbers[12]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[11] &&
        randomNumbers[11] === randomNumbers[13]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[11] &&
        randomNumbers[11] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[13]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[13] &&
        randomNumbers[13] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[11] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[13]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[11] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[11] === randomNumbers[13] &&
        randomNumbers[13] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[12] === randomNumbers[13] &&
        randomNumbers[13] === randomNumbers[14]
      )
        newWins.push(coinValue);
    }
    if (choosedLine >= 4) {
      if (
        randomNumbers[10] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[2]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[18]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[2] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[14]
      )
        newWins.push(coinValue);
    }
    if (choosedLine >= 5) {
      if (
        randomNumbers[0] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[12]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[12] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[4]
      )
        newWins.push(coinValue);
    }
    if (choosedLine >= 6) {
      if (
        randomNumbers[5] === randomNumbers[11] &&
        randomNumbers[11] === randomNumbers[7]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[11] &&
        randomNumbers[11] === randomNumbers[3]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[11] &&
        randomNumbers[11] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[3]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[3] &&
        randomNumbers[3] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[11] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[3]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[11] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[11] === randomNumbers[3] &&
        randomNumbers[3] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[7] === randomNumbers[3] &&
        randomNumbers[3] === randomNumbers[9]
      )
        newWins.push(coinValue);
    }
    if (choosedLine >= 7) {
      if (
        randomNumbers[5] === randomNumbers[11] &&
        randomNumbers[11] === randomNumbers[7]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[11] &&
        randomNumbers[11] === randomNumbers[13]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[11] &&
        randomNumbers[11] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[13]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[5] === randomNumbers[13] &&
        randomNumbers[13] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[11] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[13]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[11] === randomNumbers[7] &&
        randomNumbers[7] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[11] === randomNumbers[13] &&
        randomNumbers[13] === randomNumbers[9]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[7] === randomNumbers[13] &&
        randomNumbers[13] === randomNumbers[9]
      )
        newWins.push(coinValue);
    }
    if (choosedLine >= 8) {
      if (
        randomNumbers[0] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[2]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[0] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[2] &&
        randomNumbers[2] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[14]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[2] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[14]
      )
        newWins.push(coinValue);
    }
    if (choosedLine >= 9) {
      if (
        randomNumbers[10] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[12]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[6] &&
        randomNumbers[6] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[10] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[8]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[12] &&
        randomNumbers[12] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[6] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[4]
      )
        newWins.push(coinValue);
      if (
        randomNumbers[12] === randomNumbers[8] &&
        randomNumbers[8] === randomNumbers[4]
      )
        newWins.push(coinValue);
    }

    setWinArr(newWins);
  };

  return (
    <div className="h-screen w-full flex justify-evenly bg-[url('/ta22.jpg')] bg-cover bg-center flex-col overflow-hidden">
      <GoodLuck />

      <div className="flex w-[1370px] mx-auto mt-[10px] justify-between">
        <LineNumbers />

        <Slot randomNumbers={randomNumbers} />

        <LineNumbers />
      </div>

      <BalanceLine
        balance={balance}
        bet={bet}
        choosedLine={choosedLine}
        setChoosedLine={setChoosedLine}
        coinValue={coinValue}
        win={win}
        setCoinValue={setCoinValue}
      />

      <Spin
        setRandomNumbers={setRandomNumbers}
        balance={balance}
        bet={bet}
        setBalance={setBalance}
      />
    </div>
  );
}

export default App;
