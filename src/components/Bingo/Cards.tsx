import "./Cards.css"
import React, {useState} from "react";

const white = "rgba(255,255,255, .6)"
const green = "rgba(50,205,50, .3)"

const Cards: React.FC = () => {
    const loadOrCreateCards = () => {
        const existingCards = localStorage.getItem("cards")
        if (existingCards) {
            return JSON.parse(existingCards)
        } else {
            return createCards()
        }
    }

    const [itemsWithColor, setItemsWithColor] = useState<{item: string, color: string}[]>(loadOrCreateCards())

    const changeColor = (itemString: string) => {
        const newArray = itemsWithColor.map((item) => (
            item?.item === itemString ? {item: item.item, color: item?.color !== green ? green : white} : item
        ))
        setItemsWithColor(newArray)
        localStorage.setItem("cards", JSON.stringify(newArray))
    }

    return (
        <div className="cards">
            <div className="mgp-cards">
                {itemsWithColor?.map(({item, color}, index) =>
                    <div key={index} onClick={() => changeColor(item)}>
                        <div className="square" style={{backgroundColor: color}}>
                            <p>{index === 12 ? "FREE" : item}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cards;

export function createCards() {
    const array = [
        "FAKE RAIN", "SYNCH-RONISED DANCE", "SINGER WINKS TO CAMERA", "FEATHERS", "PRESENTER OUTFIT CHANGE",
        "SOMEONE WEARING A HAT", "THANKING HOST FOR THE EVENING", "SNAZZY MASK", "SINGING OUT OF TONE", "SOMETHING GOES WRONG",
        "FIRE", "MIDDLE FINGER", "MID-SONG COSTUME CHANGE", "A SONG ABOUT LOVE", "WIND MACHINE",
        "CLAPPY BEAT", "A SONG ABOUT PEACE", "ANYBODY RAPS", "FAKE INSTRUMENT PLAYING", "REVEALING DRESS",
        "FLAMES", "CAMERA CIRCLES 360", "CRAWLING OR SLOW-MO", "UNIBROWN", "SMOKE MACHINE"
    ]
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    const newCards = array.map((item) => ({item: item, color: white}))
    localStorage.setItem("cards", JSON.stringify(newCards))

    window.location.reload();

    return newCards
}
