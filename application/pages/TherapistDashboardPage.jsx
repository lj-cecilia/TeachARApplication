// pages/TherapistDashboardPage.js
import React from 'react';
import { PatientList } from '/components/PatientList'; // Update import path
import { Chat } from '../components/Chat';
import { ProgressBar } from 'react-bootstrap';

export const TherapistDashboardPage = () => {
    return (
        <>
            <h2 className="TherapistDashboard">Therapist Dashboard</h2>
            <PatientList />
            <Chat/>
            {/* <ProgressBar now={60} /> */}
        </>
    );
}
