import React, { useContext } from "react";
import { authContext } from "./context/authContext";
import { actionTypes } from "./context/reducer";

export default function Template() {
  const { state } = useContext(authContext);

  const { dispatch } = useContext(authContext);
  const deleteHandler = (id) => {
    dispatch({
      type: actionTypes.DELETE_TASK,
      payload: id,
    });
  };
  const completedHandler = (id) => {
    dispatch({
      type: actionTypes.COMPLETED_TASK,
      payload: id,
    });
  };
  const refactorHandler = (id) => {
    dispatch({
      type: actionTypes.REFACTOR_TASK,
      payload: id,
    });
  };
  const listOfShowTasks =
    state.tasks &&
    state.tasks.map((item, index) => {
      return (
        <div
          className="col-sm-12 col-md-10 offset-md-1 d-flex p-3"
          key={item.id}
        >
          <button
            className="btn btn-info btn-sm fst-italic fw-bold mx-1 text-white"
            onClick={() => refactorHandler(item.id)}
          >
            Refactor
          </button>
          <button
            className="btn btn-success btn-sm fst-italic fw-bold mx-1 text-white"
            onClick={() => completedHandler(item.id)}
          >
            Completed
          </button>
          <button
            className="btn btn-danger btn-sm fst-italic fw-bold mx-1"
            onClick={() => deleteHandler(item.id)}
          >
            Delete
          </button>
          <input
            type="text"
            readOnly={true}
            className="form-control rounded-pill fst-italic border-0 bg-light mx-5 text-secondary"
            value={item.body}
          />
          <h6 className="btn btn-primary mb-0 rounded-pill">{index + 1}</h6>
        </div>
      );
    });

  return <>{listOfShowTasks && listOfShowTasks}</>;
}
