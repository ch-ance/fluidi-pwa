import { useState } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import * as ethers from "ethers";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const [displayName, setDisplayName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const history = useHistory();

  return (
    <Box textAlign="center">
      <Typography variant="h4">Welcome to Fluidi.</Typography>
      <Typography>
        To get started, just enter a display name and a url to use as your
        profile photo. Then, hit "Create CryptoIdentity" to generate your Fluidi
        wallet and start getting wavey.
      </Typography>
      <TextField
        value={displayName}
        placeholder="display name"
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <TextField
        value={photoUrl}
        placeholder="profile photo url"
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <Button variant="contained" onClick={createCryptoIdentity}>
        Create CryptoIdentity
      </Button>
    </Box>
  );

  async function createCryptoIdentity() {
    const wallet = ethers.Wallet.createRandom();
    console.log(`wallet created: ${JSON.stringify(wallet)}`);
    localStorage.setItem("mnemonic", wallet.mnemonic.phrase);


    history.push("/feed");
  }
};

export default Auth;
