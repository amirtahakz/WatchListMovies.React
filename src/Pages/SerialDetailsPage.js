import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SerialService } from "../Services/SerialService";
import SerialDetails from "../Components/SerialDetails/SerialDetails";

function SerialDetailsPage(params) {
  let abortController = new AbortController();
  let { id } = useParams();
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    SerialService.GetSerialDetailsById(id).then((response) =>
      setDetails(response.data)
    );
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <main className="col-12 col-md-6 col-lg-7 main-content">
      <div className="row mt-md-4">
        <SerialDetails data={Details} />
      </div>
    </main>
  );
}

export default SerialDetailsPage;
