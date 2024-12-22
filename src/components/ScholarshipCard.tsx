import { FC } from 'react'
 
interface ScholarshipCardProps{
    title: string;
    country: string;
    fundedBy: string;
    degree: string;
    funding: string;
    deadline: string;
    compatibility?: string;
}

const ScholarshipCard: FC<ScholarshipCardProps> = (props) => {
    const formatDate = (date: Date): string => {
        const day: number = date.getDate();
        const month: number = date.getMonth();
        const year: number = date.getFullYear();
      
        let daySuffix: string;
        if (day === 1 || day === 21 || day === 31) {
          daySuffix = 'st';
        } else if (day === 2 || day === 22) {
          daySuffix = 'nd';
        } else if (day === 3 || day === 23) {
          daySuffix = 'rd';
        } else {
          daySuffix = 'th';
        }

        const monthNames: string[] = [
          'January', 'February', 'March', 'April', 'May', 'June', 
          'July', 'August', 'September', 'October', 'November', 'December'
        ];

        return `${day}${daySuffix} ${monthNames[month]} ${year}`;
      };

    const open: boolean = formatDate(new Date()) <= props.deadline
      



    return(
        <div className='card card2' >
            <h2>{props.title}</h2>
            <p>Country: {props.country}</p>
            <p>Funded by: {props.fundedBy}</p>
            <p>Degree: {props.degree}</p>
            <p>Funding: {props.funding}</p>
            <p>Deadline: {props.deadline}</p>
            {open? <span className='open very-high'>Open</span>: <span className='open very-low'>Closed</span>}
            {open && <button className='btn'>Apply now</button>}
        </div>
    )
}

export default ScholarshipCard