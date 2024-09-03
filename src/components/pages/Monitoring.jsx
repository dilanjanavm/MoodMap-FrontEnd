import { Col, Container, Row } from 'reactstrap';
import '../../styles/Monitoring.css';
import backbtn from '../../assets/calenderbck.png';
import nextbtn from '../../assets/calendernxt.png';
import greenC from '../../assets/calenderGreenCircle.png';
import purpleC from '../../assets/calenderPurpleCircle.png';
import {  useState } from 'react';
import MonitoringChart from '../pageComponents/MonitoringChart';
import CalendarCardsSection from '../pageComponents/CalendarCardsSection';

const Monitoring = () => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const [currentDate, setCurrentDate] = useState(new Date());

    const generateRandomData = () => [
        { name: 'anger', todo: getRandomInt(1, 10) },
        { name: 'disgust', todo: getRandomInt(1, 10) },
        { name: 'fear', todo: getRandomInt(1, 10) },
        { name: 'joy', todo: getRandomInt(1, 10) },
        { name: 'natural', todo: getRandomInt(1, 10) },
        { name: 'sadness', todo: getRandomInt(1, 10) },
        { name: 'shame', todo: getRandomInt(1, 10) },
        { name: 'surprise', todo: getRandomInt(1, 10) },
    ];

    const monthlyData2024 = [
        { month: 'January', year: 2024, data: generateRandomData() },
        { month: 'February', year: 2024, data: generateRandomData() },
        { month: 'March', year: 2024, data: generateRandomData() },
        { month: 'April', year: 2024, data: generateRandomData() },
        { month: 'May', year: 2024, data: generateRandomData() },
        { month: 'June', year: 2024, data: generateRandomData() },
        { month: 'July', year: 2024, data: generateRandomData() },
        { month: 'August', year: 2024, data: generateRandomData() },
        { month: 'September', year: 2024, data: generateRandomData() },
        { month: 'October', year: 2024, data: generateRandomData() },
        { month: 'November', year: 2024, data: generateRandomData() },
        { month: 'December', year: 2024, data: generateRandomData() }
    ];

   

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

    const currentMonthData = monthlyData2024.find(
        item => item.month === currentDate.toLocaleString('default', { month: 'long' }) && item.year === currentDate.getFullYear()
    );

    const data = currentMonthData ? currentMonthData.data : [];

    return (
        <section className='monitoringSection'>
            <img src={purpleC} alt="Purple Circle Image" className='monitorPC' />
            <img src={greenC} alt="Green Circle Image" className='monitorGC' />
            <div className='monitoringHeader'>
                <h1>Your Current Monitoring Report</h1>
                <div className='monitorSwitch'>
                    <img src={backbtn} alt="Back Button" onClick={handlePreMonth} />
                    <span>{formatDate(currentDate)}</span>
                    <img src={nextbtn} alt="Next Button" onClick={handleNextMonth} />
                </div>
            </div>
            <Container className='monitoringBottom'>
                <Row>
                    <Col sm='6' md='6' lg='6' xl='6'>
                        <MonitoringChart data={data} />
                    </Col>
                    <CalendarCardsSection />
                </Row>
            </Container>
        </section>
    );
};

export default Monitoring;
