import { useState } from "react";
import design from "./style.module.css";
// import DogData from "../../data/data";
// import PPC_Card from "../../Pages/ProductPage/ProductPageComponents/PPC_Card/PPC_Card";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //   const filteredDogData = DogData.filter((dogCategory) =>
  //     dogCategory.category.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  return (
    <div className="App">
      <div className={design.Search}>
        <input
          type="text"
          placeholder="Search dogs..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      {/* <div className="card-container">
        {filteredDogData.map((dogCategory, index) => (
          <div key={index}>
            <h2>{dogCategory.category}</h2>
            <div className="card-group">
              {dogCategory.items.map((dog, index) => (
                <PPC_Card key={index} item={dog} />
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Search;
