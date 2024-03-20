import React, {useEffect, useState} from 'react';
import classNames from "classnames/bind";
import Styles from "./SlideShow.model.scss";

const cx = classNames.bind(Styles);

function Slide({
    avt,
    name,
    contact,
    about,
    iconL,
    iconR
               }) {
    const [current, setCurrent] = useState(0);
    const [x, setX] = useState(0);
    const items = document.getElementsByClassName("item");

    const handleRightSlideShow = ()=> {
        if (current == items.length - 1) {
            setCurrent(0);
            setX(0);
        } else {
            setCurrent((prevCurrent) => prevCurrent + 1);
            setX((prevX) => prevX - 932);
        }
    }

    const handleLeftSlideShow = ()=> {
        if (current == 0) {
            setCurrent(items.length-1);
            setX(-932 * (items.length - 1));
        } else {
            setCurrent((prevCurrent) => prevCurrent - 1);
            setX((prevX) => prevX + 932);
        }
    }

    useEffect(() => {
        const intervalId = setInterval(handleRightSlideShow, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, [current]);



    return (
        <div className="slide-container">
            <div className="slide">
                <div
                    className="slide-items"
                    style={{
                        transform: `translateX(${x}px)`,
                    }}
                >
                    <div className="item">
                        <div className="item-avt">
                            <img src={avt} alt=""/>
                        </div>

                        <div className="item-content">
                            <span className="item-name">{name}</span>
                            <span className="item-contact">{contact}</span>
                            <span className="item-about">{about}</span>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-avt">
                            <img src={avt} alt=""/>
                        </div>

                        <div className="item-content">
                            <span className="item-name">{name}</span>
                            <span className="item-contact">{contact}</span>
                            <span className="item-about">{about}</span>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-avt">
                            <img src={avt} alt=""/>
                        </div>

                        <div className="item-content">
                            <span className="item-name">{name}</span>
                            <span className="item-contact">{contact}</span>
                            <span className="item-about">{about}</span>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item-avt">
                            <img src={avt} alt=""/>
                        </div>

                        <div className="item-content">
                            <span className="item-name">{name}</span>
                            <span className="item-contact">{contact}</span>
                            <span className="item-about">{about}</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="slide-indexs">
                <div className={`index ${(current==0)?'index-focus':''}`}></div>
                <div className={`index ${(current==1)?'index-focus':''}`}></div>
                <div className={`index ${(current==2)?'index-focus':''}`}></div>
                <div className={`index ${(current==3)?'index-focus':''}`}></div>
            </div>

            <div className="slide-btn">
                <div className="btn-hover" onClick={handleLeftSlideShow}>
                    <img src={iconL} alt=""/>
                </div>

                <div className="btn-hover" onClick={handleRightSlideShow}>
                    <img src={iconR} alt=""/>
                </div>

            </div>
        </div>
    );
}

export default Slide;