import { useContext, useState } from "react";
import { Button, Input, InputGroup, InputRightElement, FormControl, FormLabel, IconButton, Center, Box } from "@chakra-ui/react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../Loader";
import { SignUpContext } from "../../Context/SignupContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();
  const { handleLogin } = useContext(SignUpContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickOpen = () => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Invalid email or password");
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("loggedIn", true);
        handleLogin();
        toast.success("Login successful!");
        setTimeout(() => {
          Navigate("/ProductPage");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        toast.error("Login failed. Please try again.");
      });
  };
  
  

  return (
    <Center minH="60vh" mb="50px">
      <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
        {isLoading && <Loader />}
        <div className="formLog">
          <div className="staticTextOne">Welcome back!</div>
          <br />
          <div className="staticTextTwo">Sign in with the same information</div>

          <FormControl size="md" sx={{ m: "auto", mt: "20px", mb: "10px", width: "350px" }}>
            <FormLabel fontSize="12px">Email</FormLabel>
            <Input fontSize="12px" name="email" value={form.email} onChange={handleInputChange} />
          </FormControl>

          <FormControl size="md" sx={{ m: "auto", mt: "10px", mb: "10px", width: "350px" }}>
            <FormLabel fontSize="12px">Password</FormLabel>
            <InputGroup>
              <Input
                fontSize="12px"
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleInputChange}
              />
              <InputRightElement>
                <IconButton
                  aria-label="Toggle password visibility"
                  size="sm"
                  onClick={handleShowPassword}
                  variant="ghost"
                  colorScheme="blue"
                  icon={showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button onClick={handleClickOpen} className="signInButton" variant="solid" size="md" backgroundColor="black" margin="0% 35%" color="white" mt="4" disabled={isLoading}>Sign in</Button> {/* Disable button while loading */}

          <br /> <br />
          <div className="staticTextTwo">
            Do not have an account?
            <Link to={"/register"}>
              Register
            </Link>
          </div>
        </div>
      </Box>
      <ToastContainer />
    </Center>
  );
};

export default Login;
