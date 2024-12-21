import { FC } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Profile: FC = () => {
    return(
        <>
            <Navbar />

            <section>
                <h1>Profile</h1>
            </section>
            
            <Footer />
        </>
    )
}

export default Profile