export const createStudent = (newStudent) => {
  return {
    type: "CREATE_STUDENT",
    payload: newStudent,
  };
};
export const getStudent = (id) => {
  return {
    type: "GET_STUDENT",
    payload: id,
  };
};
