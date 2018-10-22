import fetch from "isomorphic-unfetch";

import Layout from "../components/MyLayout";
import PostContent from "../components/PostContent";

const Post = ({ show }) => (
  <Layout>
    <PostContent show={show} />
  </Layout>
);

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show: ${show.name}`);
  return { show };
};

export default Post;
