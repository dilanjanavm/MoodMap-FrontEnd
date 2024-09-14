import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {
    Card,
    CardBody,
    Container,
    Form,
    FormFeedback,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
    Col, CardHeader, Button,
} from "reactstrap";
import * as Yup from "yup";
import {useFormik} from "formik";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {Draggable} from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import BootstrapTheme from "@fullcalendar/bootstrap";
import Flatpickr from "react-flatpickr";
import DeleteModal from "../../components/Common/DeleteModal.jsx";
import {getDiaryDetails, saveDiaryDetails} from "../../service/diaryService.js";
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, XAxis, YAxis, Bar, BarChart} from "recharts";
import moment from "moment";
import {customToastMsg} from "../../utils/CommonFun.jsx";
import {BarChart2} from 'react-feather'
import {useNavigate} from 'react-router-dom'
import {useRecoilState} from "recoil";
import {loaderState} from "../../state/loaderState.jsx";
const Calendar = () => {
    document.title = "Calendar | Velzon - React Admin & Dashboard Template";
const navigate =useNavigate()
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useRecoilState(loaderState);
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedNewDay, setSelectedNewDay] = useState(0);
    const [isEdit, setIsEdit] = useState(false);
    const [isEditButton, setIsEditButton] = useState(true);
    const [calendarEvents, setCalendarEvents] = useState([]);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [text, setText] = useState("");

    const colorMap = {
        joy: 'rgb(255,247,188)',      // Gold
        sadness: '#cbe5ff',  // DodgerBlue
        anger: '#ffc8be',    // Tomato
        surprise: '#ffd6eb', // HotPink
        fear: 'rgba(206,206,206,0.43)',     // SlateGray
        disgust: '#d2ffd2',  // LimeGreen
        shame: '#e9d0ff',    // BlueViolet
        natural: '#bfc4cc',  // LightSteelBlue
    };


    useEffect(() => {
        getCurrentDiaryRecords()
    }, []);

    const getCurrentDiaryRecords = () => {
        setIsLoading(true)
        getDiaryDetails().then(data => {
            const events = data.data.map((report) => ({
                id: report.id,
                title: report.content.length < 80 ? report.content : report.content.substring(0, 80) + '...',
                title_Emotion: report.main_emotion,
                title_Emotion_percentage: (report.main_emotion_percentage * 100).toFixed(2),
                start: report.created_at, // Calendar uses the "start" field for event date
                description: report.content,
                emotionReports: report.emotion_reports, // Store full emotion details for later use
                allDay: true,
                backgroundColor: colorMap[report.main_emotion] || '#808080',
            }));
            setCalendarEvents(events);
            setIsLoading(false)
        }).catch(err => {
            console.error('Error fetching diary records:', err);
        });
    };


    useEffect(() => {
        new Draggable(document.getElementById("external-events"), {
            itemSelector: ".external-event",
        });
    }, []);

    const toggle = () => {
        setModal(!modal);
        if (modal) {
            setEvent(null);
            setIsEdit(false);
            setIsEditButton(true);
            setText("");
        }
    };

    const handleDateClick = (arg) => {
        const date = arg["date"];
        const modifiedDate = new Date(date);
        setSelectedNewDay(date);
        setSelectedDay(modifiedDate);
        let formatDate = moment(modifiedDate).format('YYYY-MM-DD')
        setSelectedDate(formatDate);
        toggle();
    };

    const renderEventContent = (eventInfo) => {
        return (
            <div className='diary_details'>
                <strong
                    className={`${eventInfo.event._def.extendedProps.title_Emotion}-bg d-flex text-start`}>{eventInfo.event._def.extendedProps.title_Emotion.toUpperCase()}</strong> {/* Add the main emotion */}
                <p className='text-secondary text-start'>{eventInfo.event.title}</p>
                {/* Show the event content */}
            </div>
        );
    };

    const handleEventClick = (arg) => {
        const clickedEvent = arg.event;
        setEvent(clickedEvent);
        setIsEdit(true);
        setIsEditButton(false);
        toggle();
    };

    const handleDeleteEvent = () => {
        setDeleteModal(false);
        toggle();
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        const diaryEntry = {
            text: text,
            selected_dairy_date: selectedDate,
        };

        saveDiaryDetails(diaryEntry).then(res => {
            customToastMsg('Your Dairy Details successfully added', 1);
            getCurrentDiaryRecords()
            toggle()
        }).catch(
            c => {
                customToastMsg('Something went wrong', 1)
                toggle()
            }
        )

    };
    const EmotionBarChart = ({emotionData, mainEmotion}) => {

        const brightColors = [
            "#e50000", // Bright Pink
            "#228B22", // Bright Blue
            "#4B0082", // Bright Yellow
            "#FFD700", // Orange
            "#4BC0C0", // Teal
            "#1E90FF", // Purple
            "#FFB6C1", // Another Pink shade
            "#ff00b7", // Bright Red-Orange
        ];

        // Format the data for BarChart
        const chartData = emotionData.map((emotion, index) => ({
            name: emotion.emotion_name.toUpperCase(),
            percentage: emotion.emotion_percentage * 100, // Convert to percentage
            color: brightColors[index % brightColors.length], // Assign color from the bright palette
        }));

        return (
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar dataKey="percentage" fill="#8884d8">
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color}/>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        );
    };

    return (
        <React.Fragment>
            <DeleteModal
                show={deleteModal}
                onDeleteClick={handleDeleteEvent}
                onCloseClick={() => setDeleteModal(false)}
            />
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xs={12}>
                            <Row>

                                <div id="external-events">

                                </div>

                                <Col xl={6} className='d-flex mb-4 justify-content-start'>
                                    <h3> Welcome to MoodMap Dairy!</h3>
                                </Col>

                                <Col className='d-flex mb-4 justify-content-end' xl={6}>
                                    <Button onClick={()=>{

                                        navigate('/monitoring')
                                    }} className='add-dairy-btn'> <BarChart2/> Check your Emotion Map </Button>
                                </Col>


                                <Col xl={12}>
                                    <Card className="card-h-100">
                                        <CardBody>
                                            <FullCalendar
                                                plugins={[
                                                    BootstrapTheme,
                                                    dayGridPlugin,
                                                    interactionPlugin,
                                                    listPlugin,
                                                ]}
                                                initialView="dayGridMonth"
                                                slotDuration={"00:15:00"}
                                                handleWindowResize={true}
                                                themeSystem="bootstrap"
                                                headerToolbar={{
                                                    left: "prev,next today",
                                                    center: "title",
                                                    right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                                                }}
                                                events={calendarEvents} // Use mapped diary reports as events
                                                eventContent={renderEventContent}
                                                editable
                                                droppable
                                                selectable
                                                dateClick={handleDateClick}
                                                eventClick={handleEventClick} // Show modal when event is clicked
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Modal isOpen={modal} size='lg' id="event-modal" centered>
                                <ModalHeader
                                    toggle={toggle}
                                    tag="h5"
                                    className="p-3  modal-title"
                                >
                                    {isEdit ? "What did you think" : "Add Event"}
                                </ModalHeader>
                                <ModalBody>
                                    {isEdit ? (
                                        <div>
                                            <Row>
                                                <Col className='mb-4' sm={12} lg={12}>
                                                    <Card
                                                        className={`${event.extendedProps.title_Emotion}-bottom-border`}>
                                                        <CardHeader><strong>Your Diary Note</strong></CardHeader>
                                                        <CardBody>
                                                            <p>{event.extendedProps.description}</p>
                                                        </CardBody>
                                                    </Card>
                                                </Col>

                                                <Col sm={12} lg={12}>
                                                    <Card>
                                                        <CardHeader><strong>Emotion Breakdown:</strong></CardHeader>
                                                        <CardBody>
                                                            <EmotionBarChart mainEmotion={event.extendedProps}
                                                                             emotionData={event?.extendedProps?.emotionReports}/>

                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>


                                        </div>
                                    ) : (
                                        <Form
                                            className="needs-validation"
                                            name="event-form"
                                            id="form-event"
                                            onSubmit={handleSubmit} // Call handleSubmit on form submit
                                        >
                                            {/* Textarea for diary entry */}
                                            <div className="mb-3">
                                                <Label className="form-label">Diary Entry</Label>
                                                <Input
                                                    type="textarea"
                                                    name="text"
                                                    id="diary-text"
                                                    rows="5"
                                                    placeholder="Write your diary entry here..."
                                                    value={text}
                                                    onChange={(e) => setText(e.target.value)} // Update state on change
                                                    required
                                                />
                                            </div>

                                            {/* Date Picker */}
                                            <div className="mb-3">
                                                <Label className="form-label">Select Date</Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    value={selectedDate}
                                                    onChange={(date) => setSelectedNewDay(date)}
                                                    options={{dateFormat: "Y-m-d"}}
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <div className="hstack gap-2 justify-content-end">
                                                {isEditButton && (
                                                    <Button type="submit" className='add-dairy-btn' id="btn-save-event">
                                                        Add into your Diary
                                                    </Button>
                                                )}
                                            </div>
                                        </Form>
                                    )}
                                </ModalBody>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Calendar;
