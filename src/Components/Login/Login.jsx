import { useState } from "react";
import { Button, Input, InputGroup, InputRightElement, FormControl, FormLabel, IconButton, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Center, Box } from "@chakra-ui/react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../Loader";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

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
        Navigate("/ProductPage");
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
        setIsOpen(true);
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
          
          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined} onClose={() => setIsOpen(false)}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Alert
                </AlertDialogHeader>

                <AlertDialogBody>
                  {errorMessage}
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button colorScheme="red" onClick={() => setIsOpen(false)}>
                    Try again
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

          <br /> <br />
          <div className="staticTextTwo">
            Do not have an account?
            <Link to={"/register"}>
              Register
            </Link>
          </div>
        </div>
      </Box>
    </Center>
  );
};

export default Login;
