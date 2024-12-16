import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../firebaseConfig";
import { UserContext } from "../../context/UserContext";
import { onValue, ref } from "firebase/database";

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

export default function SignInComponent() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const { setUser } = React.useContext(UserContext);

  const navigate = useNavigate();

  const getUserDetailsAndCallContext = (email) => {
    try {
      const starCountRef = ref(database, "users/" + btoa(email));
      onValue(
        starCountRef,
        (snapshot) => {
          const dbData = snapshot.val();
          if (dbData?.email === email) {
            setUser(dbData);
          }
        },
        {
          onlyOnce: true,
        }
      );
    } catch (error) {
      alert("Something went wrong please try again later");
      console.log(error);
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      console.log("resp", resp);
      getUserDetailsAndCallContext(email);
      alert("User Signed In successfully");
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } catch (error) {
      if (String(error).includes("invalid-credential")) {
        alert("Wrong Credentials");
      } else {
        alert("Somthing went wrong. Please try again later");
      }
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormValid = validateInputs();

    if (!isFormValid) {
      return;
    }
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log({
      email,
      password,
    });
    handleSignIn(email, password);
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

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
        Sign In
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      >
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
          onClick={validateInputs}
          className="!bg-[#5c74fc] hover:!bg-blue-800"
        >
          Sign in
        </Button>
        <Typography sx={{ textAlign: "center" }}>
          Don&apos;t have an account?{" "}
          <span>
            <NavLink
              to="/signup"
              className="text-[#5c74fc] hover:text-blue-800"
            >
              Sign Up
            </NavLink>
          </span>
        </Typography>
      </Box>
    </Card>
  );
}
