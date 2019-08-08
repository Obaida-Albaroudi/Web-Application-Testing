import React from "react";


function Dashboard({Strike, balls, foul, hit, Reset, StrikeClick, BallsClick, FoulClick, HitClick}){

    console.log("Dashboard", Strike)
    return(
        <div>
            <p >Strike:{Strike}</p>
            <p>Ball: {balls}</p>
            <p>Hit: {hit}</p>

            <button type="submit"  onClick={StrikeClick}>Striike</button>
            <button type="submit" onClick={BallsClick}>Balls</button>
            <button type="submit" onClick={FoulClick}>Foul</button>
            <button type="submit" onClick={HitClick}>Hits</button>

        </div>
    )
}

export default Dashboard;