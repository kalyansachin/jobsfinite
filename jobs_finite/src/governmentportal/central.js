import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes, useNavigate,Route } from "react-router-dom";
import Header from '../header/header';
import { Link } from 'react-router-dom';
import "./government.css";
import Marquee from 'react-fast-marquee';
// import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import data from './datajobs.json';
import Job from './job';
import axios from 'axios'
import Footer from '../footer/footer';

const CentralGovernment = () => { 
    const [bankData, setbankData] = useState([]);
    const [upscData, setupscData] = useState([]);
    const [sscData, setsscData] = useState([]);
    const [railData, setrailData] = useState([]);
    // const [job, setJob] = useState({state: 'Karnataka'});

    useEffect(() => {
        console.log("Helo")
        fetchbankData();
        fetchupscData();
        fetchrailData();
        fetchsscData();
    }, []) 
    const navigate = useNavigate();
    

     const fetchbankData = () =>  {
        document.getElementById('bank-body').innerHTML = '';
        axios.get("http://localhost:8090/findGovtExamByName/SBI/")
            .then(res => {
                setbankData([...res.data])
            })
            .catch(err => console.log(err));
     }
     const fetchupscData = () => {
        document.getElementById('upsc-body').innerHTML = '';
        axios.get("http://localhost:8090/findGovtExamByName/UPSC/")
            .then(res => setupscData([...res.data]))
            .catch(err => console.log(err));
     }
     const fetchsscData = () => {
        document.getElementById('ssc-body').innerHTML = '';
        axios.get("http://localhost:8090/findGovtExamByName/SSC/")
            .then(res => setsscData([...res.data]))
            .catch(err => console.log(err));
     }
     const fetchrailData = () => {
        document.getElementById('rail-body').innerHTML = '';
        axios.get("http://localhost:8090/findGovtExamByName/Rail/")
            .then(res => setrailData([...res.data]))
            .catch(err => console.log(err));
     }
    return (
        <div>
            <Header/>
            <div>
            </div>

            <h2 style={{textAlign: "center"}}>Central Government Jobs</h2>
            <div id="govtpage-main-outside">
                <div id="govtpage-main">
                    <div className='state'>UPSC</div>
                    <table className='table' id='upsc-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                {/* <th>Recruitment Board</th>  */}
                                <th>Post Name</th>
                                <th>Qualification</th>
                                {/* <th>Advt No</th> */}
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='upsc-body'>
                            {upscData && upscData.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.examDate}</td>
                                        <td>{item.postName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.lastDate}</td>
                                        <td><a href='' onClick={() => {
                                            navigate("/centralgovtPortal/job", {state: item});
                                        }}>Next</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Banking</div>
                    <table className='table' id='bank-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                {/* <th>Recruitment Board</th> */}
                                <th>Post Name</th>
                                <th>Qualification</th>
                                {/* <th>Advt No</th> */}
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='bank-body'>
                            {bankData && bankData.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.examDate}</td>
                                        <td>{item.postName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.lastDate}</td>
                                        <td><a href='' onClick={() => {
                                            navigate("/centralgovtPortal/job", {state: item});
                                        }}>Next</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Railways</div>
                    <table className='table' id='rail-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                {/* <th>Recruitment Board</th> */}
                                <th>Post Name</th>
                                <th>Qualification</th>
                                {/* <th>Advt No</th> */}
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='rail-body'>
                            {railData && railData.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.examDate}</td>
                                        <td>{item.postName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.lastDate}</td>
                                        <td><a href='' onClick={() => {
                                            navigate("/centralgovtPortal/job", {state: item});
                                        }}>Next</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Staff Selection Committee</div>
                    <table className='table' id='ssc-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                {/* <th>Recruitment Board</th> */}
                                <th>Post Name</th>
                                <th>Qualification</th>
                                {/* <th>Advt No</th> */}
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='ssc-body'>
                            {sscData && sscData.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.examDate}</td>
                                        <td>{item.postName}</td>
                                        <td>{item.qualification}</td>
                                        <td>{item.lastDate}</td>
                                        <td><a href='' onClick={() => {
                                            navigate("/centralgovtPortal/job", {state: item});
                                        }}>Next</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default CentralGovernment;