import { useState } from "react"

let mark = ''
export default function Square() {
    const [sign,setSign] = useState(true)
    function clickHandler() {
        mark = sign ? 'X' : 'O'; // here sign should be changed by something which signifies state of the board for 
        if (sign) {
            setSign(!sign) 
        }
    }
    return (
        <>
            <button className="square" onClick={clickHandler}>{mark}</button>
        </>
    )
}