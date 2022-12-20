import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("warning");

  let makePrimaryTheme = () => {
    theme = "primary";
    setTheme(theme);
  };
  let makeSuccessTheme = () => {
    theme = "success";
    setTheme(theme);
  };
  let makeDangerTheme = () => {
    theme = "danger";
    setTheme(theme);
  };
  return (
    <div>
      <h1 className={`bg-${theme} text-light p-3`}>Theme light{theme}</h1>

      <input
        className="btn btn-primary"
        type="button"
        value="Primary"
        onClick={makePrimaryTheme}
      />
      <input
        className="btn btn-success"
        type="button"
        value="Success"
        onClick={makeSuccessTheme}
      />
      <input
        className="btn btn-danger"
        type="button"
        value="Denger"
        onClick={makeDangerTheme}
      />
    </div>
  );
}

export default App;
