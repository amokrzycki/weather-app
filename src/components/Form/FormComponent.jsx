import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormComponent.css";
const FormComponent = (props) => {
  return (
    <div className="form-wrapper d-flex flex-column align-items-center justify-content-center w-50 background">
      <form
        onSubmit={props.search}
        id="searchForm"
        className="d-flex flex-column align-items-center justify-content-center w-75"
      >
        <h1 className="text-white label">{`${
          props.label
            ? "Description of weather: " + props.label
            : "Forecast App for all your needs"
        }`}</h1>
        <hr className="bg-white w-25 dash" />
        <div className="d-flex justify-content-center">
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
              class="fa fa-magnifying-glass text-white my-auto searchStyles my-auto p-3"
              aria-hidden="true"
              type="submit"
            ></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
