import React, { useState } from 'react';
import arrow_back from './arrow_back-24px.svg';
import arrow_forward from './arrow_forward-24px.svg';


const images = {
    0: {
        img1: "https://images.unsplash.com/photo-1587304657183-36f31bb9504c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
        img2: "https://images.unsplash.com/photo-1573740854296-a3cddaf62b20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1200",
        title: "Mountains and forests",
        desc: "There are all kinds of trips here, dont worry!"
    },
    1: {
        img1: "https://images.unsplash.com/photo-1545034556-0ca3ca75edcd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
        img2: "https://images.unsplash.com/photo-1594477778709-1d685f1a42ee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1200",
        title: "Beaches and castles",
        desc: "Here you can relax freely and in a majestic way!"
    },
    2: {
        img1: "https://images.unsplash.com/photo-1579160709170-e3e6746fcbfd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600",
        img2: "https://images.unsplash.com/photo-1583132899473-9969296c5698?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1200",
        title: "Rivers and deserts",
        desc: "Why choose one when you can have all of them!"
    }
}

function LandingSection() {

    const [img, setImg] = useState(0);

    const handlePreviousSlide = () => {
        console.log('handlePreviousSlide');
        if (img > 0) {
            setImg(img - 1);
        } else {
            return false;
        }
    }

    const handleNextSlide = () => {
        if (img < (Object.keys(images).length - 1)) {
            setImg(img + 1);
        } else {
            return false;
        }
    }

    return (
        <div className="container" id="landing-section">
            <div className="row">
                <div className="col-5">
                    <h1>One click for<br />Vacation?</h1>
                    <div id="big-search-box">
                        <input type="text" name="destination" placeholder="Find your destination" />
                        <button type="button" className="btn register-button">Find Out</button>
                    </div>

                    <div style={{ marginTop: 180, marginBottom:40 }}>
                        <h3>{images[img].title}</h3>
                        <p>{images[img].desc}</p>
                    </div>

                    <div className="arrow-buttons">
                        <div onClick={handlePreviousSlide} className={"arrow-button " + (img === 0 ? 'disabled' : '')}>
                            <img src={arrow_back}/>
                        </div>
                        <div onClick={handleNextSlide} className={"arrow-button " + (img === (Object.keys(images).length - 1) ? 'disabled' : '')}>
                            <img src={arrow_forward}/>
                        </div>
                    </div>

                </div>
                <div className="col-4">
                    <div id="img-1" style={{ backgroundImage: 'url(' + images[img].img1 + ')' }}></div>
                </div>
                <div className="col-3">
                    <div id="img-2" style={{ backgroundImage: 'url(' + images[img].img2 + ')' }}></div>
                </div>
            </div>
        </div>
    )
}

export default LandingSection;