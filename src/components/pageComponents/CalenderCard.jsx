import '../../styles/CalenderCard.css';
import face from '../../assets/happyFace.png';

const CalenderCard = ({day, message, date}) => {
    return (
        <div className='cCard'>
            <div>
                <span className='cDay'>{day}</span>
                <img src={face} alt="Happy face Image" />
            </div>
            <div>
                <p>
                    {message}
                </p>
            </div>

            <div>
                <span>See more...</span>
                <span>{date}</span>
            </div>
        </div>
    )
}

export default CalenderCard