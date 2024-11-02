import styled from 'styled-components'
import './index.css'

const SignUp = () => { 
    const submitHandler = () => { 
        return null
    }
    return (
   <Container>
        <SignUpContainer>
        <Img src="https://res.cloudinary.com/df7wnybwg/image/upload/v1730351090/vibehubadmin/vibehublogo_cwq9jj.png" alt="logo"/>
            <Form onSubmit={submitHandler}>
                <h1>SignUp</h1>
                <Label htmlFor='username'>UserName</Label>
                    <Input type='text' id='username'  placeholder='username'/>
                    <Label htmlFor='email' >Email</Label>
                    <Input type='email' id='email' placeholder='email'/>
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' id='password' placeholder='password' />
                <SignUpButton type='submit'>SignUp</SignUpButton>
                
                </Form>
            


            </SignUpContainer>
            </Container>
    )
}

export default SignUp

export const Container = styled.div`
display:flex;
justify-content:center;
align-items: center;
min-height:100vh;
height:100%;
`


export const SignUpContainer=styled.div`
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
export const SignUpButton = styled.button`
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