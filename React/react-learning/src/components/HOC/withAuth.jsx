import React from "react";

const withAuth = (Component) => {
  // enhancement here we need to do
  const isLoggedIn = true;

  function EnhancedComponent(props) {
    if (isLoggedIn) {
      return <Component {...props} />;
    } else {
      return <h2>Please Login before accessing this page</h2>;
    }
  }

  return EnhancedComponent;
};

export default withAuth;
