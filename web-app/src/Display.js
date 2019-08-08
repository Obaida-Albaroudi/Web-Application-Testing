import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard.js"

function Display(){
    const [strike, SetStrike] = useState(0);
    const [balls, SetBalls] = useState(0);
    const [foul, SetFoul] = useState(0);
    const [hit, SetHit] = useState(0);
    const [seconds, SetSeconds] = useState(0);

  

   let Reset = ()=>{
        SetStrike(0);
        SetBalls(0);
        SetFoul(0);
        SetHit("")

    };
    
   let StrikeClick = () =>{
        if(strike >= 3){
            Reset()
        }else{
            SetStrike(strike+1)
        }
    };

    let BallsClick = () =>{
        if(balls >= 4){
            Reset()
        }else{
            SetBalls(balls+1)
        }
    };

    let FoulClick = () =>{
        if(strike === 0){
            SetStrike(strike+1)
        }
        else if(strike === 1){
            SetStrike(strike+1)
        }
    };

    let HitClick = () =>{
        SetHit(hit+1)
    };


    return(
        <div>
            <Dashboard Strike={strike} balls={balls} foul={foul} hit={hit} Reset={Reset} StrikeClick={StrikeClick} BallsClick={BallsClick} FoulClick={FoulClick} HitClick={HitClick}  />
        </div>
    )
}

export default Display;
