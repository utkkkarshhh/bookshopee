import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextType = {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

type Props = {
  children?: ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  onLogin: () => {},
  onLogout: () => {},
});

const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(true);
  const navigate = useNavigate();

  const loginHandler = () => {
    setAuthenticated(true);
    navigate("/dashboard");
  };

  const logoutHandler = () => {
    setAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authenticated,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
