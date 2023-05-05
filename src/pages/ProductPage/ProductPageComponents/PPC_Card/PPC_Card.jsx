import design from "./style.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PPC_Card = ({ item }) => {
  return (
    <div className={design.PPC_Card_container}>
      <Link to={`/product-details/${item.itemCode}`}>
        <img src={item.img} alt="" className={design.PPC_Card_img} />
        <div className={design.PPC_Card_lower}>
          <h4>NGN {item.price}</h4>
          <h3>{item.name}</h3>
          <button
            className={design.PPC_Card_btn}
            // onClick={() => onBuyNowClick(dog)}
          >
            <Link to="/checkout">
              Buy now <span className="fas fa-chevron-right"></span>
            </Link>
          </button>
        </div>{" "}
      </Link>
    </div>
  );
};

PPC_Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PPC_Card;
// const PPC_Card = ({ name, price, img, dog, onBuyNowClick }) => {
//   return (
//     <div className={design.PPC_Card_container}>
//       <Link to="/product-details">
//         <img src={img} alt="" className={design.PPC_Card_img} />
//         <div className={design.PPC_Card_lower}>
//           <h4>NGN {price}</h4>
//           <h3>{name}</h3>
//           <button
//             className={design.PPC_Card_btn}
//             onClick={() => onBuyNowClick(dog)}
//           >
//             <Link to="/checkout">
//               Buy now <span className="fas fa-chevron-right"></span>
//             </Link>
//           </button>
//         </div>{" "}
//       </Link>
//     </div>
//   );
// };

// PPC_Card.propTypes = {
//   dog: PropTypes.object.isRequired,
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   onBuyNowClick: PropTypes.func.isRequired,
// };

// export default PPC_Card;
