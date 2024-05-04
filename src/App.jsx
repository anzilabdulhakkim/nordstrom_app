import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import AllRoutes  from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <AllRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
