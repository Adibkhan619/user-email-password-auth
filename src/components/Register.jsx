import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError(
        "Password should be at least 6 characters long or longer"
      );
      return;
    }else if(!/[A-Z]/.test(password)){
        setRegisterError('Your password should have at least one uppercase letter');
        return;
    }

    // ---------------create user---------------------
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(result.user.email);
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <h1 className="my-7">Please Register</h1>
      <form className="space-y-6" onSubmit={handleRegister}>
        <input
          className=" p-4 rounded-lg w-3/4"
          type="text"
          placeholder=" Email"
          name="email"
          required
        />{" "}
        <br />
        <div className="relative">
            <input
          className=" p-4 rounded-lg w-3/4"
          type={showPass ? 'text' : 'password'}
          placeholder=" Password"
          name="password"
          required
        />{" "} 
        <span className="absolute right-20 top-5" onClick={() => setShowPass(!showPass)}>{showPass ? <IoMdEyeOff /> : <IoMdEye />}
</span>
        </div>
        
        
       
        <br />
        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && (
          <p className="text-green-500">{success} added successfully</p>
        )}
        <input
          className="btn btn-secondary w-3/4"
          type="submit"
          value="Register"
          name="submit"
        />{" "}
        <br />
      </form>
    </div>
  );
};

export default Register;
