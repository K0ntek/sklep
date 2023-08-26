import { User, UserActions } from "../interfaces";

const authReducer = (state: User | {}, action: UserActions) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;
