import React from "react";

export default function TTTDialogueBox({dialogue, dialogueLength, dialogueState, setDialogueState, setGreyOut, dialogueFinal, questionAnswered, currentScene, setCurrentScene, setShowInfo}){

    const handleClick = () => {
        if(questionAnswered){
            setCurrentScene(currentScene + 1)
            setShowInfo(false)
        }
        setDialogueState(dialogueState + 1)
        console.log(dialogueState)
        if(dialogueState == dialogueLength-2){
            console.log("set false")
            setGreyOut(false)
        }
    }
    console.log(dialogue)

     return (
        <div style={{
            border: '8px solid #CE6A85',
            borderRadius: 10,
            width: 800,
            height: 200,
            backgroundColor: '#577590',
            position: 'absolute',
            top: 750-100-5,
            left: 1500/2-800/2-5
        }}>    
            <div style={{ height: 140, display: 'flex', alignItems: 'center', padding: 30, maxWidth: 650}}>
                <p style={{ color: 'white', fontFamily: 'Roboto', fontSize: 20 }}>{questionAnswered ? dialogueFinal : dialogue}</p>
            </div>
            <img src="/TTTAncientGreece/right-long-solid.svg" onClick={handleClick} style={{
                    position: 'absolute',
                    left: 720,
                    top: 75,
                    width: 30,
                    padding: 10,
                    border: 'none',
                    borderRadius: '50%',
                    backgroundColor: '#127133'
                }}></img>
        </div>
     )
}
