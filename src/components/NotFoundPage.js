import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h3>Page not found</h3>
      <p>
        Go back to <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
