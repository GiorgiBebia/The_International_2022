import { useState, useEffect } from "react";

function Spin({ setRandomNumbers, balance, bet, setBalance }) {
    const [isAutoSpinning, setIsAutoSpinning] = useState(false);

    function spin() {
        if (balance >= bet && bet > 0) {
            setBalance(balance - bet);
            const newRandomNumbers = Array.from({ length: 15 }, () =>
                Math.floor(Math.random() * 10)
            );
            setRandomNumbers(newRandomNumbers);
        } else {
            setIsAutoSpinning(false);
        }
    }

    function toggleAutoSpin() {
        if (!isAutoSpinning && balance >= bet && bet > 0) {
            setIsAutoSpinning(true);
        } else {
            setIsAutoSpinning(false);
        }
    }

    useEffect(() => {
        let autoSpinInterval;
        if (isAutoSpinning) {
            autoSpinInterval = setInterval(() => {
                spin();
            }, 1000);
        }
        return () => clearInterval(autoSpinInterval);
    }, [isAutoSpinning, balance]);

    const isDisabled = balance < bet || bet <= 0;

    return (
        <div className="w-[1340px] h-[150px] mx-auto flex justify-around">
            <div
                className={`w-[150px] h-[150px] flex justify-center items-center text-center rounded-full border-[5px] border-[gold] cursor-pointer transition-all 
                    ${isDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[goldenrod] hover:scale-105"
                    }`}
                onClick={!isDisabled ? spin : null}
            >
                <h3 className="text-[32px]">SPIN</h3>
            </div>

            <div
                className={`w-[150px] h-[150px] flex justify-center items-center text-center rounded-full border-[5px] border-[gold] cursor-pointer transition-all 
                    ${isDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : isAutoSpinning
                            ? "bg-red-600 hover:scale-105"
                            : "bg-[goldenrod] hover:scale-105"
                    }`}
                onClick={!isDisabled ? toggleAutoSpin : null}
            >
                <h3 className="text-[32px]">{isAutoSpinning ? "STOP" : "AUTO SPIN"}</h3>
            </div>
        </div>
    );
}

export default Spin;
