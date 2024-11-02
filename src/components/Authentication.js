import { Link,useNavigate} from 'react-router-dom'
import { useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { loginUser } from '../redux/userRelated/userHandle'
import styled from 'styled-components'

const Authentication = () => {
    const { status,error } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate=useNavigate()
   
    const handleSubmit = event => { 
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const fields = { email, password }
        console.log(fields)
        dispatch(loginUser(fields))
    }
    useEffect(() => { 
        if (status === 'Success') {
            navigate('/')
         }
        
    }, [status, navigate])
console.log(status)
    return (
   <Container>
        <Login>
            
        <Img src="https://res.cloudinary.com/df7wnybwg/image/upload/v1730351090/vibehubadmin/vibehublogo_cwq9jj.png" alt="logo"/>
            <Form onSubmit={handleSubmit}>
               
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' name="email" placeholder='email'/>
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' id='password' name="password" placeholder='password'/>
                <LoginButton type='submit'>Login</LoginButton>
                <p>{ error}</p>
                <p>Don't have account <Link to="/signup">signup</Link> </p>
                </Form>
            


            </Login>
            </Container>
    )
  
    
        
}
export default Authentication

export const Container = styled.div`
display:flex;
justify-content:center;
align-items: center;
min-height:100vh;
height:100%;
`

export const Login=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
box-shadow: 4px 4px 10px 2px black;
padding:25px 50px 25px 50px;
border-radius:10px;
background-color:white;
`
export const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center
`
export const LoginButton = styled.button`
background-color:rgb(14, 50, 235);
color:White;
width:200px;
border:0px solid;
border-radius:10px;
height:40px;
`
export const Label = styled.label`
align-self:flex-start;
margin-bottom:10px;
`
export const Input = styled.input`
margin-bottom:20px;
border-radius:5px;
height:30px;
width:200px;
border:1px solid black;
`
export const Img = styled.img`
border-radius:25px 25px 25px 25px;
height:50px;
width:50px;
`