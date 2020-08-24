import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";


function Logout() {
  const logout = useAuth();


  return (
    <button type="button" className="btn btn-primary btn-sm styledBtn">
      <Link key="logout" onClick={logout}>
        Logout>
      </Link>
    </button>
  );
}

export default Logout;


 
