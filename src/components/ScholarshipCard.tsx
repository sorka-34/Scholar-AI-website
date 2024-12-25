import { FC } from 'react'
import { FaCalendarAlt, FaFileAlt, FaFlag, FaStar } from 'react-icons/fa';
import { FaHandHoldingDollar } from 'react-icons/fa6';
 
interface ScholarshipCardProps{
    title: string;
    country: string;
    degree: string;
    funding: string;
    deadline: string;
    open: string;
    keyBenefits: string;
    requiredExams: string;
    compatibility?: string;
}

const ScholarshipCard: FC<ScholarshipCardProps> = (props) => {

    return(
        <div className='card card2' >
            <h2>{props.title}</h2>
            <div className='tags'>
              <span className='tag'>{props.degree}</span>
              <span className='tag'>{props.open}</span>
            </div>
            <span><FaFlag /><p>Country: {props.country}</p></span>
            <span><FaHandHoldingDollar /><p>Funding: {props.funding}</p></span>
            <span><FaStar /><p>Key Benefits: {props.keyBenefits}</p></span>
            <span><FaFileAlt /><p>Required Exams: {props.requiredExams}</p></span>
            <span><FaCalendarAlt /><p>Deadline: {props.deadline}</p></span>
            <button className='btn'>Apply now</button>
        </div>
    )
}

export default ScholarshipCard