import { useState, useRef } from "react";
import { Button, FormControl, FormLabel, Input, Text, InputGroup, InputRightElement, Center, IconButton, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Box } from "@chakra-ui/react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../Loader";

const initialFormState = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
};

export const Register = () => {
  const [form, setForm] = useState(initialFormState);
  const [openAlert, setOpenAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);

  const handleInputChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleClickOpen = async () => {
    setIsLoading(true); 
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/register`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (res.ok) {
        navigate("/login");
      } 
      else {
        setOpenAlert(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Center minH="60vh" mb="50px">
      <Box bg="white" p="6" rounded="lg" shadow="md">
        {isLoading && <Loader />}
        <div className="formReg">
          <div className="staticTextOne"><Text textAlign="center" fontWeight="bold">Create Account</Text></div>

          <FormControl size="medium" sx={{ m: "auto", mt: "20px", mb: "10px", width: "350px" }} isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleInputChange} />
          </FormControl>

          <FormControl size="medium" sx={{ m: "auto", mt: "10px", mb: "10px", width: "350px" }} isRequired>
            <FormLabel htmlFor="first_name">First name</FormLabel>
            <Input id="first_name" name="first_name" type="text" value={form.first_name} onChange={handleInputChange} />
          </FormControl>

          <FormControl size="medium" sx={{ m: "auto", mt: "10px", mb: "10px", width: "350px" }} isRequired>
            <FormLabel htmlFor="last_name">Last name</FormLabel>
            <Input id="last_name" name="last_name" type="text" value={form.last_name} onChange={handleInputChange} />
          </FormControl>

          <FormControl size="medium" sx={{ m: "auto", mt: "10px", mb: "10px", width: "350px" }} isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleInputChange}
              />
              <InputRightElement>
                <IconButton
                  aria-label="toggle password visibility"
                  size="sm"
                  onClick={handleShowPassword}
                  variant="ghost"
                  colorScheme="blue"
                  icon={showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <div className="staticTextTwo">By creating an account, you agree to our Privacy Policy and Terms & Conditions.</div>

          <Button onClick={handleClickOpen} variant="solid" size="md" backgroundColor="black"  margin="5% 35%" color="white" mt="4" disabled={isLoading}>Create Account</Button> {/* Disable button while loading */}
          
          <AlertDialog isOpen={openAlert} leastDestructiveRef={undefined} onClose={handleCloseAlert}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Alert
                </AlertDialogHeader>

                <AlertDialogBody>
                  {"Email Already Exist or Please fill in all details correctly"}
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button colorScheme="red" onClick={handleCloseAlert}>
                    OK
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

          <div className="staticTextTwo">
            Already have an account? <Link to={"/login"} >Login here</Link>
          </div>
        </div>
      </Box>
    </Center>
  );
};

