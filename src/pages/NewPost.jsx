import { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { useStore } from "../store";

const NewPost = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const { gun } = window;
  return (
    <Box width="100vw" textAlign="center" height="100vh">
      <TextField
        value={text}
        placeholder="So I was taking a walk..."
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <TextField value={audioUrl} placeholder="https://sound.com/sound..." />
      <br />
      <Button onClick={createPost}>Create Post</Button>
    </Box>
  );

  async function createPost() {
    const post = {
      text,
      audioUrl,
      user: {
        photoUrl: "",
        displayName: "chance"
      }
    };

    const newPost = gun.get("posts").set(post);
    console.log(newPost);
  }
};

export default NewPost;
