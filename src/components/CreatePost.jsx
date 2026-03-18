import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const Creataposts = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTileElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTileElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(s+)/);
    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="USerId" className="form-label">
          Enter Your user id here:
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="USerId"
          placeholder="Your USsr name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title:
        </label>
        <input
          type="text"
          ref={postTileElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today!!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content:
        </label>
        <textarea
          type="text"
          rows="5"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about you!!"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions:
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reaction"
          placeholder="How many people reacted!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags:
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter the tags using space "
        />
      </div>

      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};

export default Creataposts;
