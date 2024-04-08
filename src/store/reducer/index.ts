import { combineReducers } from "redux";
import LayoutHomeReducer from "./LayoutHomeReducer";
import HomeContentReducer from "./HomeContentReducer"


const rootReducer = combineReducers({
    layoutHome: LayoutHomeReducer,
    homeContent: HomeContentReducer,
});

export default rootReducer;