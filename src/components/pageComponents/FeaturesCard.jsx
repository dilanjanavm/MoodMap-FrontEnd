import Flowerscard from '../../assets/Flowerscard.png';

const FeaturesCard = ({ card }) => {
    if (card === 1) {
        return (
            <div style={{ position: 'relative', width: '339px', height: '375px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '3px 4px 15.2px 0 rgba(0, 0, 0, 0.25)', padding: '0' }}>
                <img src={Flowerscard} alt="card Border" style={{ position: 'absolute', bottom: '0', right: '0', borderRadius: '12px' }} />
                <div style={{ padding: '20px', position: 'absolute', top: '80px' }}>
                    <h1 style={{ fontFamily: 'Onest', fontWeight: '400', fontSize: '36px', lineHeight: '45.18px', textAlign: 'left' }}>Personal Diary Feature</h1>
                    <h3 style={{ fontFamily: 'Onest', fontWeight: '400', fontSize: '16px', lineHeight: '20.08px', textAlign: 'left', color: '#6F6F6F' }}>Document your thoughts and feelings privately, reflecting on your daily experiences.</h3>
                </div>
            </div>
        )
    } else if (card === 2) {
        return (
            <div style={{ position: 'relative', width: '339px', height: '375px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '3px 4px 15.2px 0 rgba(0, 0, 0, 0.25)', padding: '0' }}>
                <img src={Flowerscard} alt="card Border" style={{ position: 'absolute', top: '28px', right: '-28px', borderRadius: '12px', rotate: '270deg' }} />
                <div style={{ padding: '20px', position: 'absolute', top: '160px' }}>
                    <h1 style={{ fontFamily: 'Onest', fontWeight: '400', fontSize: '36px', lineHeight: '45.18px', textAlign: 'left' }}>Daily Mood Tracking</h1>
                    <h3 style={{ fontFamily: 'Onest', fontWeight: '400', fontSize: '16px', lineHeight: '20.08px', textAlign: 'left', color: '#6F6F6F' }}>Document your thoughts and feelings privately, reflecting on your daily experiences.</h3>
                </div>
            </div>
        )
    }
    else if (card === 3) {
        return (
            <div style={{ position: 'relative', width: '339px', height: '375px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '3px 4px 15.2px 0 rgba(0, 0, 0, 0.25)', padding: '0' }}>
            <img src={Flowerscard} alt="card Border" style={{ position: 'absolute', bottom: '28px', left: '-28px', borderRadius: '12px', rotate: '90deg' }} />
            <div style={{ padding: '20px', position: 'absolute', top: '40px' }}>
                <h1 style={{ fontFamily: 'Onest', fontWeight: '400', fontSize: '36px', lineHeight: '45.18px', textAlign: 'left' }}>AI-Powered Analysis</h1>
                <h3 style={{ fontFamily: 'Onest', fontWeight: '400', fontSize: '16px', lineHeight: '20.08px', textAlign: 'left', color: '#6F6F6F' }}>Document your thoughts and feelings privately, reflecting on your daily experiences.</h3>
            </div>
        </div>
        )
    }
}

export default FeaturesCard