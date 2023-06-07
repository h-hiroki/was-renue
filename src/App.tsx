import { useState } from "react";
import { AppRouter } from "./AppRouter";
import logo from "/icon-192x192.png";

function App() {
  const [count, setCount] = useState(0);

  return <AppRouter />;
}

export default App;
