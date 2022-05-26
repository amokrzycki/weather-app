import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormComponent.css";
const FormComponent = (props) => {
  return (
    <div className="form-wrapper d-flex flex-column align-items-center justify-content-center w-50 background">
      <h1 className="text-white label">Forecast App for all your needs</h1>
      <hr className="bg-white w-25 dash" />
      <form
        onSubmit={props.search}
        id="searchForm"
        className="d-flex justify-content-center w-75"
      >
        <input
          type="text"
          value={props.value}
          placeholder="Enter location"
          onChange={props.change}
          id="citySearch"
          className="position-relative rounded-pill px-3 py-2 w-75 holder my-2 text-white"
        />
        <button type="submit" className="buttonStyles">
          <i
            className="fa fa-magnifying-glass text-white my-auto searchStyles my-auto p-3"
            aria-hidden="true"
            type="submit"
          ></i>
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
