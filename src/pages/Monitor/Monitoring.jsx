import {Card, CardText, CardTitle, Col, Container, Row} from 'reactstrap';
import '../../styles/Monitoring.css';
import backbtn from '../../assets/calenderbck.png';
import nextbtn from '../../assets/calendernxt.png';
import greenC from '../../assets/calenderGreenCircle.png';
import purpleC from '../../assets/calenderPurpleCircle.png';
import {useEffect, useState} from 'react';
import MonitoringChart from '../../components/pageComponents/MonitoringChart.jsx';
import {useLocation} from "react-router-dom";
import {getDiaryDetailsById} from "../../service/diaryService.js";

const Monitoring = () => {
    const location = useLocation();
    const [diaryId, setDiaryId] = useState(0);
    const [diaryData, setDiaryData] = useState(null); // State to hold the fetched diary data
    const [currentDate, setCurrentDate] = useState(new Date());
    const [chartData, setChartData] = useState([]); // State to hold the transformed chart data

    useEffect(() => {
        const id = location.state.diaryId;
        setDiaryId(id);
        getDateDetails(id);
    }, [location.state.diaryId]);

    const getDateDetails = (id) => {
        getDiaryDetailsById(id).then(res => {
            const diaryEntry = res.data;
            setDiaryData(diaryEntry); // Store the diary data into state

            // Transform emotion_reports into the format expected by the chart
            const formattedData = diaryEntry.emotion_reports.map(report => ({
                name: report.emotion_name,
                Percentage: (report.emotion_percentage * 100).toFixed(2) // Convert to percentage
            }));

            setChartData(formattedData); // Set the transformed chart data
        }).catch(err => {
            console.error('Error fetching diary details:', err);
        });
    };

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
        const options = {year: 'numeric', month: 'short'};
        return date.toLocaleDateString('en-US', options).toUpperCase();
    };

    return (
        <section className='monitoringSection'>
            <img src={purpleC} alt="Purple Circle Image" className='monitorPC'/>
            <img src={greenC} alt="Green Circle Image" className='monitorGC'/>

            <Container className='monitoringBottom' style={{minWidth: '100%', padding: '0 50px'}}>
                <Row>
                    <Col className='text-start mx-5 mb-4' sm={12} lg={12}>
                        <h3>Diary Entry for {new Date(diaryData?.created_at).toDateString()}</h3>
                    </Col>
                </Row>

                <Row>
                    <Col sm='6' md='6' lg='6' xl='6'>
                        <MonitoringChart data={chartData}/>
                    </Col>
                    <Col sm='6' md='6' lg='6' xl='6'>
                        {diaryData && (
                            <div className='diaryDetails'>
                                <Card
                                    body
                                    className="my-2 diaryDetails-card"
                                    style={{
                                        width: '100%'
                                    }}
                                >
                                    <CardTitle tag="h5">
                                        Content
                                    </CardTitle>
                                    <CardText>
                                        {diaryData.content}
                                    </CardText>

                                </Card>

                                <p><strong>Main Emotion:</strong> {diaryData.main_emotion}</p>

                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Monitoring;
