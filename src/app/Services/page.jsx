import React from 'react';
import ServiceHome from '../components/services/service/ServiceHome';
import NeedConsultation from '../components/services/service/NeedConsultation';
import AllServices from '../components/services/service/AllServices';

function Services() {
    return (
        <div className=''>
            <ServiceHome></ServiceHome>
            <AllServices></AllServices>
            <NeedConsultation></NeedConsultation>
            
        </div>
    );
}

export default Services;