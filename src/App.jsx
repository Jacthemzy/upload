import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComponentOne from "./Components/ComponentOne";
import ComponentTwo from "./Components/ComponentTwo";
import ComponentThree from "./Components/ComponentThree";
import ComponentFive from "./Components/ComponentFive";
import ComponentSix from "./Components/ComponentSix";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComponentOne />} />
        <Route path="/component-one" element={<ComponentOne />} />
        <Route path="/component-two" element={<ComponentThree />} />{" "}
        <Route path="/component-three" element={<ComponentTwo />} />
        <Route path="/component-five" element={<ComponentFive />} />
        <Route path="/component-six" element={<ComponentSix />} />
      </Routes>
    </Router>
  );
};

export default App;
