import React from "react";

import MainContent from "./components/mainContent";

function HomePage(props) {
  return <MainContent trends={props.trends} />;
}

export default HomePage;
