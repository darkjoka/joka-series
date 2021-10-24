import React from "react";

import { Layout } from "./components/layout";
import { useTheme } from "./shared/hooks/useTheme";

const App: React.FC = () => {
  useTheme();
  return <Layout />;
};

export default App;
