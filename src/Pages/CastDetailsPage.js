import React, { Component, useState, useEffect } from "react";
import CastDetails from "../Components/CastDetails/CastDetails";
import { CastService } from "../Services/CastService";
import { useParams } from "react-router-dom";

function CastDetailsPage(params) {
  let { id } = useParams();
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    CastService.GetCastDetailsById(id).then((response) =>
      setDetails(response.data)
    );
  }, []);

  return (
    <main className="col-12 col-md-6 col-lg-7 main-content">
      <div className="row mt-md-4">
        <CastDetails data={Details} />
      </div>
    </main>
  );
}

export default CastDetailsPage;
