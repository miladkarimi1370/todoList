import React, { useContext, useEffect, useRef, useState } from "react";
import { actionTypes } from "./context/reducer";
import { authContext } from "./context/authContext";

export default function AddTAsk() {
  const { dispatch } = useContext(authContext);
  useEffect(() => {
    paragraphRef.current.focus();
  }, []);
  let [paragraph, setParagraph] = useState("");
  const paragraphRef = useRef();
  function add() {
    dispatch({
      type: actionTypes.ADD_TASK,
      payload: {
        body: paragraph,
      },
    });
    setParagraph((paragraph = ""));
    paragraphRef.current.focus();
  }
  return (
    <>
      <div className="col-sm-12 col-md-10 offset-md-1">
        <div className="mb-3 d-flex mx-2">
          <input
            type="text"
            className="form-control rounded-pill fst-italic"
            id="task"
            placeholder="do something or arrange a meeting . . ."
            value={paragraph}
            ref={paragraphRef}
            onChange={(e) => setParagraph(e.target.value)}
          />
          <button
            className="btn btn-primary my-2 btn-sm rounded-pill fst-italic mx-2"
            onClick={add}
          >
            click me
          </button>
        </div>
      </div>
    </>
  );
}
