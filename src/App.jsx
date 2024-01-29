import { useState } from "react";
import RegisterForm from "./layouts/RegisterForm";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className="min-h-screen" data-theme={darkMode? 'dark': 'cyberpunk'}>
        <h1 className="text-3xl font-bold underline text-cyan-500" >
          When's ed for sf6?
        </h1>
        <input type="checkbox" className="toggle" checked = {darkMode}
          onChange={e=>{setDarkMode(e.target.checked)}}
        />
        <div className="flex gap-2">
          <button className="btn btn-active">Default</button>
          <button className="btn btn-active btn-neutral">Neutral</button>
          <button className="btn btn-active btn-primary">Primary</button>
          <button className="btn btn-active btn-secondary">Secondary</button>
          <button className="btn btn-active btn-accent">Accent</button>
          <button className="btn btn-active btn-ghost">Ghost</button>
          <button className="btn btn-active btn-link">Link</button>
        </div>
        <RegisterForm/>
      </div>
    </>
  );
}

export default App;
