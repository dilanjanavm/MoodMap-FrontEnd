import React, { useRef } from 'react';
import { Col } from 'reactstrap';
import CalenderCard from '../pageComponents/CalenderCard';
import backbtn from '../../assets/calenderbck.png';
import nextbtn from '../../assets/calendernxt.png';
import calenderCardsData from '../../utils/messageArrays';

const CalendarCardsSection = () => {
    const sliderRef = useRef(null);
    const [scrollAmount, setScrollAmount] = React.useState(0);

    const handleNext = () => {
        if (sliderRef.current) {
            const cardWidth = sliderRef.current.querySelector('div').offsetWidth + 170;
            const maxScrollAmount = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
            if (scrollAmount < maxScrollAmount) {
                sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
                setScrollAmount(prev => Math.min(prev + cardWidth, maxScrollAmount));
            }
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            const cardWidth = sliderRef.current.querySelector('div').offsetWidth + 170;
            if (scrollAmount > 0) {
                sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
                setScrollAmount(prev => Math.max(prev - cardWidth, 0));
            }
        }
    };

    return (
        <Col sm='6' md='6' lg='6' xl='6'>
            <div>
                <p className='monitoringText'>
                    This chart illustrates a spectrum of emotional intensity, ranging from 0 to 20. At the highest intensity, "anger" and "disgust" are depicted with a value of 20 and 18, respectively, indicating these emotions can be extremely strong and overwhelming. "Fear" follows closely with a value of 16, representing its significant impact. "Joy," at 14, is a high but somewhat less intense emotion, highlighting a strong sense of happiness or pleasure. The value of 12 for "natural" suggests a baseline or neutral state. "Sadness," rated at 10, reflects a moderate intensity, conveying feelings of loss or disappointment. "Shame" and "surprise," with values of 8 and 6 respectively, are less intense, with shame being more internalized and surprise being a brief, fleeting reaction. The value of 4 for "May" is ambiguous, potentially representing a lower intensity or an unspecified emotion. Overall, the chart provides a gradient of emotional experiences, from the most intense to the more subdued.
                </p>
            </div>
            <div className='monitoringCards'>
                <h1>Things To Do</h1>
                <div className='slider-container'>
                    {calenderCardsData.length > 3 && (
                        <img src={backbtn} alt="Back Button" onClick={handlePrev} className='prev-slide' />
                    )}
                    <div className='mcards' ref={sliderRef}>
                        {
                            calenderCardsData.map((item, index) => (
                                <CalenderCard day={item.day} message={item.message} date={item.date} key={index} />
                            ))
                        }
                    </div>
                    {calenderCardsData.length > 3 && (
                        <img src={nextbtn} alt="Next Button" onClick={handleNext} className='next-slide' />
                    )}
                </div>
            </div>
        </Col>
    );
};

export default CalendarCardsSection;