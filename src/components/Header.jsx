import imgsrc from "../assets/react-core-concepts.png";
const arr = ['Fundamental','Crucial','Core'];
function getRandomIdx(max){
  return Math.floor(Math.random() * (max+1));
}
export default function Header() {
  return (
    <header>
      <img src={imgsrc} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {arr[getRandomIdx(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
