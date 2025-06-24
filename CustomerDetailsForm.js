import React from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  contact: Yup.string().email("Invalid email").required("Required"),
});

const CustomerDetailsForm = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Heading mb={4}>Enter Your Details</Heading>
      <Formik
        initialValues={{ firstName: "", lastName: "", contact: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          localStorage.setItem("customer", JSON.stringify(values));
          navigate("/confirmation");
        }}
      >
        {() => (
          <Form>
            <FormControl mb={3}>
              <FormLabel>First Name</FormLabel>
              <Field as={Input} name="firstName" required />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Last Name</FormLabel>
              <Field as={Input} name="lastName" required />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email or Phone</FormLabel>
              <Field as={Input} name="contact" required />
            </FormControl>
            <Button type="submit" colorScheme="teal">Submit</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CustomerDetailsForm;
