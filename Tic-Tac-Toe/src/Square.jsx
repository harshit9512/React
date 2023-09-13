import { useState } from "react"

let mark = ''
export default function Square() {
    const [sign,setSign] = useState(true)
    function clickHandler() {
        setSign(!sign)
        mark = sign ? 'X' : 'O';
    }
    return (
        <>
            <button className="square" onClick={clickHandler}>{mark}</button>
        </>
    )
}