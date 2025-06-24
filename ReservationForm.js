import React from "react";
import { Box, Button, FormControl, FormLabel, Select, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const ReservationForm = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Heading mb={4}>Reserve a Table</Heading>
      <Formik
        initialValues={{ date: "", time: "", diners: "" }}
        onSubmit={(values) => {
          localStorage.setItem("reservation", JSON.stringify(values));
          navigate("/details");
        }}
      >
        {() => (
          <Form>
            <FormControl mb={3}>
              <FormLabel>Date</FormLabel>
              <Field as="input" type="date" name="date" className="chakra-input" required />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Time</FormLabel>
              <Field as={Select} name="time" required>
                <option value="">Select time</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </Field>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Number of Diners</FormLabel>
              <Field as="input" type="number" name="diners" min="1" max="10" required />
            </FormControl>
            <Button type="submit" colorScheme="teal">Next</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ReservationForm;
