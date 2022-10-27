import {useState} from 'react'
import Confirmation from "./Confirmation.js"

const Items = () => {
    const [item, setItem] = useState("Tea")
    const [temp, setTemp] = useState("Cold")
    const [icePercent, setIcePercent] = useState(20)
    const [milk, setMilk] = useState(false)
    const [size, setSize] = useState("")
    const [cookie, setCookie] = useState(0)
    const [bag, setBag] = useState(0)
    function itemClicked() {
        item === "Tea" ? setItem("Coffee") : setItem("Tea")
    }
    function tempClicked() {
        temp === "Cold" ? setTemp("Hot") : setTemp("Cold")
    }
    return (
        <fieldset>
            <legend>
                Options
            </legend>
            <button onClick={() => itemClicked()}
                    className={item === "Tea" ? "teaButton" : "coffeeButton"}>{item}
            </button>
            <hr className="solid"/>
            Select a size!
            <br/>
            <input type="radio" name="size" id="small" onClick={() => setSize("small")} checked/>
            <label htmlFor="small"> Small - $5 </label>
            <input type="radio" name="size" id="medium" onClick={() => setSize("medium")}/>
            <label htmlFor="medium"> Medium - $6 </label>
            <input type="radio" name="size" id="large" onClick={() => setSize("large")}/>
            <label htmlFor="large"> Large - $7 </label>
            <hr className="solid"/>
            <button onClick={() => tempClicked()}
                    className={temp === "Cold" ? "coldButton" : "hotButton"}>{temp}
            </button>
            <hr className="solid"/>
            Choose ice percentage!
            <br/>
            <input className={"iceSlider"}
                   type="range"
                   min={0}
                   max={100}
                   defaultValue={20}
                   step={10}
                   disabled={temp === "Hot"}
                   onChange={(event) => setIcePercent(event.target.valueAsNumber)}>
            </input>
            {icePercent}%
            <br/>
            Default is 20% when cold
            <hr className="solid"/>
            Would you like to add milk?
            <input type="checkbox" onClick={() => setMilk(!milk)}/>
            <hr className="solid"/>
            <label htmlFor="cookies">How many Cookies? ($2/ea.)</label>
            <br/>
            <input type="number"
                   min={0}
                   id="cookies"
                   onChange={(event) => setCookie(event.target.valueAsNumber)}/>
            <hr className="solid"/>
            <label htmlFor="bags">How many paper bags? ($0.15/ea.)</label>
            <br/>
            <input type="number"
                   min={0}
                   id="bags"
                   onChange={(event) => setBag(event.target.valueAsNumber)}/>
            <hr className="solid"/>
            <Confirmation  item={item} size={size} temp={temp} icePercent={icePercent} milk={milk} cookie={cookie} bag={bag}/>
        </fieldset>
    )
}
export default Items