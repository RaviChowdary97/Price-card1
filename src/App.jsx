import "./App.css";
import Comp2 from "./Components/Comp2";
import Comp3 from "./Components/Comp3";
import Comp1 from "./Components/comp1";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
          gap: "30px",
        }}
      >
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </div>
    </>
  );
}

export default App;
