import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import "./government.css";
import data from './datajobs.json';
import axios from 'axios'

const CentralGovernment = () => { 
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Heelo")
        
        fetchData();
        // appendData();   
    }, []) 
    
     const fetchData = () =>  {
        axios.get("http://localhost:8090/findGovtExamByName/SBI/")
            .then(res => {
                setData([...res.data])
                console.log(res.data) 
            })
            .then(() => {
                console.log("reload")
                for(let i = 0; i < data.length; i++)
                {
                    console.log(data[i].postName)
                    if(data[i].postName === "UPSC")
                    {
                        document.getElementById("upsc-body").innerHTML += 
                        `<tr>
                            <td>${data[i].examDate}</td>
                            <td>${data[i].recruitmentBoard}</td>
                            <td>${data[i].postName}</td>
                            <td>${data[i].qualification}</td>
                            <td>${data[i].advtNumber}</td>
                            <td>${data[i].lastDate}</td>
                            <td><a href="${data[i].url}">Get Details</a></td>
                        </tr> `
                    }
                    if(data[i].postName === "BANK") 
                    {
                        document.getElementById("bank-body").innerHTML += 
                        `<tr>
                            <td>${data[i].examDate}</td>
                            <td>${data[i].recruitmentBoard}</td>
                            <td>${data[i].postName}</td>
                            <td>${data[i].qualification}</td>
                            <td>${data[i].advtNumber}</td>
                            <td>${data[i].lastDate}</td>
                            <td><a href="${data[i].url}">Get Details</a></td>
                        </tr> `
                    }
                    if(data[i].postName === "SSC")
                    {
                        document.getElementById("ssc-body").innerHTML += 
                        `<tr>
                            <td>${data[i].examDate}</td>
                            <td>${data[i].recruitmentBoard}</td>
                            <td>${data[i].postName}</td>
                            <td>${data[i].qualification}</td>
                            <td>${data[i].advtNumber}</td>
                            <td>${data[i].lastDate}</td>
                            <td><a href="${data[i].url}">Get Details</a></td>
                        </tr> ` 
                    }
                    if(data[i].postName === "RAIL" && data[i].recruitmentBoard === "Central Govt") 
                    {
                        document.getElementById("rail-body").innerHTML += 
                        `<tr>
                            <td>${data[i].examDate}</td>
                            <td>${data[i].recruitmentBoard}</td>
                            <td>${data[i].postName}</td>
                            <td>${data[i].qualification}</td>
                            <td>${data[i].advtNumber}</td>
                            <td>${data[i].lastDate}</td>
                            <td><a href="${data[i].url}">Get Details</a></td>
                        </tr> `
                    }
        
                }
            })
            .catch(err => console.log(err));
     }
    //  const appendData = () => {
    //     console.log('Appending')
    //  }


    return (
        <div>
            <Header/>
            <h2 style={{textAlign: "center"}}>Central Government Jobs</h2>
            <div id="govtpage-main-outside">
                <div id="govtpage-main">
                    <div className='state'>UPSC</div>
                    <table className='table' id='upsc-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Recruitment Board</th> 
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Advt No</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='upsc-body'>

                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Banking</div>
                    <table className='table' id='bank-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Recruitment Board</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Advt No</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='bank-body'>

                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Railways</div>
                    <table className='table' id='rail-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Recruitment Board</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Advt No</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='rail-body'>

                        </tbody>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Staff Selection Committee</div>
                    <table className='table' id='ssc-table'>
                        <thead>
                            <tr>
                                <th>Post Date</th>
                                <th>Recruitment Board</th>
                                <th>Post Name</th>
                                <th>Qualification</th>
                                <th>Advt No</th>
                                <th>Last Date</th>
                                <th>More Information</th>
                            </tr>
                        </thead>
                        <tbody id='ssc-body'>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CentralGovernment;