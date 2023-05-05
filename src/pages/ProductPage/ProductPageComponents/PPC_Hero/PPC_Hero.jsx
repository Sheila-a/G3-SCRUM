import PPC_right from "../../../../assets/PPC_right.png";
import PPC_left from "../../../../assets/PPC_left.png";
import design from "./style.module.css";

const PPC_Hero = () => {
  // const [
  //   // dogs,
  //   setDogs,
  // ] = useState([]);

  // useEffect(() => {
  //   fetch("../../../../data/data.js")
  //     .then((response) => response.json())
  //     .then((data) => setDogs(data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <div className={design.PPC_Hero_wrapper}>
      <div className={design.PPC_Hero_container}>
        <div className={design.PPC_Hero_left}>
          <img src={PPC_left} alt="" />
        </div>
        <div className={design.PPC_Hero_center}>
          <p className={design.p1}>Your favorites dogs</p>
          <p className={design.p2}>All in one place</p>
        </div>
        <div className={design.PPC_Hero_right}>
          <img src={PPC_right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PPC_Hero;
