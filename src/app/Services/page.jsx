import React from 'react';
import ServiceHome from '../components/services/service/ServiceHome';
import NeedConsultation from '../components/services/service/NeedConsultation';

import SyberSecurityComponent from '../components/services/service/SyberSecurityComponent';
import WebDevelopmentComponent from '../components/services/service/WebDevelopmentComponent';
import VisualCreativeComponent from '../components/services/service/VisualCreativeComponent';
import DigitalMarketingComponent from '../components/services/service/DigitalMarketingComponent';

function Services() {
    return (
        <div className={"w-full overflow-x-hidden space-y-5"}>
            <ServiceHome></ServiceHome>
            <DigitalMarketingComponent></DigitalMarketingComponent>
            <VisualCreativeComponent></VisualCreativeComponent>
            <WebDevelopmentComponent></WebDevelopmentComponent>
            <SyberSecurityComponent></SyberSecurityComponent>
            <NeedConsultation></NeedConsultation> 
        </div>
    );
}

export default Services;