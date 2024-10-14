
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faFaceSmile,faFaceSmileWink } from "@fortawesome/free-solid-svg-icons"; // Import the icon you need
import { faSmile, } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

function MyComponent() {
  return (
    <div>
      <h1>
        Welcome to My Website <FontAwesomeIcon icon={faCoffee} />
      </h1>
      <FontAwesomeIcon icon={faSmile} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faFacebookMessenger} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faFaceSmile} />
      <FontAwesomeIcon icon={faYoutube} color="red" size="8x"/>
      <FontAwesomeIcon icon={faFaceSmileWink} style={{ color:"green", height:"200px",}}/>
      <FontAwesomeIcon icon={faFaceSmileWink} beatFade size="5x" style={{color: "#ffd43b",}} />
    </div>
  );
}

export default MyComponent;
