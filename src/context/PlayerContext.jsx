import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({children}) => {
    const [playerId,setPlayerId] = useState("");

    const Login = (playerId) => {
        setPlayerId(playerId);
    }

    const Logout = () => {
        setPlayerId("");
    }

    return (
        <PlayerContext.Provider value={{playerId,Login,Logout}}>
            {children}
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => {
    return useContext(PlayerContext);
}