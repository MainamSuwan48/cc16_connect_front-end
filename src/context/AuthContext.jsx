import axios from "axios";
import { useContext, useState, createContext, useEffect } from "react";
const AuthContext = createContext("");

function AuthContextProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const run = async () => {
      try{
        setLoading(true);
        let token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const rs = await axios.get("http://localhost:8888/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(rs.data);
      }catch(err){
        console.log(err)
      }finally{
        setLoading(false);
      }

    
    };
    run();
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout ,loading}}>
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthContextProvider, useAuth };
export default AuthContext;
