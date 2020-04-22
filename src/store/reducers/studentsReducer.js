const initialState = {
  students: [],
};

const studetnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_STUDENT":
      return { ...state, students: [action.payload, ...state.students] };
    case "DELETE_STUDENT":
      const { id } = action.payload;
      return {
        ...state,
        students: state.students.filter((student) => student.id !== id),
      };
    case "GET_STUDENT":
      return {
        ...state,
        currentStudent: state.students.find(
          (student) => student.id === action.payload
        ),
      };

    default:
      return state;
  }
};

export default studetnsReducer;
