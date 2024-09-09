// src/components/LoginForm.js
import axios from "axios";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email: formData.email, password: formData.password });

    axios
      .post("http://localhost:3000/api/users/login", { email: formData.email, password: formData.password })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert("Login successful");
          localStorage.setItem("token", res.data.token);
        }
        if (res.status === 400) {
          alert("Invalid credentials")
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="card w-full max-w-2xl bg-base-100 shadow-md mx-auto">
      <div className="card-body transition-all duration-500 ease-in-out">
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
