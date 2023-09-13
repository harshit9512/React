import Square from "./square";
import Result from "./Result";
import { useState } from "react"; // state is private to a component that defines it

let isPlayerOne = true;
let isGameOver = false;
let winner = null;

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    

    function clickHandler(i) {
        if(!isGameOver) {
            const nextSquares = squares.slice();
            if(nextSquares[i] == null){
                nextSquares[i] = isPlayerOne? "X" : "O";
                setSquares(nextSquares);
                isPlayerOne = !isPlayerOne;
                winner = findWinner(nextSquares);
                if(winner != null){
                    isGameOver = !isGameOver;
                    // alert('WIN!!!');
                    // console.log("Win");
                }
            } // this check will not re-render the board if the value for the clicked square is already set
        }
    }
    if (winner != null) {
        return <Result value = {winner}/>
    }
    return(
        <>  <p className = 'header'>Tic-Tac-Toe</p><br />    
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

function findWinner(squares) {
    const winCases = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]

    for (let index = 0; index < winCases.length; index++) {
        const [a,b,c] = winCases[index];
        if (squares[a]  === squares[b]  && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}