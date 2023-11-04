

import { useNavigate } from "react-router-dom";
import Container from "../../components/shared/Container";
import Main from "../../components/shared/Main";
const Dashboard = ()=>{
    const redirect = useNavigate()

    const userToken = localStorage.getItem('userToken')
    if(!userToken){
  
      redirect('/auth/login')
    }
    return (

        <div>
            <Container >
        <Main/>
            </Container>
        </div>
    )
}

export default Dashboard