import { Navigate } from "react-router-dom"

/*
  user object should come from backend after login
  Example stored in localStorage:
  {
    token: "...",
    role: "admin" | "user"
  }
*/

export default function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"))

  if (!user) {
    return <Navigate to="/login" />
  }

  if (user.role !== "admin") {
    return <Navigate to="/" />
  }

  return children
}
