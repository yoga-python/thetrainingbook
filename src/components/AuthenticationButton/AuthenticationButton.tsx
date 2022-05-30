import React from "react";
import { Button } from "@mui/material/";

interface Props {
  authenticated: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthenticationButton = ({ authenticated, signIn, signOut }: Props) => {
  if (authenticated) {
    return (
      <Button variant="outlined" color="secondary" onClick={signOut}>
        Sign out
      </Button>
    );
  }

  return (
    <Button variant="contained" color="primary" onClick={signIn}>
      Sign in
    </Button>
  );
};

export default AuthenticationButton;
