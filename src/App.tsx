import "./App.css";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <>
      <div className="app-container">
        <Editor />
        <Preview />
      </div>
    </>
  );
}

export default App;
