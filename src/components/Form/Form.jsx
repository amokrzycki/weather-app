import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.search} id="searchForm" className="center">
      <input
        type="text"
        value={props.value}
        placeholder="Type your city"
        onChange={props.change}
        id="citySearch"
      ></input>
      <button>Get actual weather</button>
    </form>
  );
};

export default Form;
