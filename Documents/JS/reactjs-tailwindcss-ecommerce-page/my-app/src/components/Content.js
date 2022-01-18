import "../index.css";
import Slider from "../components/Slider/Slider";
import Info from "../components/Info/Info";


function Content() {
  return (
    <div className="flex content-center border-2 border-green-500">
        <Slider />
        <Info />
    </div>
  );
}

export default Content;