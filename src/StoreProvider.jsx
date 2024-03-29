import { Provider } from "react-redux";
import { store } from "./lib/store";

export const StoreProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
