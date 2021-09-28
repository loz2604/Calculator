import "./App.css";
import { useState } from "react";
import { evaluate } from "mathjs"

const App = () => {
    const [total, setTotal] = useState([0])
    let buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "AC", 0, "=", "/"]

    //     let buttons = [
    //     {val: 7, style:"num"},    
    //     {val: 8, style:"num"},    
    //     {val: 9, style:"num"},    
    //     {val: "+", style:"operator"},    
    //     {val: 4, style:"num"},    
    //     {val: 5, style:"num"},    
    //     {val: 6, style:"num"},    
    //     {val: "-", style:"operator"},    
    //     {val: 1, style:"num"},    
    //     {val: 2, style:"num"},    
    //     {val: 3, style:"num"},    
    //     {val: "*", style:"operator", alias: "x"},    
    //     {val: "AC", style:"operator"},    
    //     {val: 0, style:"clear"},    
    //     {val: "=", style:"operator"},    
    //     {val: "/", style:"operator", alias: "÷"},    

    // ]

    const handleClick = (val) => {
        let currentTotal = total
        if (total[0] === 0) {
            currentTotal.shift()
        }
        if (val === "AC") {
            setTotal([0])
        } else if (val === "=") {
            let sum = currentTotal.join("");
            let newSum = evaluate(sum);
            let display = parseFloat(newSum.toFixed(2))
            setTotal([display])
        } else {
            if (currentTotal.length >= 11) {
                return
            } else {
                currentTotal.push(val)
                setTotal([...currentTotal])
            }
        }

    }
    return (
        <div id="body">
            <div className="calculator">
                <div id="screen">
                    <h1 id="number">{total}</h1>
                </div>
                <div className="bottom">
                    <div id="numpad">
                        {buttons.map((item) => {
                            return <button id="num" onClick={() => handleClick(item)}>{item}</button>
                        })}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default App;