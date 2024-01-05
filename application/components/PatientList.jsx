// components/PatientList.js
import React from 'react';
import { PatientItem } from '/components/PatientItem'; // Update import path

export const PatientList = () => {
  // Sample patient data (replace this with your actual patient data)
  const patients = [
    { id: 1, name: 'John Doe', age: 35, progress: '80%' },
    { id: 2, name: 'John Doe', age: 35, progress: '80%' },
    { id: 3, name: 'Jane Smith', age: 28, progress: '60%' },
    { id: 4, name: 'Jane Smith', age: 28, progress: '60%' },
    { id: 5, name: 'Jane Smith', age: 28, progress: '60%' }
  ];

  return (
    <div className="PatientList">
      <PatientItem patients={patients} />
    </div>
  );
}
