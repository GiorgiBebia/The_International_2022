import { useState } from "react";

function BalanceLine({ balance, bet, choosedLine, setChoosedLine, coinValue, win, setCoinValue }) {

    const choosedLineArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const decreaseLine = () => {
        const currentIndex = choosedLineArr.indexOf(choosedLine);
        const newIndex = Math.max(currentIndex - 1, 0);
        setChoosedLine(choosedLineArr[newIndex]);
    };

    const increaseLine = () => {
        const currentIndex = choosedLineArr.indexOf(choosedLine);
        const newIndex = Math.min(currentIndex + 1, choosedLineArr.length - 1);
        setChoosedLine(choosedLineArr[newIndex]);
    };


    const coinValueArr = [0.1, 0.5, 1, 5, 10, 50, 100];

    const decreaseCoinValue = () => {
        const currentIndex = coinValueArr.indexOf(coinValue);
        const newIndex = Math.max(currentIndex - 1, 0);
        setCoinValue(coinValueArr[newIndex]);
    };

    const increaseCoinValue = () => {
        const currentIndex = coinValueArr.indexOf(coinValue);
        const newIndex = Math.min(currentIndex + 1, coinValueArr.length - 1);
        setCoinValue(coinValueArr[newIndex]);
    };

    const [muted, setMuted] = useState(false);

    const toggleMute = () => {
        setMuted(!muted);
    };

    return (
        <div className="w-[1340px] h-[100px] mx-auto mt-[10px] flex justify-between">
            {/* <div className="w-[50px] text-center mt-[8px] text-[25px]">
                  <h3 className="text-[floralwhite] italic">i</h3>
                </div> */}

            <div className="w-[200px]">
                <h3 className="text-center text-[floralwhite]">BALANCE</h3>
                <h3 className="text-center bg-[goldenrod] border-[5px] border-[gold] rounded-[10px]">
                    {balance.toFixed(2)}
                </h3>
                {balance < bet && (
                    <h3 className="text-center bg-[goldenrod] border-[5px] border-[red] rounded-[10px] mt-[5px] text-red-800">
                        NO BET MONEY!!!
                    </h3>
                )}
            </div>

            <div className="w-[200px]">
                <h3 className="text-center text-[floralwhite]">LINES</h3>
                <h3 className="text-center bg-[goldenrod] border-[5px] border-[gold] rounded-[10px] flex justify-evenly">
                    <button onClick={decreaseLine}>-</button>
                    {choosedLine}
                    <button onClick={increaseLine}>+</button>
                </h3>
            </div>

            <div className="w-[200px]">
                <h3 className="text-center text-[floralwhite]">CASH BET</h3>
                <h3 className="text-center bg-[goldenrod] border-[5px] border-[gold] rounded-[10px] flex justify-evenly">
                    <button onClick={decreaseCoinValue}>-</button>
                    {coinValue}
                    <button onClick={increaseCoinValue}>+</button>
                </h3>
            </div>

            <div className="w-[200px]">
                <h3 className="text-center text-[floralwhite]">BET</h3>
                <h3 className="text-center bg-[goldenrod] border-[5px] border-[gold] rounded-[10px]">
                    {bet.toFixed(2)}
                </h3>
            </div>

            <div className="w-[200px]">
                <h3 className="text-center text-[floralwhite]">WIN</h3>
                <h3 className="text-center bg-[goldenrod] border-[5px] border-[gold] rounded-[10px]">
                    {win.toFixed(2)}
                </h3>
            </div>

            <div className="w-[60px] h-[60px]" onClick={toggleMute}>
                {muted ? (
                    <img
                        className="w-[60px] mt-[20px]"
                        src="mute.png"
                        alt="Mute Image" />
                ) : (
                    <img
                        className="w-[60px] mt-[20px]"
                        src="unmute.png"
                        alt="Unmute Image" />
                )}
            </div>
        </div>
    )
}

export default BalanceLine
