import {AlertTriangle, Check, X} from "react-feather";
import {Slide, toast} from "react-toastify"
import {Fragment} from "react";
import Avatar from "../components/Common/Avatar.jsx";

export const customToastMsg = (title, type, body) => {
    let msgType = "info"
    let assets = {
        color: "bg-info",
        icon: <AlertTriangle color={'#3f3d3d'} size={15}/>
    }

    if (type === 2) {
        msgType = "info"
        assets = {
            color: "bg-warning",
            icon: <AlertTriangle color={'#3f3d3d'} size={15}/>
        }
    } else if (type === 0) {
        msgType = "error"
        assets = {
            color: "bg-danger",
            icon: <X size={15} color={'#680000'}/>
        }
    } else if (type === 1) {
        msgType = "success"
        assets = {
            color: "bg-success",
            icon: <Check color={'#10df10'} size={15}/>
        }
    }

    // toast[msgType](
    //     <ToastContent title={title} body={body} assets={assets}/>,
    //     {icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000}
    // )
    console.log(msgType)
    toast[msgType](title,
        {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }
    )
}


const ToastContent = ({title, body, assets}) => (
    <Fragment>
        <div className='toastify-header'>
            <div className='title-wrapper'>
                {/*<Avatar size='sm' className={assets.color} icon={assets.icon}/>*/}
                <h6 className='toast-title fw-bolder custom-font-toast'>{title}</h6>
            </div>
        </div>
        {body && (
            <div className='toastify-body'>
                <span>{body}</span>
            </div>
        )}
    </Fragment>
)
