import {loaderState} from "../../state/loaderState.jsx";
import {useRecoilState} from "recoil";
import '../../styles/loader.css'
import logo from '../../assets/MoodMapLogo 1.png'

const Loader = () => {
    const [isLoading, setIsLoading] = useRecoilState(loaderState);

    console.log(isLoading)
    return isLoading && ( <div className="loader w-100 h-100">
       <div className='d-flex justify-content-center flex-column'>

                <img src={logo} alt="logo" className='mb-1'/>
                <div className="loader-animation"></div>

            </div>

    </div> )
}

export default Loader