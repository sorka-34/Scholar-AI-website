import { FC } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Login: FC = () => {
    return(
        <>
            <Navbar />

            <section>
                <h1>Login</h1>
            </section>
            
            <Footer />
        </>
    )
}

export default Login