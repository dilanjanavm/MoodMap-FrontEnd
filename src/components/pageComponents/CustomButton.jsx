import { Button } from "reactstrap";
import '../../styles/CustomButton.css';
const CustomButton = ({ message, img }) => {
    return (
        <Button className="custom-button">
            {message}
            {img && (
                <img src={img} alt="Button icon" style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
            )}
        </Button>
    );
};

export default CustomButton;