const PostContent = ({ show }) => (
  <div>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, "")}</p>
    <img src={show.image.medium} />
  </div>
);

export default PostContent;
