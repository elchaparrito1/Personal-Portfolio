//Remember that BrowserRouter keeps a history under the hood of the URL.
//The point of this file is to access that history as an object so that we can more easily control it and navigate it.
import createHistory from "history/createBrowserHistory";

export default createHistory();