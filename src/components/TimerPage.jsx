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
    console.log(wallpaper);



    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)

    }, [])
// eslint-disable-next-line
    if (wallpaper == 1 && loading === false) {
        return (
            <div className="tm-body" style={{ backgroundImage: `url(${wall1})` }}>

                <div className="tm-container">
                    <div className="tm-mainHeading">{mainHeading}</div>
                    <div className="tm-secondHeading">{secondHeading}</div>
                    <div className="tm-subText">{subText}</div>
                    <div className="tm-date">{date}</div>
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
                    <div className="tm-date">{date}</div>
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