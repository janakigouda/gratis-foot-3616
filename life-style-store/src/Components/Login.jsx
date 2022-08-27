import { Button, Container, Input, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Tempcontext";
import { Link } from "react-router-dom";

function Login() {
  const { setisAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '' 
  })
  const navigate = useNavigate();


function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.user.username)
      setisAuth(true);
      navigate("/");
      console.log(data.user)
    })
}

function handleChange(e) {
    setFormData({...formData, [e.target.name] : e.target.value})
}


  return <div>
    <Container maxW="md" className="form-ls">
        <Stack>
          <form className='login-form' onSubmit={e => handleSubmit(e)}>
            <div>
              <Input
                type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} 
              />
            </div>
            <div>
              <Input
                type='text' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)}
              />
            </div>
            <div>
              <Button bgColor="orange" color="white" className='login-btn' type='submit'>
                SUBMIT
              </Button>
            </div>
          </form>
        </Stack>
        <Link to="/signup" className="link">Create Account</Link>
      </Container>
  </div>;
}
export default Login;
