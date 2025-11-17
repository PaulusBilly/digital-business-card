import CardContents from "./CardContents";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

export default function Card() {
  return (
    <div className="card">
      <CardHeader />
      <CardContents />
      <CardFooter />
    </div>
  );
}
