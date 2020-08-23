import React from "react";
import { useAuth } from "../../utils/auth";

// NavLink adds "active" to className when path matches.

function Logout() {
  const { logout } = useAuth();

  return (
    <button type="button" className="btn btn-primary btn-sm styledBtn">
      <span key="lougout" onClick={logout}>
        Logout
      </span>
    </button>
  );
}

export default Logout;
