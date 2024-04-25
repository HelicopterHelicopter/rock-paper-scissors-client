import React, { useState } from "react";
import ChoiceButton from "../components/ChoiceButton";

const GameRoom = ({ socket }) => {
    const [myChoice,setMyChoice] = useState("none");
    const [opponentChoice,setOpponentChoice] = useState("none");
    const [resultText,setResultText] = useState("Waiting for your move");

    return (
        <div className="flex flex-col">
            <div className="flex w-100 justify-center gap-5">
                <div>
                    <h3>Your choice</h3>
                    <img src="rock.jpg" height="200px" width="200px" />
                </div>
                <div>
                    <h3>Opponent's choice</h3>
                    <img src="rock.jpg" height="200px" width="200px" />
                </div>
            </div>
            <div>
                <h2>{resultText}</h2>
            </div>
            <div className="flex justify-center gap-10 p-4">
                <ChoiceButton socket={socket} text={"Rock"}/>
                <ChoiceButton text={"Paper"}/>
                <ChoiceButton text={"Scissors"}/>
            </div>
        </div>
    );
}

export default GameRoom;