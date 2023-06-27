
import React, { FC } from 'react';
import Header from '../../Components/Header/Header';
import SidePanel from '../../Components/Menu/SidePanel';
import Tab from '../../Components/Tab/Tab';
import ButtonPrimary from '@/Components/Button/ButtonPrimary';





const PurchaserDashboard: FC = () => {

    const tabs = [
        {label: 'new', component: <ButtonPrimary key='button' name={'New'} left={''} top={''} />},
        {label: 'old', component: <ButtonPrimary key='button' name={'Old'} left={''} top={''} />},
    ]

   
    return (
        <>
            <Header/>
            <SidePanel/>
            <Tab tabs={tabs}/>
           

        </>
    );
};

export default PurchaserDashboard;
