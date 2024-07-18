import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const IsAdmin = ({ children }) => {
  const token = useSelector((state) => state.admin.jwttoken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, []);

  if (token) {
    return children;
  }
};

export default IsAdmin;
