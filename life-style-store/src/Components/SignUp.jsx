import { Button, Container, Input, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Tempcontext";
import { Link } from "react-router-dom";


function SignUp() {
  const [formData, setFormData] = useState({
    email: '', 
    password: '', 
    username: '' 
});
const navigate = useNavigate();
const { setisAuth } = useContext(AuthContext);

function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data =>{
      setisAuth(true);
      navigate("/home");
      console.log(data);
    })
}

function handleChange(e) {
    setFormData({...formData, [e.target.name] : e.target.value})
}

  return (
    <div>
      <Container maxW="md" className="form-ls">
        <Stack>
          <form className='login-form' onSubmit={e => handleSubmit(e)}>
            <div>
              <Input
                type='text' placeholder='Username' value={formData.username} name='username' onChange={e => handleChange(e)} 
              />
            </div>
            <div>
              <Input
                type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} 
              />
            </div>
            <div>
              <Input
                type='text' placeholder='********' value={formData.password} name='password' onChange={e => handleChange(e)}
              />
            </div>
            <div>
              <Button bgColor="orange" color="white" className='login-btn' type='submit'>
                SUBMIT
              </Button>
            </div>
          </form>
        </Stack>
        <Link to="/login" className="link">Already have account?</Link>
      </Container>
    </div>
  );
}
export default SignUp;
