import { useState } from "react";
import wall1 from "../wall1.jpg"
import wall2 from "../wall2.jpg"
import { useNavigate } from 'react-router-dom';


function App(props) {
    const navigate = useNavigate();

    let [mainHeading, setMainHeading] = useState('');
    let [secondHeading, setSecondHeading] = useState('');
    let [subText, setSubText] = useState('');
    let [buttonText, setButtonText] = useState('');
    let [date, setDate] = useState('');
    let [wallpaper, setWallpaper] = useState(1);
    let [obj, setObj] = useState({});

    let handleSubmit = event => {
        event.preventDefault();

        obj["mainHeading"] = mainHeading;
        obj["secondHeading"] = secondHeading;
        obj["subText"] = subText;
        obj["buttonText"] = buttonText;
        obj["date"] = date;
        obj["wallpaper"] = wallpaper;
        setObj(obj)

        navigate('./TimerPage', { state: { "obj": obj } });
    }

    return (

        <>

            <div className="form-body">
                <div className="form-container">
                    <div className="header">Build your Timer Page</div>
                    <form className="form" onSubmit={handleSubmit}>
                        <label className="label" htmlFor="headline">Main Headline</label>
                        <input className="input" placeholder="" name="headline" type="text" onChange={event => setMainHeading(event.target.value)} value={mainHeading} required />

                        <label className="label" htmlFor="second-headline">Secondary Headline</label>
                        <input className="input" placeholder="" name="second-headline" type="text" onChange={event => setSecondHeading(event.target.value)} value={secondHeading} required />

                        <label className="label" htmlFor="subtext">Subtext</label>
                        <input className="input" placeholder="" name="subtext" type="text" onChange={event => setSubText(event.target.value)} value={subText} required />

                        <label className="label" htmlFor="button-text">Button Text</label>
                        <input className="input" placeholder="" name="button-text" type="text" onChange={event => setButtonText(event.target.value)} value={buttonText} required />

                        <input type="datetime-local" className="timer"
                            name="timer"
                            min="2022-07-13T00:00" max="2022-12-31T00:00" onChange={event => setDate(event.target.value)} value={date} required />

                        <div className="wallpaper-selector">
                            <div className="wallpaper-container" style={{
                                border: wallpaper === 1 ? '4px solid #3474f3' : 'none'
                            }}>
                                <img src={wall1} alt="" onClick={(e) => {
                                    setWallpaper(1);
                                }} className="wallpaper" />

                            </div>
                            <div className="wallpaper-container" style={{
                                border: wallpaper === 2 ? '4px solid #3474f3' : 'none'
                            }}>
                                <img src={wall2} alt="" className="wallpaper" onClick={() => {
                                    setWallpaper(2)
                                }} />

                            </div>



                        </div>

                        <button type="submit" id="start-button">Start Timer</button>


                    </form>

                </div>
            </div>
        </>



    )


}

export default App;

