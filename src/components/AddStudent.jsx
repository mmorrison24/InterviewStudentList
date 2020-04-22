import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormGroup,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStudent } from "../store/actions/studentsActions";

const AddStudent = ({ createStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [GPA, setGPA] = useState("");
  const history = useHistory();
  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setStreet("");
    setCity("");
    setPhone("");
    setGPA("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      firstName,
      lastName,
      street,
      city,
      phone,
      GPA,
      id: Date.now().toString(),
    };

    clearFields();

    createStudent(newStudent);
    history.push("/");
  };

  return (
    <div>
      <h1>Add</h1>
      <FormGroup>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="my-input">First Name</InputLabel>
          <Input
            id="my-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required=""
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="my-input">Last Name</InputLabel>
          <Input
            id="my-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="my-input">Street Number/Name</InputLabel>
          <Input
            id="my-input"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="my-input">City</InputLabel>
          <Input
            id="my-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="my-input">Phone Number</InputLabel>
          <Input
            id="my-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormControl>
        <FormControl margin={"normal"}>
          <InputLabel htmlFor="my-input">GPA</InputLabel>
          <Input
            id="my-input"
            value={GPA}
            onChange={(e) => setGPA(e.target.value)}
          />
        </FormControl>
        <Button
          style={{
            marginTop: "2rem",
          }}
          color="primary"
          variant="contained"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </FormGroup>
    </div>
  );
};

export default connect(null, { createStudent })(AddStudent);
