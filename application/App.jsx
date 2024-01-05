import React from 'react';
import { TherapistDashboardPage } from '/pages/TherapistDashboardPage';
import { Mission } from '/components/Mission';
import { PatientDashboardPage } from '/pages/PatientDashboardPage';
import { Header } from '/components/Header';
import "/App.css";

export const App = () => (
  <div>
    <Header />
    <Mission />
    <TherapistDashboardPage />

    {/* <PatientDashboardPage /> */}
  </div>
);
