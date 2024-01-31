import { useState } from "react";
import RegisterForm from "./layouts/RegisterForm";
import LoginForm from "./layouts/LoginForm";
import { useAuth } from "./context/AuthContext";
import AppRouter from "./routes/AppRouter";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { loading } = useAuth;
  if (loading) {
    return <span className="loading loading-ring loading-lg scale-150"></span>;
  }

  return (
    <div className="min-h-screen flex flex-col gap-3">
      <AppRouter />
    </div>
  );
}

export default App;
