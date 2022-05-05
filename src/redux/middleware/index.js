import { applyMiddleware } from "redux";

//import middleware
import thunk from "redux-thunk";
import logger from "./logger";
import persist from "./persist";

export default applyMiddleware(thunk, logger, persist);
