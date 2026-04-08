import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function TheMonthsarryLetter() {
    const navigate = useNavigate();
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
        setPopupImage(imageSrc);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <div className="app">
            <div className="paper">
                <div className="letter">
                    <p>Hi, happy monthsarry!</p>
                    <p>
                        ‎Hi, baby I just wanna say
                        Happy Monthsarry to us. I can't believe we've already come this far. You know how much. I love you, through 
                        ups and downs I'm always    here po I'm so grateful 
                        ikaw yung napili ko. Like crush lang kita and the next thing ik crush mo na 
                        rin ako?!?!? ta's nag papapansin kana sakin hehe. You've become someone important to me na po. I 
                        honestly can't imagine my life without you
                    </p>
                    <p>
                        ‎once more,happy monthsarry to uus.Sory If I'm not there.  Babawi po ako sa susunod 
                        na monthsarry. I hope we can stay together forever.
                        We fight,We fix, We stay hehe.  Iloveyouusoomuchhj
                    </p>
                    <p style={{ textAlign: "right" }}>with love,</p>
                    <p style={{ textAlign: "right" }}>Eli</p>
                </div>
            </div>

            <div className="title">
                <p>needs more?</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/thanks-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">thanks</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sorry-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sorry</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/happy-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">happy</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sad-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sad</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheMonthsarryLetter;
