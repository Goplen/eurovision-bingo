import "./Bingo.css"
import React, {useEffect, useState} from "react";

const Bingo: React.FC = () => {
    const items = shuffle([
        "FAKE RAIN", "SYNCHRONISED DANCE ROUTINE", "SOMEONE IN THE AUDIENCE WITH FACE PAINT", "FEATHERS", "PRESENTER OUTFIT CHANGE",
        "SOMEONE WARING A HAT", "THANKING HOST FOR A WONDERFUL EVENING", "SNAZZY MASK", "SINGING OUT OF TONE", "SOMETHING GOES WRONG",
        "FIRE", "MIDDLE FINGER", "MID-SONG COSTUME CHANGE", "A SONG ABOUT LOVE", "WIND MACHINE",
        "CLAPPY BEAT", "A SONG ABOUT PEACE", "FREE", "ANYBODY RAPS", "OBVIOUSLY FAKE INSTRUMENT PLAYING",
        "FLAMES", "CAMERA CIRCLES PERFORMER 360", "CRAWLING OR SLOW-MO", "UNIBROWN", "SMOKE MACHINE"
    ])

    const [itemsWithColor, setItemsWithColor] = useState<{item: string, color: string}[]>([])

    const changeColor = (itemString: string) => {
        const newArray = itemsWithColor.map((item) => (
            item?.item === itemString ? {item: item.item, color: item?.color !== "rgba(50,205,50, .3)" ? "rgba(50,205,50, .3)" : "rgba(255,255,255, .3)"} : item
        ))
        setItemsWithColor(newArray)
    }

    useEffect(() => {
        setItemsWithColor(items.map((item) => ({item: item, color: "rgba(255,255,255, .3)"})))
        localStorage.setItem("cards", JSON.stringify(itemsWithColor))
    }, [])

    return (
        <>
            <div className="box">
                <div className={"bingo-card"}>
                    {itemsWithColor?.map(({item, color}, index) =>
                        <div className={"bingoSquare"} key={index} onClick={() => changeColor(item)}>
                            <div className="square" style={{backgroundColor: color}}>
                                {item && <p>{item}</p>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Bingo;

function shuffle(array: string[]) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
