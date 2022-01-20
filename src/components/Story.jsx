import React, {useState} from "react";
import Excercise from "./Excercise";
import EmptyHeart from "../assets/img/EmptyHeart.png";
import Heart from "../assets/img/Heart.png";
import NominisLogo from "../assets/img/NominisTextLogo.png";
import ProfilePic from "../assets/img/ProfilePic.png";
import muteButton from "../assets/img/muteButton.png"

function Story(props) {

  const [muted, setMuted] = useState(false)
  return (
    <div className="w-100 padding">
      <div className="row justify-content-sb">
        <div className="col-10 col-md-6 pr-0">
          <div className="row">
            <div className="col-3 col-lg-6 storyInfoContainer">
              <div className="storyInfo">
                <h4>{props.title}</h4>
                <h5>{props.episode}</h5>
              </div>
            </div>
            <div className="col-6 nominisLogo d-flex">
              <img src={NominisLogo} className="img-85" alt="" />
            </div>
            <div className="col d-flex hearts">
              <div className="row p-2 mx-0">
                <div className="col px-0">
                  <img src={EmptyHeart} className="img-85 heart" alt="" />
                </div>
                <div className="col px-0">
                  <img src={Heart} className="img-85 heart" alt="" />
                </div>
                <div className="col px-0">
                  <img src={Heart} className="img-85 heart" alt="" />
                </div>
                <div className="col px-0">
                  <img src={Heart} className="img-85 heart" alt="" />
                </div>
                <div className="col px-0">
                  <img src={Heart} className="img-85 heart" alt="" />
                </div>
              </div>
            </div>
            <div className="col-2 d-flex profilePicContainer">
              <img src={ProfilePic} className="img-65 img-rounded shadow" alt="" />
            </div>
          </div>
        </div>
        <div className="col-2 col-md-1 d-flex">
          <img src={muteButton} className="img-85 mute-btn" alt="" />
        </div>
      </div>
      <div className="row mx-0 d-flex">
        <Excercise title="Let´s Practice" text="Put the words in order to make a correct sentence." solution="I brush my teeth."/>
      </div>
    </div>
  );
}

export default Story;
