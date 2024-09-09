import { createContext } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const login = ({ email, password }) => {
    console.log(email, password);
  };

  const register = (formData) => {
    const {
      email,
      password,
      role,
      industry,
      skills,
      fname,
      lname,
      yearsOfExperience,
      calendlyLink,
      areaOfInterest,
    } = formData;
    axios
      .post("http://localhost:3000/api/users/register", {
        name: { fname, lname },
        email,
        password,
        role,
        industry,
        skills,
        yearsOfExperience,
        calendlyLink,
        areaOfInterest,
      })
      .then((res) => {
        console.log(res.data);
        if(res.status === 200){
          alert("Registration successful");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userID", JSON.stringify(res.data.uid));
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider value={{ login, register }}>
      {children}
    </UserContext.Provider>
  );
};
