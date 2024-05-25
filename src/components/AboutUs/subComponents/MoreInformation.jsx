import Team from "./Team.jsx";
import React from "react";
import 'w3-css/w3.css';
const MoreInformation=()=>
{
    return (
        <div>
        <div
            className="w3-container w3-row w3-center w3-padding-32"
            style={{backgroundColor: '#A10135', color: 'white'}}
        >
            <p style={{fontSize: '20px'}}>OUR MOTTO</p>
            <span style={{fontFamily: 'Garamond, serif', fontSize: '40px'}}>
                    Be someone's hero today!
                </span>
        </div>

    <Team/>

    <div
        className="w3-container w3-row w3-center w3-padding-48"
        style={{backgroundColor: '#A10135', color: 'white'}}
    >
        <div className="w3-quarter">
            <span className="w3-xxlarge">17+</span>
            <br/>Partners
        </div>
        <div className="w3-quarter">
            <span className="w3-xxlarge">89+</span>
            <br/>Successful donations
        </div>
        <div className="w3-quarter">
            <span className="w3-xxlarge">55+</span>
            <br/>Lives saved
        </div>
        <div className="w3-quarter">
            <span className="w3-xxlarge">150+</span>
            <br/>Users
        </div>
    </div>

    <div
        className="w3-container"
        id="contact"
        style={{
            padding: "128px 16px",
            backgroundColor: "#f0e7e7",
            color: "#000"  // Ensure text is visible
        }}
    >
        <h3 className="w3-center">OUR STORY</h3>
        <div style={{margin: "72px"}}>
            It all started during our computer science studies at university. We were always brainstorming ways
            to apply our coding skills to make a positive impact in our community. One day, over coffee and
            laptops, we hit upon the idea of creating a mobile app to streamline blood donation processes in
            Cluj.
            For weeks, we poured our hearts into this project. Late nights turned into early mornings as we
            conducted research, interviewed medical professionals, and fine-tuned every detail of the app. We
            encountered challenges along the way, from tricky coding bugs to navigating the complexities of the
            healthcare system, but our determination never wavered.
            Finally, the day arrived when we launched "B-Positive." It was incredible to see the impact almost
            immediately. People in Cluj started registering as blood donors through the app, receiving alerts
            when donations were urgently needed, and easily finding nearby donation centers.
            The response from our community was incredible. Within weeks, "B-Positive" gained thousands of
            downloads and significantly increased blood donations in Cluj. Local hospitals praised the app for
            its role in saving lives during emergencies.
            Today, we continue to improve and expand "B-Positive." Our journey is proof that when passionate
            individuals come together with a shared goal, there's no limit to what we can achieve. We're excited
            to keep pushing boundaries and harnessing technology for good, right here in Cluj and beyond.
        </div>
    </div>
</div>
)
    ;
}


export default MoreInformation;