function strCombine(item, size, temp, icePercent, milk, cookie, bag) {
    let text = size
    if (temp === "Cold") {
        text += " iced "
        text = text + item + " with " + icePercent + "% ice and "
    } else {
        text += " hot "
        text = text + item + " with "
    }
    if (milk) {
        text += "some milk"
    } else {
        text += "no milk"
    }
    if (cookie !== 0) {
        text += "\n " + cookie + " cookie"
    }
    if (bag !== 0) {
        text += "\n " + bag + " bag"
    }
    let cost = costCalc(size, cookie, bag)
    cost = cost.toFixed(2)
    text += "\n your total is $" + cost
    return text.toLowerCase()
}

function costCalc(size, cookie, bag) {
    let cost = 0;
    if (size === "small") {
        cost += 5
    } else if (size === "medium") {
        cost += 6
    } else {
        cost += 7
    }
    return cost += (cookie * 2) + (bag * 0.15)
}

function pressed(text) {
    if (window.confirm(text) === true) {
        console.log("Pressed OK")
    } else {
        console.log("Pressed CANCEL")
    }
}

const Confirmation = ({ item, size, temp, icePercent, milk, cookie, bag}) => {
    return (
        <button className="confirmBtn" onClick={() => pressed(strCombine(item, size, temp, icePercent, milk, cookie, bag))}>Order</button>
    )
}

export default Confirmation