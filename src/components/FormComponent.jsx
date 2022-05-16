import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = (props) => {
  return (
    <Form onSubmit={props.search} id="searchForm" className="center">
      <Form.Label className="text-white">{`${props.label ? "Description of weather: " + props.label[0].description : "Provide City"}`}</Form.Label>
      <Form.Control
        type="text"
        value={props.value}
        placeholder="City"
        onChange={props.change}
        id="citySearch"
        className="w-75"
      />
      <Button type="submit">Get actual weather</Button>
    </Form>
  );
};

export default FormComponent;
