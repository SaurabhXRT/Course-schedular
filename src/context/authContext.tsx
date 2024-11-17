import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AuthContextType {
  authToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(() => localStorage.getItem('token'));

  // useEffect(() => {
  //   if (authToken) {
  //     localStorage.setItem('token', authToken);
  //   } else {
  //     localStorage.removeItem('token');
  //   }
  // }, [authToken]);

  const login = (token: string) => {
    setAuthToken(token); 
    localStorage.setItem('token', token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null); 
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
