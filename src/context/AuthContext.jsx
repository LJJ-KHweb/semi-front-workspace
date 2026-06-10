import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    return {
      memberId: localStorage.getItem("memberId"),
      memberName: localStorage.getItem("memberName"),
      role: localStorage.getItem("role"),
    };
  });

  const login = (data) => {
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("memberId", data.memberId);
    localStorage.setItem("memberName", data.memberName);
    localStorage.setItem("role", data.role);

    setUser({
      memberId: data.memberId,
      memberName: data.memberName,
      role: data.role,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("memberId");
    localStorage.removeItem("memberName");
    localStorage.removeItem("role");
    //["token", "refreshToken", "memberId", "memberName", "role"].forEach(k=>localStorage.removeItem(k),);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLogin: !!user }}>
      {children}
    </AuthContext.Provider>
  );
  //!! -> Java Script는 모든것을 boolean으로 바꿀수 있음
}

export function useAuth() {
  return useContext(AuthContext);
}
