import { useState } from "react";
import design from "./style.module.css";
import { Link, useParams } from "react-router-dom";
import DogData from "../../../../data/data";
// import PropTypes from "prop-types";

const PDC_Hero = () => {
  const [isRushTime, setIsRushTime] = useState(false);

  const handleRushTimeChange = (event) => {
    setIsRushTime(event.target.checked);
  };

  const { itemCode } = useParams();

  // Find the selected product from the data
  const selectedProduct = DogData.flatMap((category) => category.items).find(
    (item) => item.itemCode === itemCode
  );

  return (
    <div className={design.PDC_Hero_container}>
      <h1>Product Description</h1>
      <div className={design.PDC_Hero}>
        <img src={selectedProduct.img} alt="" className={design.PDC_Hero_img} />
        <div className={design.PDC_Hero_inner}>
          <div>
            {" "}
            <h2 className={design.PDC_Hero_inner_title}>
              {selectedProduct.name}
            </h2>
            <p>{selectedProduct.review}</p>
          </div>
          <h2 className={design.PDC_Hero_inner_price}>
            NGN {selectedProduct.price}
          </h2>
          <div className={design.PDC_Hero_inner_details}>
            <p>
              Processing time: <span>20-22 Days</span>
            </p>
            <p>
              Shipping time: <span>5-10 Days</span>
            </p>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={isRushTime}
                onChange={handleRushTimeChange}
              />
              Rush Time: <span> 10-15 Days [Plus NGN 3,000]</span>
            </label>
            <br />
          </div>
          <Link to="">
            <button className={design.PDC_Hero_btn}>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// PDC_Hero.propTypes = {
//   src: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

export default PDC_Hero;
