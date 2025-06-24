import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const reservation = JSON.parse(localStorage.getItem("reservation"));
  const customer = JSON.parse(localStorage.getItem("customer"));

  return (
    <Box>
      <Heading mb={4}>Reservation Confirmed!</Heading>
      <Text><strong>Name:</strong> {customer.firstName} {customer.lastName}</Text>
      <Text><strong>Contact:</strong> {customer.contact}</Text>
      <Text><strong>Date:</strong> {reservation.date}</Text>
      <Text><strong>Time:</strong> {reservation.time}</Text>
      <Text><strong>Diners:</strong> {reservation.diners}</Text>
      <Button mt={5} onClick={() => navigate("/")}>Make Another Reservation</Button>
    </Box>
  );
};

export default Confirmation;
