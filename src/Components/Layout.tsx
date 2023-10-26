import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../style/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface ContainerProps {
    children: React.ReactNode;
}

const Layout: React.FC<ContainerProps> = ({ children }) => (
    <div className="flex flex-col min-h-screen">
        <Header />
        <div className='flex-grow'>
            {children}
        </div>
        <Footer />
        <ToastContainer />
    </div>
);

export default Layout