import { useContext, useState } from "react";
import AutoComplete from "./AutoComplete";
import expertise from "../data";
import {
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import  {UserContext}  from "../../../../context/userContext";
import {  useNavigate } from "react-router-dom";

function Register() {
  const { register } = useContext(UserContext);

  const [formData, setFormData] = useState({
    role: "",
    industry: "",
    skills: [],
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    yearsOfExperience: "",
    calendlyLink: "",
    areaOfInterest: [],
  });

  // Create a map for easier lookup
  const expertiseMap = expertise.reduce((map, item) => {
    map[item.industry] = item.skills;
    return map;
  }, {});

  // Set default options
  const [options, setOptions] = useState({
    industry: [...new Set(expertise.map((item) => item.industry))],
    skills: [],
    areaOfInterest: [],
  });

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const [currentStep, setCurrentStep] = useState(1);

  const nav = useNavigate()

  const nextStep = () => {
    if (
      formData.fname === "" ||
      formData.lname === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === "" ||
      formData.role === ""
    ) {
      alert("Please fill in all the fields");
      console.log(formData);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIndustryChange = (event, newValue) => {
    setSelectedIndustry(newValue);
    setFormData({ ...formData, industry: newValue });

    if (newValue && expertiseMap[newValue]) {
      setOptions((prevOptions) => ({
        ...prevOptions,
        skills: [...new Set(expertiseMap[newValue])],
      }));
    } else {
      setOptions((prevOptions) => ({
        ...prevOptions,
        skills: [],
      }));
    }
    setSelectedSkills([]); // Clear selected skills when industry changes
  };

  const handleSkillsChange = (event, newValue) => {
    setSelectedSkills(newValue);
    setFormData({ ...formData, skills: newValue });
  };
  const handleInterestChange = (event, newValue) => {
    setSelectedInterests(newValue);
    setFormData({ ...formData, areaOfInterest: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register(formData);
    setFormData({});
    nav("/")

  };

  return (
    <div className="card w-full max-w-2xl bg-base-100 shadow-md mx-auto">
      <div className="card-body transition-all duration-500 ease-in-out">
        {currentStep === 1 && (
          <section className="flex flex-col gap-4">
            <h3 className="card-title text-2xl font-semibold">
              Register Here!
            </h3>
            <p className="text-sm text-gray-500">
              Fill out the details to create your account.
            </p>
            <div className="w-full">
              <div className="form-control flex flex-row gap-4 my-4 ">
                <TextField
                  type="text"
                  label="First Name"
                  name="fname"
                  variant="standard"
                  onChange={handleChange}
                  className="w-[50%]"
                  value={formData.fname}
                />
                <TextField
                  type="text"
                  label="Last Name"
                  name="lname"
                  variant="standard"
                  onChange={handleChange}
                  className="w-[50%]"
                  value={formData.lname}
                />
              </div>
              <div className="form-control">
                <TextField
                  type="email"
                  label="Enter your email"
                  variant="standard"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            <div className="form-control flex flex-row gap-4 ">
              <TextField
                type="text"
                label="Enter a password"
                name="password"
                variant="standard"
                onChange={handleChange}
                className="w-[50%]"
                value={formData.password}
              />
              <TextField
                type="text"
                label="Re-type password"
                name="confirmPassword"
                variant="standard"
                onChange={handleChange}
                className="w-[50%]"
                value={formData.confirmPassword}
              />
            </div>
            <div className="form-control my-6">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formData.role}
                  label="Role"
                  onChange={handleChange}
                  name="role"
                >
                  <MenuItem value={"mentee"}>Mentee</MenuItem>
                  <MenuItem value={"mentor"}>Mentor</MenuItem>
                </Select>
              </FormControl>
            </div>
          </section>
        )}

        {currentStep === 2 && formData.role === "mentee" && (
          <section>
            <h3 className="card-title text-2xl font-semibold">
              Mentee Information
            </h3>
            <p className="text-sm text-gray-500">
              Provide information as a mentee.
            </p>

            <div className="form-control my-6">
              <AutoComplete
                options={[...new Set(expertise.flatMap((item) => item.skills))]}
                selectedOptions={selectedInterests}
                handleOptionsChange={handleInterestChange}
                label="Areas of Interest"
                placeholder="Select Skills"
                multiple={true}
              />
            </div>
          </section>
        )}

        {currentStep === 2 && formData.role === "mentor" && (
          <section>
            <h3 className="card-title text-2xl font-semibold">
              Mentor Information
            </h3>
            <p className="text-sm text-gray-500">
              Provide information as a mentor.
            </p>
            <div className="gap-4 flex flex-col my-4">
              <div className="form-control">
                <TextField
                  label="Years Of Experience"
                  type="number"
                  onChange={handleChange}
                  name="yearsOfExperience"
                />
              </div>
              <div className="form-control">
                <AutoComplete
                  options={options.industry}
                  selectedOptions={selectedIndustry}
                  handleOptionsChange={handleIndustryChange}
                  label="Industry"
                  placeholder="Select industry"
                  multiple={false}
                />
              </div>
              <div className="form-control">
                <AutoComplete
                  options={options.skills}
                  selectedOptions={selectedSkills}
                  handleOptionsChange={handleSkillsChange}
                  label="Skills"
                  placeholder="Select skills"
                  multiple={true}
                />
              </div>
              <div className="form-control">
                <TextField
                  variant="outlined"
                  label="Calendly Link"
                  type="text"
                  onChange={handleChange}
                  name="calendlyLink"
                />
              </div>
            </div>
          </section>
        )}

        <div className="card-actions justify-between">
          {currentStep > 1 && (
            <button className="btn btn-outline" onClick={prevStep}>
              Previous
            </button>
          )}
          {currentStep === 1 && (
            <button className="btn btn-primary" onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === 2 && (
            <button className="btn btn-primary" onClick={handleSubmit}>
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
