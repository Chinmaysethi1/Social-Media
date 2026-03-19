const WelcomeMessage = ({ onGetPostclick }) => {
  return (
    <center className="welcome-message">
      <h1> There are no posts</h1>

      <button type="button" onClick={onGetPostclick} class="btn btn-primary">
        Get Posts from server
      </button>
    </center>
  );
};
export default WelcomeMessage;
