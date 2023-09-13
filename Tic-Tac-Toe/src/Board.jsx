import Square from "./square";
import { useState } from "react";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function clickHandler(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares);
    }
    // state is private to a component that defines it
    return(
        <>
            <Square value = {squares[0]} onClick={() => clickHandler(0)}/>
            <Square value = {squares[1]} onClick={() => clickHandler(1)}/>
            <Square value = {squares[2]} onClick={() => clickHandler(2)}/><br/>
            <Square value = {squares[3]} onClick={() => clickHandler(3)}/>
            <Square value = {squares[4]} onClick={() => clickHandler(4)}/>
            <Square value = {squares[5]} onClick={() => clickHandler(5)}/><br/>
            <Square value = {squares[6]} onClick={() => clickHandler(6)}/>
            <Square value = {squares[7]} onClick={() => clickHandler(7)}/>
            <Square value = {squares[8]} onClick={() => clickHandler(8)}/>
        </>
    );
}