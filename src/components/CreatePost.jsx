const Creataposts = () => {
  return (
    <form className="create-post">
      <div className="mb-3">
        <label htmlFor="USerId" className="form-label">
          Enter Your user id here:
        </label>
        <input
          type="text"
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
          className="form-control"
          id="reaction"
          placeholder="How many people reacted!"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Creataposts;
