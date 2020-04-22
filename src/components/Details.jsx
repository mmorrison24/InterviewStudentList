import React, { useEffect } from "react";
import { Card, Container, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getStudent } from "../store/actions/studentsActions";
const divStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const secondary = {
  color: "#718096",
};

const primary = {
  color: "#2d3748",
};

const useStyle = makeStyles({
  card: {
    backgroundColor: "#e2e8f0",
  },
});

const Details = ({ student, getStudent }) => {
  let { id } = useParams();
  const classes = useStyle();
  useEffect(() => {
    getStudent(id);
  }, [getStudent, id]);

  if (!student) return null;
  return (
    <div
      style={{
        marginTop: "2rem",
      }}
    >
      <Card className={classes.card}>
        <Container>
          <div style={divStyle}>
            <h4 style={secondary}>First Name</h4>
            <h3 style={primary}>{student.firstName}</h3>
          </div>
          <div style={divStyle}>
            <h4 style={secondary}>Last Name</h4>
            <h3 style={primary}>{student.lastName}</h3>
          </div>
          <div style={divStyle}>
            <h4 style={secondary}>Street</h4>
            <h3 style={primary}>{student.street}</h3>
          </div>
          <div style={divStyle}>
            <h4 style={secondary}>City</h4>
            <h3 style={primary}>{student.city}</h3>
          </div>
          <div style={divStyle}>
            <h4 style={secondary}>Phone Number</h4>
            <h3 style={primary}>{student.phone}</h3>
          </div>
          <div style={divStyle}>
            <h4 style={secondary}>GPA</h4>
            <h3 style={primary}>{student.GPA}</h3>
          </div>
        </Container>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    student: state.students.currentStudent,
  };
};
export default connect(mapStateToProps, { getStudent })(Details);
