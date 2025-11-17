import twitterIcon from "../assets/Twitter Icon.svg";
import facebookIcon from "../assets/Facebook Icon.svg";
import instagramIcon from "../assets/Instagram Icon.svg";
import githubIcon from "../assets/Github Icon.svg";

export default function CardFooter() {
  return (
    <footer>
      <img src={twitterIcon} alt="Twitter"></img>
      <img src={facebookIcon} alt="Facebook"></img>
      <img src={instagramIcon} alt="Instagram"></img>
      <img src={githubIcon} alt="GitHub"></img>
    </footer>
  );
}
