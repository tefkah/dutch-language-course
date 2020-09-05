import React from "react";
import {SoundFilled} from "@ant-design/icons/lib";
import {Button} from "antd";




const SoundBox = ({antwoord, url, key})  => {
  /*let filename = "Nl-" + antwoord + ".ogg";
  let url = "https://upload.wikimedia.org/wikipedia/commons/" + md5(filename).substring(0,1) + "/" + md5(filename).substring(0,2) + "/" + filename;
  console.log(url); */
  let audio = new Audio(url);
  const start = () => {
    audio.play()
  }
  return (
    <div className="soundBox">
      <Button type="primary" shape="circle" className="audio-button"
              onClick={start}>
        <SoundFilled/>
      </Button>
    </div>
  );


}

export default SoundBox;