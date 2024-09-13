import '../../styles/CalenderCard.css';
import face from '../../assets/happyFace.png';
import moment from "moment";
import {getEMotionEmoji} from "../../utils/CommonFun.jsx";
import { useNavigate } from 'react-router-dom';

const CalenderCard = ({day, message, date, mainEmotion, contentData}) => {
    const navigate = useNavigate();
    const viewMoreDetailsOfDate = () => {
        console.log(contentData);
        navigate('/monitoring', { state: { diaryId:contentData.id } });
    }

    return (
        <div className={`cCard ${mainEmotion}-bg`}>
            <div className='d-flex justify-content-end position-relative'>
                <div className="emotion-wrapper">
                    <span className='predicted-emotion'>{getEMotionEmoji(mainEmotion)}</span>
                </div>
            </div>
            <div>
                <p className='cCard-content'>
                    {message.length < 120 ? message : message.substring(0, 120) + '...'}
                </p>
            </div>

            <div className='d-flex justify-content-between'>
                <span onClick={()=>{
                    viewMoreDetailsOfDate()
                }} className='seemore-text'>See more...</span>
                <span className='date-text'>{moment(date).format('YYYY-MM-DD')}</span>
            </div>
        </div>
    )
}

export default CalenderCard