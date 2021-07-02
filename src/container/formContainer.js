import { connect } from "react-redux";
import Form from "../component/Form";
import { save } from "../actions";
const mapStateToProps = (state) => {
  return {
    form: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    save: (obj) => dispatch(save(obj))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
