import { useState } from "react";
import RegisterForm from "./layouts/RegisterForm";
import LoginForm from "./layouts/LoginForm";
import { useAuth } from "./context/AuthContext";
import AppRouter from "./routes/AppRouter";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { user, setUser } = useAuth;
  return (
    <>
      <div
        className="min-h-screen"
        data-theme={darkMode ? "dark" : "cyberpunk"}
      >
        <h1 className="text-3xl font-bold underline text-cyan-500">
          Hello, {user?.firstname}
        </h1>
        <input
          type="checkbox"
          className="toggle"
          checked={darkMode}
          onChange={(e) => {
            setDarkMode(e.target.checked);
          }}
        />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
