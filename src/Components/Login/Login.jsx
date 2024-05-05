import { useState, useEffect } from "react";
import { Button, Input, InputGroup, InputRightElement, FormControl, FormLabel, IconButton, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Center,  Box, } from "@chakra-ui/react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { loginLoading, loginError, loginSuccess, loginUserLoading, loginUserSuccess, loginUserError } from "../../Features/Login/actions";
import { registerSuccess } from "../../Features/Register/actions";
import { useNavigate,Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const [user, setUser] = useState([]);
  const [logStatus, setLogStatus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const Navigate = useNavigate();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => ({
    users: state.loginState.users,
  }));

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    dispatch(loginLoading());
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(loginSuccess(data));
      })
      .catch((error) => {
        console.log("Error:", error);
        dispatch(loginError());
      });
  };

  const postLoginData = () => {
    dispatch(loginUserLoading());
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(loginUserSuccess(data));
        setLogStatus(true);
      })
      .catch((error) => {
        console.log(error)
        dispatch(loginUserError());
      });
  };

  const handleClickOpen = () => {
    const foundUser = users.find((user) => user.email === form.email);
    if (!foundUser || foundUser.password !== form.password) {
      setIsOpen(true);
    } 
    else {
      postLoginData();
    }
  };

  const handleRegister = () => {
    dispatch(registerSuccess(false));
  };

  const handleEmailChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setUser(users.filter((user) => user.email === value));
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (logStatus) {
    localStorage.setItem("userData", JSON.stringify(user[0]));
    localStorage.setItem("logedin", true);
    return <Navigate to={"/"} />;
  }

  return (
    <Center minH="60vh" mb="50px">
      <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
        <div className="formLog">
          <div className="staticTextOne">Welcome back!</div>
          <br />
          <div className="staticTextTwo">Sign in with the same info</div>

          <FormControl size="md" sx={{ m: "auto", mt: "20px", mb: "10px", width: "350px" }}>
            <FormLabel fontSize="12px">Email</FormLabel>
            <Input fontSize="12px" name="email" onChange={handleEmailChange} />
          </FormControl>

          <FormControl size="md" sx={{ m: "auto", mt: "10px", mb: "10px", width: "350px" }}>
            <FormLabel fontSize="12px">Password</FormLabel>
            <InputGroup>
              <Input
                fontSize="12px"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handlePasswordChange}
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
          <div className="staticTextThree">Forgot password?</div>
          <br />
          <div className="staticTextFour">
            <input className="checkBox" type="checkbox" />
            <label> Keep me signed in.</label>
          </div>
            <br />
          <Button onClick={handleClickOpen} className="signInButton" variant="solid" size="md" backgroundColor="black"  margin="0% 35%" color="white" mt="4">Sign in</Button>


          <AlertDialog isOpen={isOpen} leastDestructiveRef={undefined} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Alert
                </AlertDialogHeader>

                <AlertDialogBody>
                  {form.email === "" || form.password === ""
                    ? "Please enter the Email and Password"
                    : user.length === 0
                    ? "Invalid email id"
                    : "Invalid Password"}
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button colorScheme="red" onClick={onClose}>
                    Try again
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
            
          <br /> <br />
          <div className="staticTextTwo">
            Dont have an account ? 
            <Link to={"/register"} onClick={handleRegister}>
              Register
            </Link>
          </div>
        </div>
      </Box>
    </Center>
  );
};

export default Login;
