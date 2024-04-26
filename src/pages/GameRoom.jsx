import React, { useState } from "react";
import ChoiceButton from "../components/ChoiceButton";
import { usePlayer } from "../context/PlayerContext";
import { useParams } from "react-router";
import rock from "../assets/rock.jpg";
import scissors from "../assets/scissors.jpg";
import paper from "../assets/paper.jpg";

const GameRoom = ({ socket }) => {
    const [myChoice,setMyChoice] = useState("none");
    const [opponentChoice,setOpponentChoice] = useState("none");
    const [resultText,setResultText] = useState("Waiting for your move");
    let opponentPlayerId = "";

    const {playerId,Login,Logout} = usePlayer();

    const {roomId} = useParams();

    socket.on("playerJoined",(room)=>{
        console.log(room);
        if(playerId===room.player1.id){
            opponentPlayerId = room.player2.id;
        }else{
            opponentPlayerId = room.player1.id;
        }
        console.log(opponentPlayerId);
    });

    socket.on("result",(winner,room)=>{
        setResultText(winner);
        if(room.player1.id===playerId){
            setOpponentChoice(room.player2.choice);
        }else{
            setOpponentChoice(room.player1.choice);
        }
    });

    const choiceMade = (choice) => {
        socket.emit("choiceMade",roomId,playerId,choice);
        setMyChoice(choice);
    }
    return (
        <div className="flex flex-col">
            <div className="flex w-100 justify-center gap-5">
                <div>
                    <h3>Your choice</h3>
                    <img src={myChoice==="scissors"?scissors:myChoice==="paper"?paper:rock} height="200px" width="200px" />
                </div>
                <div>
                    <h3>Opponent's choice</h3>
                    <img src={opponentChoice==="scissors"?scissors:opponentChoice==="paper"?paper:rock} height="200px" width="200px" />
                </div>
            </div>
            <div>
                <h2>{resultText}</h2>
            </div>
            <div className="flex justify-center gap-10 p-4">
                <ChoiceButton callback={()=>choiceMade("rock")} text={"Rock"}/>
                <ChoiceButton callback={()=>choiceMade("paper")} text={"Paper"}/>
                <ChoiceButton callback={()=>choiceMade("scissors")} text={"Scissors"}/>
            </div>
        </div>
    );
}

export default GameRoom;