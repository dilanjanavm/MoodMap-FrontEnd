import { Col, Container, Row } from 'reactstrap'
import '../../styles/Calender.css'
import backbtn from '../../assets/calenderbck.png';
import nextbtn from '../../assets/calendernxt.png';
import greenC from '../../assets/calenderGreenCircle.png'
import purpleC from '../../assets/calenderPurpleCircle.png'
import { useState } from 'react';
import CalenderCard from '../pageComponents/CalenderCard';


const Calender = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePreMonth = () => {
        setCurrentDate(prevDate => {
            const prevMonth = prevDate.getMonth() - 1;
            const year = prevMonth < 0 ? prevDate.getFullYear() - 1 : prevDate.getFullYear();
            return new Date(year, (prevMonth + 12) % 12);
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => {
            const nextMonth = prevDate.getMonth() + 1;
            const year = nextMonth > 11 ? prevDate.getFullYear() + 1 : prevDate.getFullYear();
            return new Date(year, nextMonth % 12);
        });
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options).toUpperCase();
    };


    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const daysArray = Array(firstDayOfMonth).fill(null).concat(
        Array.from({ length: daysInMonth }, (_, i) => i + 1)
    );


    return (
        <section className='CalenderSection'>
            <img src={purpleC} alt="Purple Circle Image" className='calenderPC' />
            <img src={greenC} alt="Green Circle Image" className='calenderGC' />
            <Container fluid >
                <Row>
                    <Col sm='12' md='12' lg='12' xl='12'>
                        <div className='calenderTop'>
                            <div>
                                <h1>Hy, Dilanjana</h1>
                                <h3>How is your day?</h3>
                            </div>
                            <div className='calenderSwitch'>
                                <img src={backbtn} alt="back button" onClick={handlePreMonth} />
                                <span>{formatDate(currentDate)}</span>
                                <img src={nextbtn} alt="next button" onClick={handleNextMonth} />
                            </div>
                        </div>
                    </Col>
                    <Col sm='12' md='12' lg='12' xl='12'>
                        <div className='calenderBottom'>
                            <div className='calendarGrid'>
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                                    <div key={index} className='dayHeader'>{day}</div>
                                ))}
                                {daysArray.map((day, index) => (
                                    <div key={index} className={`dayCell ${day ? 'filled' : ''}`}>
                                        {day}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <CalenderCard day={'Monday'} message={'Make sure that the number of labels matches the number of probability values returned by the model. Adjust the labels list to fit the specific labels used by your model.'} date={'03/05/2024'}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Calender