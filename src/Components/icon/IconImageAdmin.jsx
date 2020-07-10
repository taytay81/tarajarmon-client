import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/icon-image.css";

export default function IconImage({ clbk, image = "" }) {
  const fileInput = React.createRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <div className={"is-clickable icon-image"} title="change image">
      {image && <img src={image} alt="user image" />}
      <input
        ref={fileInput}
        type="file"
        className="is-hidden"
        onChange={clbk}
      />
      <FontAwesomeIcon
        onClick={handleClick}
        className="is-clickable fa-lg"
        icon={faCog}
      />
    </div>
  );
}
