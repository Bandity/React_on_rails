import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from'react';
import {Reports} from './components/BugCategories/reports';

const API_URL = 'http://localhost:3000/api/v1/reports'

function getApiData() {
  return axios.get(API_URL)
  .then(res => res.data)
  .catch(err => console.log(err))
}

function App() {
  const [reports, setReports] = useState([])

  useEffect(()=>{
    let mounted = true;
    getApiData().then(report => {
      if (mounted)  setReports(report)
    })
    return () => mounted = false;
  }, [])

  return (
    <div className="App">
      <h1>
        Hello World
        <Reports reports={reports} />
      </h1>
    </div>
  );
}


export default App;
