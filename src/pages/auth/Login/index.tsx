import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../../atoms/forms/Button";
import Input from "../../../atoms/forms/Input";
import {H1} from "../../../atoms/Typography";
import AuthLayout from "../../../templates/AuthLayout";

const Login = () => {
  const navigate = useNavigate();
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });
  return (
    <AuthLayout>
      <div className="h-full flex flex-col max-w-[400px] w-full mx-auto justify-center">
        <H1>Login</H1>
        <p className="text-skyBlue text-lg mt-1 mb-10">Welcome to CV Online</p>
        <form action="" className="space-y-4 flex flex-col">
          <Input
            label="Email Address"
            value={formField.email}
            onChange={e => setFormField({...formField, email: e.target.value})}
          />
          <Input
            type="password"
            label="Password"
            value={formField.password}
            onChange={e =>
              setFormField({...formField, password: e.target.value})
            }
          />
          <p className=" flex self-end pb-12 text-cvGreen font-light text-sm cursor-pointer max-w-max">
            Forgot password?
          </p>
          <Button onClick={() => navigate("/dashboard")}>Login</Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
