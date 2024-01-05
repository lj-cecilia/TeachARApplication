// components/PatientItem.js
import React from 'react';
import "/components/PatientItem.css";

export const PatientItem = ({ patients }) => {
  return (
    <div className="patient-table">
      <h3>Patient List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Progress</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.progress}</td>
              <td><a href="#details">Details</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
