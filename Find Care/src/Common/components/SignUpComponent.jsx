/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";

import { auth, database } from "../../firebaseConfig.js";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

export default function SignUpComponent() {
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  function writeUserData(name, email) {
    set(ref(database, "users/" + btoa(email)), {
      username: name,
      email: email,
    });
  }

  function handleSignUp(email, password, name) {
    // Create user with email and pass.
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("res", res);
        alert("User Created Successfully.");
        writeUserData(name, email);
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidData = validateInputs();
    if (!isValidData) {
      return;
    }
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log({
      email,
      password,
      name,
    });
    handleSignUp(email, password, name);
  };

  const validateInputs = () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!name.value) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
    return isValid;
  };

  return (
    <Card variant="outlined" className="mx-auto md:mt-24 xs:mt-10 mb-10">
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign Up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
        className="flex flex-col w-full gap-2"
      >
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <TextField
            error={nameError}
            helperText={nameErrorMessage}
            id="name"
            type="name"
            name="name"
            placeholder="Enter your name"
            autoComplete="name"
            required
            fullWidth
            variant="outlined"
            color={nameError ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            required
            fullWidth
            variant="outlined"
            color={emailError ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Password</FormLabel>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={passwordError ? "error" : "primary"}
          />
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="!bg-[#5c74fc] hover:!bg-blue-800"
          // onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Already have an account?{" "}
          <span>
            <NavLink
              to="/signin"
              className="text-[#5c74fc] hover:text-blue-800"
            >
              Sign In
            </NavLink>
          </span>
        </Typography>
      </Box>
    </Card>
  );
}
