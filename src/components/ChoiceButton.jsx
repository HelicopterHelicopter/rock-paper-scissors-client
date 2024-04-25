import React from "react";

const ChoiceButton = ({text}) => {
    const choiceMade = () => {
        console.log(text);
    }
    return (
        <button onClick={choiceMade} className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">{text}</button>
    );
}

export default ChoiceButton;