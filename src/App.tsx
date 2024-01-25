import "./App.css";
import { Root } from "./pages";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Root />
    </ChakraProvider>
  );
}

export default App;
