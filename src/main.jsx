import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {RecoilRoot} from "recoil";
import Loader from "./components/Common/Loader.jsx";
import Layout from "./components/Common/Layout.jsx";

createRoot(document.getElementById('root')).render(
    <RecoilRoot>
        <Loader/>
        <StrictMode>
            <Layout>
                <App/>

            </Layout>
        </StrictMode>
    </RecoilRoot>,
)
