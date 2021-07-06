export function save(obj) {
  return (dispatch) => {
    return dispatch({
      type: "SAVE",
      payload: obj
    });
  };
}
