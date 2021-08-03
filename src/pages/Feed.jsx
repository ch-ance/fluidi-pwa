// @ts-nocheck
import { useEffect, useState } from "react";
import { Avatar, Box, Icon, IconButton, Typography } from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";

const Feed = () => {
  const { gun, sea } = window;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main>
      <header>
        <h1>fluidi</h1>
        <IconButton href="/new-post">
          <AddCircle />
        </IconButton>
      </header>
      {posts.length &&
        posts.map((post, index) => {
          return (
            <Box component="article" key={Math.random()}>
              {/* <Box><Avatar src={post.user.photoUrl} /></Box> */}
              <Box>
                <Typography variant="h4">{post.text}</Typography>
              </Box>
              {/* <IconButton
                onClick={async () => {
                  const thisPost = gun.get("posts").get("posts").get(post);
                  const deletedPost = thisPost.put(null);
                  console.log(thisPost);
                  console.log(deletedPost);
                }}
              >
                <RemoveCircle />
              </IconButton> */}
            </Box>
          );
        })}
    </main>
  );

  async function fetchPosts() {
    try {
      const _posts = [];
      const fetchedPosts = gun.get("posts");
      fetchedPosts.map().on((post, id) => {
        console.info("post", { post, id });
        if (post?.user) _posts.push(post);
      });
      setPosts(_posts);
    } catch (err) {
      console.error(err);
    }
  }
};

export default Feed;
