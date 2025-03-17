function Slot({ randomNumbers }) {
    const imageMap = {
        0: "aster.png",
        1: "tundra.png",
        2: "secret.png",
        3: "liquid.png",
        4: "psg_lgd.jpg",
        5: "thunder.png",
        6: "beastcoast.png",
        7: "og.png",
        8: "evil_gen.png",
        9: "boom.png",
    };

    return (
        <div className="grid grid-cols-5 grid-rows-3 gap-4">
            {randomNumbers.map((number, index) => {
                const imgSrc = imageMap[number];
                return (
                    <div
                        key={index}
                        className="w-[210px] h-[165px] border-[5px] border-[gold] rounded-[30px]"
                    >
                        <img
                            className="w-[210px] h-[155px] p-2"
                            src={imgSrc}
                            alt={`Slot ${number}`} />
                    </div>
                );
            })}
        </div>
    )
}

export default Slot
