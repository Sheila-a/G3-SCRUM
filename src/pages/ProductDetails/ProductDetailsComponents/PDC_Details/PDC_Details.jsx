// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import design from "./style.module.css";
import PropTypes from "prop-types";
import DogData from "../../../../data/data";

const PDC_Details = () => {
  // const { itemCode } = useParams();
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   // Find the product in the DogData array with the matching itemCode
  //   const foundProduct = DogData.flatMap((category) => category.items).find(
  //     (item) => item.itemCode === itemCode
  //   );
  //   setProduct(foundProduct);
  // }, [itemCode]);

  const { itemCode } = useParams();

  // Find the selected product from the data
  const selectedProduct = DogData.flatMap((category) => category.items).find(
    (item) => item.itemCode === itemCode
  );

  return (
    <div className={design.PDC_Details_wrapper}>
      <h2>Description</h2>
      <div className={design.PDC_Details_container}>
        <div className={design.PDC_Details_list}>
          <p>Product name:</p>
          <p>Category:</p>
          <p>Item Code:</p>
          <p>Size:</p>
          <p>Height:</p>
          <p>Color:</p>
        </div>
        <div className={design.PDC_Details_list}>
          <p>{selectedProduct.name}</p>
          <p>{selectedProduct.category}</p>
          <p>{selectedProduct.itemCode}</p>
          <p>{selectedProduct.size}</p>
          <p>{selectedProduct.height}</p>
          <p>{selectedProduct.color}</p>
        </div>
      </div>
    </div>
  );
};

PDC_Details.propTypes = {
  location: PropTypes.object.isRequired,
};

export default PDC_Details;
