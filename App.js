import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReservationForm from "./components/ReservationForm";
import CustomerDetailsForm from "./components/CustomerDetailsForm";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Container maxW="md" py={6}>
          <Routes>
            <Route path="/" element={<ReservationForm />} />
            <Route path="/details" element={<CustomerDetailsForm />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
