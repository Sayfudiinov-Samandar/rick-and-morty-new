import React from "react";
import ReactPaginate from "react-paginate";
export const Pagination = ({ totalPage, setActPage, atPage }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-5 gap-3"
      forcePage={atPage === 1 ? 0 : atPage - 1}
      pageCount={totalPage}
      previousLabel={"Prev"}
      nextLabel="Next"
      previousLinkClassName="btn btn-primary"
      nextLinkClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setActPage(data.selected + 1);
      }}
    />
  );
};
