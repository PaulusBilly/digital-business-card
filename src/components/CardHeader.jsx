import profilePic from "../assets/141384133.jpeg";

export default function CardHeader() {
  return (
    <img
      className="profile-picture"
      src={profilePic}
      alt="Profile Picture"
    ></img>
  );
}
