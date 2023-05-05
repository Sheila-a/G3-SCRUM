import PDC_Details from "./ProductDetailsComponents/PDC_Details/PDC_Details";
import PDC_Hero from "./ProductDetailsComponents/PDC_Hero/PDC_Hero";
import design from "./style.module.css";
const ProductDetails = () => {
  return (
    <div className={design.PDC_container}>
      <PDC_Hero />
      <PDC_Details />
    </div>
  );
};

export default ProductDetails;
