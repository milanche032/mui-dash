import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";

const useStyles = makeStyles({
  sidecont: {
    display: "flex",
  },
  pageContent: {
    flex: "4",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Topbar />
      <div className={classes.sidecont}>
        <Sidebar />
        <div className={classes.pageContent}>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Analytics />} path="/analytics" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
