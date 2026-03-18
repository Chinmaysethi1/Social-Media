import { useRef } from "react";

const Creataposts = () => {
  const userId = useRef();
  const postTile = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="USerId" className="form-label">
          Enter Your user id here:
        </label>
        <input
          type="text"
          ref={userId}
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
          ref={postTile}
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
          ref={postBody}
          className="form-control"
          id="body"
          placeholder="Tell us more about you!!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions:
        </label>
        <input
          type="text"
          ref={reactions}
          className="form-control"
          id="reaction"
          placeholder="How many people reacted!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Ennnter your hashtags:
        </label>
        <input
          type="text"
          ref={tags}
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
