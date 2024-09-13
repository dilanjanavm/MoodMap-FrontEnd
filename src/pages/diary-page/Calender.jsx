
import '../../styles/Calender.css';

import greenC from '../../assets/calenderGreenCircle.png';
import purpleC from '../../assets/calenderPurpleCircle.png';
import {useEffect, useState} from 'react';
 import {getDiaryDetails} from "../../service/diaryService.js";
import CalendarFull from "../CalendarFull/index.jsx";

const Calender = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [diaryRecords, setDiaryRecords] = useState([]);

    useEffect(() => {
        // getCurrentDiaryRecords();
    }, []);

    const getCurrentDiaryRecords = () => {
        getDiaryDetails().then(res => {
            setDiaryRecords(res.data);
        }).catch(err => {
            console.error('Error fetching diary records:', err);
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

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month + 1, 0).getDate();
    };

    const getDiaryForDate = (day) => {
        const dateToMatch = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toISOString().split('T')[0];
        return diaryRecords.find(record => record?.created_at.split(' ')[0] === dateToMatch);
    };

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const daysArray = Array(firstDayOfMonth).fill(null).concat(
        Array.from({length: daysInMonth}, (_, i) => i + 1)
    );

    return (
        <div className='CalenderSection'>
            <img src={purpleC} alt="Purple Circle Image" className='calenderPC'/>
            <img src={greenC} alt="Green Circle Image" className='calenderGC'/>
            <CalendarFull/>

            {/*<div>*/}
            {/*    <Row>*/}
            {/*        <Col sm='12' md='12' lg='12' xl='12'>*/}
            {/*            <div className='calenderTop'>*/}
            {/*                <div>*/}
            {/*                    <h1>Hy, Dilanjana</h1>*/}
            {/*                    <h3>How is your day?</h3>*/}
            {/*                </div>*/}
            {/*                <div className='calenderSwitch'>*/}
            {/*                    <img src={backbtn} alt="back button" onClick={handlePreMonth}/>*/}
            {/*                    <span>{formatDate(currentDate)}</span>*/}
            {/*                    <img src={nextbtn} alt="next button" onClick={handleNextMonth}/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*        <Col sm='12' md='12' lg='12' xl='12'>*/}
            {/*            <div className='calenderBottom'>*/}
            {/*                {diaryRecords && <div className='calendarGrid'>*/}
            {/*                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (*/}
            {/*                        <div key={index} className='dayHeader'>{day}</div>*/}
            {/*                    ))}*/}
            {/*                    {daysArray.map((day, index) => {*/}
            {/*                        const diaryForDay = day ? getDiaryForDate(day) : null;*/}
            {/*                        return (*/}
            {/*                            <div key={index} className={`dayCell ${day ? 'filled' : ''}`}>*/}
            {/*                                {diaryForDay ? <CalenderCard day={day}*/}
            {/*                                                             message={diaryForDay.content}*/}
            {/*                                                             date={diaryForDay.created_at}*/}
            {/*                                                             mainEmotion={diaryForDay.main_emotion}*/}
            {/*                                                             contentData={diaryForDay}*/}
            {/*                                /> : day*/}
            {/*                                }*/}
            {/*                            </div>*/}
            {/*                        );*/}
            {/*                    })}*/}
            {/*                </div>}*/}
            {/*            </div>*/}


            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</div>*/}
        </div>
    )
}

export default Calender;
