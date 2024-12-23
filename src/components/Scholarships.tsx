import { FC } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScholarshipCard  from './ScholarshipCard'
import data from '../assets/scholarshipsData.json'

const scholarshipsList: JSX.Element[] = data.map((scholarship, i) => {
    return(
        <ScholarshipCard 
            key={i}
            title={scholarship.basic_info.title}
            funding={scholarship.basic_info.funding_type.type}
            country={scholarship.basic_info.host_countries.join(" ")}
            degree={scholarship.basic_info.degree_levels.join(" ")}
            deadline={scholarship.basic_info.application_timeline.closing_date}
            fundedBy={scholarship.basic_info.funded_by.primary}
        />
    )
})

const Scholarships: FC = () => {
    return(
        <>
            <Navbar />

            <section>
                <div className='scholarships-container'>
                    {scholarshipsList}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Scholarships