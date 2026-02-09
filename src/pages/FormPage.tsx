import { useRef, useState } from "react";

const FormPage = () => {
  // Uncontrolled component/input
  const inputRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  //  Controlled component/imput
  const [fullNameInput, setFullNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = () => {
    // const fullNameFormValue = inputRef.current?.value;
    // const emailFormValue = inputEmailRef.current?.value;
    // alert("Form submitted: " + fullNameFormValue + " " + emailFormValue);

    const fullNameValidation = fullNameInput.length < 3;
    const passwordValidation = passwordInput.length < 8;

    if (fullNameValidation) {
      setUsernameErrorMessage("Username must be at least 3 characters");
    }

    if (passwordValidation) {
      setPasswordErrorMessage("Password must be at least 8 characters");
    }
  };

  return (
    <div>
      <h1>Form Page</h1>

      <h3>Username: {fullNameInput}</h3>
      <h3>Passwrod: {passwordInput}</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          maxWidth: "250px",
        }}
      >
        <label htmlFor="full-name">Username</label>
        <input
          onChange={(e) => {
            setFullNameInput(e.target.value);

            const fullNameValidation = e.target.value.length < 3;

            if (fullNameValidation) {
              setUsernameErrorMessage("Username must be at least 3 characters");
            } else {
              setUsernameErrorMessage("");
            }
          }}
          id="full-name"
          type="text"
          value={fullNameInput}
        />
        <span style={{ color: "red" }}>{usernameErrorMessage}</span>

        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPasswordInput(e.target.value)}
          id="password"
          type="password"
          value={passwordInput}
        />
        <span style={{ color: "red" }}>{passwordErrorMessage}</span>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FormPage;
