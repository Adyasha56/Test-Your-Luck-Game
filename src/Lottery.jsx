import { useState } from "react";
import "./Lottery.css";
import { genTicket,sum } from "./helper.js";

export default function Lottery() {
    let [ticket , setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genTicket(3));
    }

    return (
        <div>
            <h1 class="heading">
                <span>T</span><span>E</span><span>S</span><span>T</span>
                <span class="space"></span>
                <span>Y</span><span>O</span><span>U</span><span>R</span>
                <span class="space"></span>
                <span>L</span><span>U</span><span>C</span><span>K</span>
            </h1>


            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br/>
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning && "Whooo hoo!!You won" }</h3>
        </div>
    );
}