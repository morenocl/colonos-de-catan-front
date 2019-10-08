import { useState } from "react";
import { login } from "../utils/httpService";

const useLoginForm = () => {
  const [inputs, setInputs] = useState({});

  async function handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    try {
      // await "holds" the execution until the async function completes
      const loginResponse = await login({
        username: inputs.username,
        password: inputs.password
      });
      if (
        loginResponse.user &&
        loginResponse.user.username &&
        loginResponse.token
      ) {
        alert(`User Logged! 
          Name: ${loginResponse.user.username}
          Token: ${loginResponse.token}`);
      }
    } catch (error) {
      alert(error);
    }
  }

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.id]: event.target.value
    }));
  };

  const validate = (username, password) => {
    return username && username.length > 0 && (password && password.length > 0);
  };

  return {
    handleSubmit,
    handleInputChange,
    validate,
    inputs
  };
};
export default useLoginForm;
