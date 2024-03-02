'use client'
import { useState } from "react";
import "animate.css"
export default function Hero(){
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    const [currentTime, setCurretTime] = useState(time)
    const [currentDate, setCurretDate] = useState(date)

    const updateTime = () =>{
        let time = new Date().toLocaleTimeString();
        setCurretTime(time);
    }
    const updateDate = () =>{
        let date = new Date().toLocaleDateString();
        setCurretDate(date);
    }

    setInterval(updateTime, 1000)
    setInterval(updateDate, 86400)
    return(
        <div className="grid h-screen" id="main">
            <div className="place-self-center blur-sm opacity-35 lg:blur-md animate__animated animate__zoomIn">
                <img src="/logo.jpeg" alt="" className="w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]"/>
            </div>
            <div className="place-self-center absolute text-center font-semibold">
                <p className="text-2xl lg:text-4xl animate__animated animate__bounceIn">{currentTime}</p>
                <p className="text-xl lg:text-3xl animate__animated animate__bounceIn">{currentDate}</p>
            </div>
        </div>
    )
}