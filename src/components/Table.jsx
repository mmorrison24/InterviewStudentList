import React from "react";
import { connect } from "react-redux";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
const useStyles = makeStyles({
  table: {
    backgroundColor: "#e2e8f0",
  },
});

const StudentsTable = ({ students, deleteStudent }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleDelete = (id) => {
    deleteStudent(id);
  };

  return (
    <div>
      <h1>Students List</h1>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow className={classes.heading}>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>GPA</TableCell>
              <TableCell> </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => {
                  history.push(`/${row.id}`);
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.GPA}</TableCell>

                <TableCell>
                  <Button onClick={() => handleDelete(row.id)}>
                    <img
                      src="https://img.icons8.com/cute-clipart/64/000000/delete-forever.png"
                      height="30"
                      width="30"
                      alt="delete"
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent(id) {
      dispatch({
        type: "DELETE_STUDENT",
        payload: { id },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsTable);
