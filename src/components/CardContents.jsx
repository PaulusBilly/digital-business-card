import mailIcon from "../assets/Mail.svg";
import linkedinIcon from "../assets/linkedin.svg";

export default function CardContents() {
  return (
    <main>
      <div className="name-section">
        <h1>pBilly</h1>
        <h2>Frontend Developer</h2>
        <p>pbilly.website</p>
      </div>
      <div className="button-section">
        <a className="email-btn">
          <img src={mailIcon} alt="email"></img>
          <span>Email</span>
        </a>

        <a className="linkedin-btn">
          <img src={linkedinIcon} alt="linkedin"></img>
          <span>Linkedin</span>
        </a>
      </div>
      <div className="profile-details">
        <div className="about">
          <h3>About</h3>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="interest">
          <h3>Interest</h3>
          <p>
            Watching movies especially foreign movies like french new waves,
            Videogames, Badminton, Watching chefs cook, Art, Pop culture, Music
          </p>
        </div>
      </div>
    </main>
  );
}
