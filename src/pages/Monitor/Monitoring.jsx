import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import '../../styles/Monitoring.css';
import greenC from '../../assets/calenderGreenCircle.png';
import purpleC from '../../assets/calenderPurpleCircle.png';
import {useEffect, useState} from 'react';
import 'flatpickr/dist/themes/confetti.css';
import Flatpickr from "react-flatpickr";
import {getReportForByDateRange} from "../../service/reportService.js";
import moment from "moment";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    Label
} from 'recharts';

const Monitoring = () => {
    const [diaryData, setDiaryData] = useState(null);
    const [overallReport, setOverallReport] = useState([]); // Add this to store overall report
    const [detailedReports, setDetailedReports] = useState([]);
    const [dateRange, setDateRange] = useState([]);

    useEffect(() => {
    }, []);

    const handleDateChange = (selectedDates) => {
        setDateRange(selectedDates);
        if (selectedDates.length === 2) {
            getReportDetails();
        }
    };

    const getReportDetails = () => {
        let data = {
            "start_date": moment(dateRange[0]).format('YYYY-MM-DD'),
            "end_date": moment(dateRange[1]).format('YYYY-MM-DD')
        };

        getReportForByDateRange(data).then(res => {
            formatChartData(res.detailed_reports);
            setOverallReport(res.overall_report);
        });
    };

    const formatChartData = (reports) => {
        let formattedData = [];
        reports.anger.forEach((entry, index) => {
            let date = entry.date;
            formattedData.push({
                date,
                Anger: reports.anger[index]?.value * 100 || 0,
                Disgust: reports.disgust[index]?.value * 100 || 0,
                Fear: reports.fear[index]?.value * 100 || 0,
                Joy: reports.joy[index]?.value * 100 || 0,
                Natural: reports.natural[index]?.value * 100 || 0,
                Sadness: reports.sadness[index]?.value * 100 || 0,
                Shame: reports.shame[index]?.value * 100 || 0,
                Surprise: reports.surprise[index]?.value * 100 || 0
            });
        });
        setDetailedReports(formattedData);
    };

    const overallReportData = overallReport
        ? Object.keys(overallReport).map(emotion => ({
            emotion,
            percentage: (overallReport[emotion] * 100).toFixed(2) // Convert to percentage
        }))
        : [];

    return (
        <section className='monitoringSection'>
            <img src={purpleC} alt="Purple Circle Image" className='monitorPC'/>
            <img src={greenC} alt="Green Circle Image" className='monitorGC'/>

            <Container className='monitoringBottom' style={{minWidth: '100%', padding: '0 50px'}}>
                <Row>
                    <Col className='text-start mx-5 mb-4' sm={12} lg={12}>
                        <h3>Analysis Emotion Patterns using Diary</h3>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-start mx-5 mb-4' sm={3} md={5} lg={4}>
                        <small className='text-secondary'>
                            Select Date range that you want to monitor your emotions
                        </small>
                        <Flatpickr
                            options={{mode: 'range', dateFormat: 'Y-m-d'}}
                            className="form-control"
                            placeholder="Select Date Range"
                            onChange={handleDateChange}
                        />
                    </Col>
                </Row>

                {detailedReports.length > 0 && (
                    <Row>
                        <Col sm={12} lg={8} xl={8} className="mt-4">
                            <h4>Detailed Emotion Distribution</h4>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart
                                    data={detailedReports}
                                    margin={{top: 20, right: 30, left: 20, bottom: 5}}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="date" padding={{left: 30, right: 30}}>
                                        <Label value="Date" offset={-5} position="insideBottom"/>
                                    </XAxis>
                                    <YAxis>
                                        <Label value="Percentage (%)" angle={-90} position="insideLeft"/>
                                    </YAxis>
                                    <Tooltip/>
                                    <Legend/>
                                    <Line type="monotone" dataKey="Anger" stroke="#ad0000" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="Disgust" stroke="#228B22"/>
                                    <Line type="monotone" dataKey="Fear" stroke="#4B0082"/>
                                    <Line type="monotone" dataKey="Joy" stroke="#FFD700"/>
                                    <Line type="monotone" dataKey="Natural" stroke="#87CEEB"/>
                                    <Line type="monotone" dataKey="Sadness" stroke="#1E90FF"/>
                                    <Line type="monotone" dataKey="Shame" stroke="#FFB6C1"/>
                                    <Line type="monotone" dataKey="Surprise" stroke="#ff00b7"/>
                                </LineChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col md={4} lg={4} className="mt-4">
                            <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur assumenda
                                cupiditate, deleniti deserunt enim esse est exercitationem explicabo harum illo ipsam,
                                itaque labore officia quaerat rem sequi temporibus unde voluptates.</p>
                            <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur assumenda
                                cupiditate, deleniti deserunt enim esse est exercitationem explicabo harum illo ipsam,
                                itaque labore officia quaerat rem sequi temporibus unde voluptates.</p>
                        </Col>

                        {overallReport && (
                            <Col sm={12} lg={8} xl={8} className="mt-5">
                                <h4>Overall Emotion Distribution</h4>
                                <ResponsiveContainer width="100%" height={400}>
                                    <BarChart
                                        data={overallReportData}
                                        margin={{top: 20, right: 30, left: 20, bottom: 5}}
                                    >
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="emotion">
                                            <Label value="Emotion" offset={-5} position="insideBottom"/>
                                        </XAxis>
                                        <YAxis>
                                            <Label value="Percentage (%)" angle={-90} position="insideLeft"/>
                                        </YAxis>
                                        <Tooltip/>
                                        <Legend/>
                                        <Bar dataKey="percentage" fill="#82ca9d"/>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                        )}


                        <Col md={4} lg={4} className="mt-5">
                            <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur assumenda
                                cupiditate, deleniti deserunt enim esse est exercitationem explicabo harum illo ipsam,
                                itaque labore officia quaerat rem sequi temporibus unde voluptates.</p>
                            <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Aspernatur assumenda
                                cupiditate, deleniti deserunt enim esse est exercitationem explicabo harum illo ipsam,
                                itaque labore officia quaerat rem sequi temporibus unde voluptates.</p>
                        </Col>
                    </Row>
                )}

                {detailedReports.length > 0 && <Col sm={12} md={12} lg={12} style={{margin: '5rem 0 0 0'}}>
                    <h3>Suggestions to Improve Your Mood</h3>
                    <Row style={{margin: '2rem 0 4rem 0'}}>
                        <Col md={3} lg={3}>
                            <Card style={{height: '10rem'}} className='w-100  '>
                                <CardBody>
                                    Let's Listen for a song
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>}
                <Row>
                </Row>
            </Container>
        </section>
    );
};

export default Monitoring;
