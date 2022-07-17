import LoadingScreen from "./LoadingScreen";
import { useLocation } from "react-router-dom";
import wall1 from "../wall1.jpg"
import wall2 from "../wall2.jpg"
import { useState, useEffect } from "react";

function TimerPage(props) {
    let [loading, setLoading] = useState(true);
    const location = useLocation();
    let mainHeading = location.state.obj.mainHeading;
    let secondHeading = location.state.obj.secondHeading;
    let subText = location.state.obj.subText;
    let buttonText = location.state.obj.buttonText;
    let date = location.state.obj.date;
    let wallpaper = location.state.obj.wallpaper;

    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMins] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [flag, setFlag] = useState(false)
    let countDownDate = new Date(date).getTime();
// eslint-disable-next-line
    useEffect(() => {
        let remaining = 0;
        let timer = setTimeout(() => {
            let now = new Date().getTime();
            remaining = countDownDate - now;
            let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
            setDays(days)
            setHours(hours)
            setMins(minutes)
            setSeconds(seconds)
            console.log(days, hours, minutes, seconds)

        }, 1000)

        if (seconds <= -1 || seconds === "-") {
            clearTimeout(timer)
            console.log(`done`)
            setDays("-")
            setHours("-")
            setMins("-")
            setSeconds("-")
            setFlag(true)
        }

    })


    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)

    }, [])
    // eslint-disable-next-line
    if (flag === true) {
        return (
            <div className="tm-body" style={{ backgroundImage: `url(${wall1})` }}>

                <div className="tm-container">
                    
                    <div className="tm-subText">Time ran out!</div>
                    <div className="tm-date-container">

                        <div className="block-container">
                            <div className="block">{days}</div>
                            <div className="date">Days</div>
                        </div>
                        <div className="block-container">
                            <div className="block">{hours}</div>
                            <div className="date">Hours</div>
                        </div>
                        <div className="block-container">
                            <div className="block">{minutes}</div>
                            <div className="date">Minutes</div>
                        </div>
                        <div className="block-container">
                            <div className="block">{seconds}</div>
                            <div className="date">Seconds</div>
                        </div>
                    </div>
                    <button  className="tm-button" style={{backgroundColor: "grey"}}>{buttonText}</button>
                </div>

            </div>
        )
    }
    // eslint-disable-next-line
    else if (wallpaper == 1 && loading === false) {
        return (
            <div className="tm-body" style={{ backgroundImage: `url(${wall1})` }}>

                <div className="tm-container">
                    <div className="tm-mainHeading">{mainHeading}</div>
                    <div className="tm-secondHeading">{secondHeading}</div>
                    <div className="tm-subText">{subText}</div>
                    <div className="tm-date-container">

                        <div className="block-container">
                            <div className="block">{days}</div>
                            <div className="date">Days</div>
                        </div>
                        <div className="block-container">
                            <div className="block">{hours}</div>
                            <div className="date">Hours</div>
                        </div>
                        <div className="block-container">
                            <div className="block">{minutes}</div>
                            <div className="date">Minutes</div>
                        </div>
                        <div className="block-container">
                            <div className="block">{seconds}</div>
                            <div className="date">Seconds</div>
                        </div>
                    </div>
                    <button className="tm-button">{buttonText}</button>
                </div>

            </div>

        )
    } else if (loading === false) {
        return (
            <div className="tm-body" style={{ backgroundImage: `url(${wall2})` }}>

                <div className="tm-container">
                    <div className="tm-mainHeading">{mainHeading}</div>
                    <div className="tm-secondHeading">{secondHeading}</div>
                    <div className="tm-subText">{subText}</div>
                    <div className="tm-date-container">

                        <div className="block-container">
                            <div className="block">{days}</div>
                            <div className="date">Days</div>
                        </div>
                        <div className="block-container">
                            <div className="block">{hours}</div>
                            <div className="date">Hours</div>
                        </div>
                        <div className="block-container">
                            <div className="block">{minutes}</div>
                            <div className="date">Minutes</div>
                        </div>
                        <div className="block-container">
                            <div className="block">{seconds}</div>
                            <div className="date">Seconds</div>
                        </div>
                    </div>
                    <button className="tm-button">{buttonText}</button>
                </div>

            </div>


        )
    } else {
        return (<div className="form-body">
            <LoadingScreen />
        </div>)
    }

}

export default TimerPage;