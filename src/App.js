import "./App.css";
import {MainAreaContainer} from "./Components/MainArea/MainAreaContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";

const App = () => {
  return (
      <div className="App">
          <HeaderContainer/>
          <MainAreaContainer/>
      </div>
  );
};

export default App;
