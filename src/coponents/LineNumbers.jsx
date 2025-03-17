function LineNumbers() {
    const numbers = [8, 2, 5, 7, 1, 6, 4, 3, 9];

    const NumberBlock = () => numbers.map((num, index) => (
        <div
            key={index}
            className="w-[45px] h-[45px] bg-[gold] mx-auto mt-[12px] flex justify-center items-center rounded-[10px] text-[36px] font-bold"
        >
            {num}
        </div>
    ));

    return (
        <div className="w-[75px] h-[530px]">
            <NumberBlock />
        </div>
    )
}

export default LineNumbers
