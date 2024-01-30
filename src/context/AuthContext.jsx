import axios from "axios";
import { useContext, useState, createContext, useEffect } from "react";
const AuthContext = createContext("");

function AuthContextProvider(props) {
  useEffect(() => {
    const run = async () => {
      let token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        return;
      }
      const rs = await axios.get("http://localhost:8888/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(rs.data.user);
      setUser(rs.data.user);
    };
    run();
  }, []);

  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthContextProvider, useAuth };
export default AuthContext;
