import { useState } from "react";
import DogData from "../../data/data";
import PPC_Card from "./ProductPageComponents/PPC_Card/PPC_Card";
import design from "./style.module.css";
import Pagination from "../../Components/Pagination/Pagination";
import PPC_Hero from "./ProductPageComponents/PPC_Hero/PPC_Hero";
import PPC_Side from "./ProductPageComponents/PPC_Side/PPC_Side";

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(6);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = DogData.flatMap((dog) => dog.items).slice(
    indexOfFirstDog,
    indexOfLastDog
  );

  // const pageNumbers = [];
  // for (
  //   let i = 1;
  //   i <= Math.ceil(DogData.flatMap((dog) => dog.items).length / dogsPerPage);
  //   i++
  // ) {
  //   pageNumbers.push(i);
  // }

  // const handleClick = (event) => {
  //   setCurrentPage(Number(event.target.id));
  // };
  // const [selectedDog, setSelectedDog] = useState(null);

  // const handleBuyNowClick = (dog) => {
  //   setSelectedDog(dog);
  //   // navigate to checkout page
  //   // you can use a routing library like React Router for this
  // };
  return (
    <div>
      <PPC_Hero />
      <div className={design.PP_Main}>
        <PPC_Side />
        <div className={design.PP_list}>
          {currentDogs.map((dog, index) => (
            <PPC_Card key={index} item={dog} />
          ))}
          {/* <div className={design.pagination}>
            <ul>
              {pageNumbers.map((number) => (
                <li
                  key={number}
                  id={number}
                  onClick={handleClick}
                  className={currentPage === number ? design.active : null}
                >
                  {number}
                </li>
              ))}
            </ul>
          </div> */}
          {/* {DogData.map((dog, index) =>
            dog.items.map((item) => (
              <PPC_Card
                key={index}
                item={item}
                // handleBuyNowClick={handleBuyNowClick}
              />
            ))
          )} */}
          {/* {DogData.map((dogCategory, index) => (
            <div key={index}>
              <h2>{dogCategory.category}</h2>
              <div className="card-group">
                {dogCategory.items.map((dog, index) => (
                  <PPC_Card key={index} item={dog} />
                ))}
              </div>
            </div>
          ))} */}{" "}
          <Pagination
            currentPage={currentPage}
            itemsPerPage={dogsPerPage}
            totalItems={DogData.flatMap((dog) => dog.items).length}
            onPageChange={handlePageChange}
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductPage;
