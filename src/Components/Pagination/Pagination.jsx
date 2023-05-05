import PropTypes from "prop-types";
import design from "./style.module.css";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    const isActive = number === currentPage;
    return (
      <li key={number} className={isActive ? "active" : null}>
        <a href="#" onClick={() => onPageChange(number)}>
          {number}
        </a>
      </li>
    );
  });

  return (
    <div className={design.pagination}>
      <span
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </span>
      <ul>{renderPageNumbers}</ul>
      <span
        disabled={currentPage === pageNumbers.length}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </span>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
