import React from 'react';
import Form from './Components/Form/Form';
import PoiList from './Components/PoiList/PoiList';

const Dashboard = () => {
    return (
        <main className="dashboard">
            <Form />
            <PoiList />
        </main>
    )
}

export default Dashboard;