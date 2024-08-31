import image1 from '../../assets/profilePictures/image.png';
import image2 from '../../assets/profilePictures/image2.png';
import image3 from '../../assets/profilePictures/image3.png';
import image4 from '../../assets/profilePictures/image4.png';
import image5 from '../../assets/profilePictures/image5.png';
import arrow from '../../assets/mingcute_right-line.png';
import CustomButton from './CustomButton';
import greenRadR from '../../assets/greenRadR.png';
import '../../styles/HomePage.css';

const HomeStartDiary = () => {
    return (
        <div style={{ position: 'relative', width: "100%", height: "100%", top:'40px' }}>
            <div style={{ borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0',}}>
                <div className='employeeImages'>
                    <span><img src={image1} alt="employee image 1" /></span>
                    <span><img src={image2} alt="employee image 2" /></span>
                    <span><img src={image3} alt="employee image 3" /></span>
                    <span><img src={image4} alt="employee image 4" /></span>
                    <span><img src={image5} alt="employee image 5" /></span>
                </div>
                <p className='employeeText'>
                    Track your mood, uncover patterns, and get personalized support. Empower your mental well-being with AI-driven insights designed to help you understand and navigate your emotions.
                </p>
                <div style={{position:'relative'}}>
                    <CustomButton message="Start Diary" img={arrow} />
                </div>
            </div>
            <img src={greenRadR} alt="Green Gradient Circle" style={{ position: 'absolute', right: '-210px', top: '-400px', zIndex:-1 }} />
        </div>
    )
}

export default HomeStartDiary