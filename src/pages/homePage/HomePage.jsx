import styles from "./homePage.module.css";
import dog1 from "../../assets/images/dog1.png";
import dog2 from "../../assets/images/dog2.png";
import dog3 from "../../assets/images/dog3.png";
import dog4 from "../../assets/images/dog4.png";
import dog9 from "../../assets/images/dog9.png";
import dog10 from "../../assets/images/dog10.png";
import dog11 from "../../assets/images/dog11.png";
import dog from "../../assets/images/dog.png";
import dachshund from "../../assets/images/Dachshund.png";
import irish from "../../assets/images/Irishsetter.png";
import poodle from "../../assets/images/poodle.png";
import dog12 from "../../assets/images/dog12.png";
import saver from "../../assets/images/saver.png";
import comingsoon from "../../assets/images/comingsoon.png";
import { AiOutlineRight } from "react-icons/ai";
import SeeAll from "./SeeAll";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.buy} style={{ backgroundImage: `url(${dog1})` }}>
        <div className={styles.align}>
          <h1 className={styles.h}>Dogs Make Our Lives Better.</h1>
          <p className={styles.p}>Let Us Help you Find Your New Best Friend.</p>
          <Link to="/product-page">
            <button className={styles.shop}>Shop Now</button>
          </Link>
        </div>
      </div>

      <div className={styles.d}>
        <div
          className={styles.dog2}
          style={{ backgroundImage: `url(${dog2})` }}
        >
          <div className={styles.align2}>
            <p className={styles.p1}>
              Your one-stop destination for your favourite puppy.
            </p>
            <p className={styles.p2}>
              We provide you with quality and healthy puppies to keep you{" "}
            </p>
            <p>company and add fun to your everyday life.</p>
          </div>
        </div>
        <div
          className={styles.dog3}
          style={{ backgroundImage: `url(${dog3})` }}
        >
          <img src={comingsoon} alt="writeup" className={styles.coming}></img>
          <div className={styles.align3}>
            <p className={styles.p3}>Get 10% off our new furry puppy</p>
          </div>
        </div>
        <div
          className={styles.dog3}
          style={{ backgroundImage: `url(${dog4})` }}
        >
          <img src={comingsoon} alt="writeup"></img>
          <div className={styles.align3}>
            <p className={styles.p3}>Get 10% off our new furry puppy</p>
          </div>
        </div>
      </div>

      <div className={styles.best}>
        <h2 className={styles.besth}>Shop Bestsellers</h2>
        <div className={styles.seeall}>
          <Link to="/product-page">
            <p className={styles.seeallp}>See all</p>
          </Link>
          <AiOutlineRight className={styles.seeallp} />
        </div>
      </div>
      <SeeAll />

      <div className={styles.best}>
        <h2 className={styles.besth}>Shop By Categories</h2>
        <div className={styles.seeall}>
          <Link to="/product-page">
            <p className={styles.seeallp}>See all</p>
          </Link>
          <AiOutlineRight className={styles.seeallp} />
        </div>
      </div>
      <div className={styles.align4}>
        <div
          className={styles.dog5}
          style={{ backgroundImage: `url(${dog9})` }}
        >
          <div className={styles.d1}>Tibetan Terrier</div>
        </div>
        <div
          className={styles.dog5}
          style={{ backgroundImage: `url(${dog10})` }}
        >
          <div className={styles.d2}>Rottweiler</div>
        </div>
        <div
          className={styles.dog5}
          style={{ backgroundImage: `url(${dog11})` }}
        >
          <div className={styles.d1}>German Shepherd</div>
        </div>
        <div className={styles.dog5} style={{ backgroundImage: `url(${dog})` }}>
          <div className={styles.d2}>Bulldog</div>
        </div>
      </div>

      <div className={styles.best}>
        <h2 className={styles.besth}>New Breed Arrival</h2>
      </div>
      <div className={styles.align4}>
        <div
          className={styles.poodle}
          style={{ backgroundImage: `url(${poodle})` }}
        >
          <img src={comingsoon} alt="writeup" className={styles.coming}></img>
        </div>
        <div
          className={styles.poodle}
          style={{ backgroundImage: `url(${irish})` }}
        >
          <img src={comingsoon} alt="writeup" className={styles.coming}></img>
        </div>
        <div
          className={styles.poodle}
          style={{ backgroundImage: `url(${dachshund})` }}
        >
          <img src={comingsoon} alt="writeup" className={styles.coming}></img>
        </div>
      </div>

      <div className={styles.align5}>
        <img src={dog12}></img>
        <div className={styles.container}>
          <p>Our products are handpicked by our team of</p>
          <p>experts, so you can trust that everything you</p>
          <p>see on our website is of the highest </p>
          <p>quality</p>
          <button className={styles.btn}>Shop Now</button>
        </div>
      </div>

      <div className={styles.best}>
        <h2 className={styles.besth}>Trained For You</h2>
        <div className={styles.seeall}>
          <p className={styles.seeallp}>See all</p>
          <AiOutlineRight className={styles.seeallp} />
        </div>
      </div>
      <SeeAll />

      <div className={styles.align6}>
        <img src={saver} alt="saver" className={styles.align6}></img>
      </div>

      <div className={styles.best}>
        <h2 className={styles.besth}>Best Companionship</h2>
        <div className={styles.seeall}>
          <Link to="/product-page">
            <p className={styles.seeallp}>See all</p>
          </Link>
          <AiOutlineRight className={styles.seeallp} />
        </div>
      </div>
      <SeeAll />
    </div>
  );
};

export default HomePage;
