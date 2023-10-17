import { Store, legacy_createStore } from "redux";
import Reducer1 from "./redux";
const store=legacy_createStore(Reducer1)
console.log(store.getState())

export default store