import React, { useState } from "react";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed

    // Pass the login data to the parent component
    props.onLogin({ username, panNumber, file });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="panNumber">PAN Number:</label>
        <input
          type="text"
          id="panNumber"
          value={panNumber}
          onChange={(e) => setPanNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="file">Upload File:</label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
