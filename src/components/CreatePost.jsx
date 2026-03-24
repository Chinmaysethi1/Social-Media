import { Form } from "react-router";
import { redirect } from "react-router";
const Creataposts = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="USerId" className="form-label">
          Enter Your user id here:
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="USerId"
          placeholder="Your user name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title:
        </label>
        <input
          type="text"
          name="title"
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
          name="body"
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
          type="number"
          name="reactions"
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
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter the tags using space "
        />
      </div>

      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </Form>
  );
};
export async function createPostaction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default Creataposts;
