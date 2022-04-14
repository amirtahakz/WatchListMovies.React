import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Pagination(params) {
  let { page } = useParams();
  const [CurrentPage, setCurrentPage] = useState(page);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link
            className="page-link"
            tabIndex="-1"
            aria-disabled="true"
            to={"/"} onClick={() => {window.location.href=`/${params.route}/${parseInt(CurrentPage) - 1}`}}
          >
            Previous
          </Link>
        </li>
        <li className="page-item">
          <Link to={"/"} onClick={() => {window.location.href=`/${params.route}/${parseInt(CurrentPage)}`}} className="page-link">
            {CurrentPage}
          </Link>
        </li>
        <li className="page-item">
          <Link to={"/"} onClick={() => {window.location.href=`/${params.route}/${parseInt(CurrentPage) + 1}`}} className="page-link">
            {parseInt(CurrentPage) + 1}
          </Link>
        </li>
        <li className="page-item">
          <Link to={"/"} onClick={() => {window.location.href=`/${params.route}/${parseInt(CurrentPage) + 2}`}} className="page-link">
            {parseInt(CurrentPage) + 2}
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link"
            to={"/"} onClick={() => {window.location.href=`/${params.route}/${parseInt(CurrentPage) + 1}`}}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
