import React from "react";

// mui
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material/";

// authentication
import {
  auth,
  logInWithGoogle,
  logout,
} from "./services/firebaseAuthentication";
import { useAuthState } from "react-firebase-hooks/auth";

// components
import AuthenticationButton from "./components/AuthenticationButton";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthenticationButton
        authenticated={user?.uid !== undefined}
        signIn={logInWithGoogle}
        signOut={logout}
      />
    </ThemeProvider>
  );
};

export default App;
