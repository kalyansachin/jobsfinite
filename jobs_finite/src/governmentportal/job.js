import React from 'react';
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router';
import Header from '../header/header';
import "./DynamicJob/job.css";
import Footer from '../footer/footer';

const Job = (props) => {
    // const params = useParams()
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat bibendum ipsum nec maximus. Sed eros ligula, dapibus at vestibulum euismod, luctus non mi. Donec tincidunt diam vel neque cursus, sed venenatis urna posuere. Suspendisse quis diam vel dolor tempor ornare sed sit amet eros. Duis arcu mi, varius ut eros vel, feugiat interdum turpis. Curabitur a purus id libero cursus cursus. Etiam facilisis augue vitae turpis sollicitudin, eget tempor turpis lobortis. In sapien risus, accumsan at ullamcorper non, ornare sit amet leo. Vestibulum nec urna at leo laoreet cursus eget nec tortor. Suspendisse vitae ligula consequat, elementum sapien quis, consequat arcu. Suspendisse vel tristique sem, sed consectetur ipsum. Donec ac mollis odio. Pellentesque magna tortor, consequat at dapibus et, dictum eu purus. Fusce iaculis tortor at tempor consequat. Sed bibendum sodales nisi a dignissim. Fusce ac odio vitae quam accumsan semper."

    const location = useLocation();
    React.useEffect(() => {
        console.log('new Location', location)
    },[])
    return (
        <div>
            <Header/>
            <h2 style={{textAlign: "center"}}>{location.state.examName} Jobs</h2>
            <div id="job-main-outside">
                <div id="jobpage-main">
                    <div id="job-content">
                        <div className='inner-job-content' style={{backgroundColor: "silver", fontSize: "30px"}}>
                            <div>{location.state.postName} Recuritment 2022 - Apply Online for Combined Higher Secondary Level (10 + 2) Exam</div>
                        </div>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Post Name: </span> {location.state.postName}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Exam Date: </span> {location.state.examName}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Last Date to apply: </span> {location.state.lastDate}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Qualification: </span> {location.state.qualification}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content'>
                            <div><span className="side-heading">Job description: </span> {description}</div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Application Fees</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}>For General Category :    <span style={{fontWeight: "bold"}}>   Rs.1000/-</span></li>
                                    <li style={{ marginBottom: "5px"}}>For SC/ST/PWD :    <span style={{fontWeight: "bold"}}>   Rs.250/-</span></li>
                                    <li style={{ marginBottom: "5px"}}>Payment Mode:    <span style={{fontWeight: "bold"}}>   Debit / Internet Banking</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Important Dates</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}>Starting Date to Apply :<span style={{fontWeight: "bold"}}>   01-02-2022</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date to Apply :<span style={{fontWeight: "bold"}}>   07-03-2022 23:00 Hrs</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date for Payment of Fee through Online :<span style={{fontWeight: "bold"}}>08-03-2022 by 23:00 Hrs</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date for Generation of office Challan :<span style={{fontWeight: "bold"}}>09-03-2022 by 23:00 Hrs</span></li>
                                    <li style={{ marginBottom: "5px"}}>Last Date for Correction of Application Form :<span style={{fontWeight: "bold"}}>08-03-2022 by 23:00 Hrs</span></li>
                                    <li style={{ marginBottom: "5px"}}>Date of Computer Based Examination(Tier - 1) :<span style={{fontWeight: "bold"}}>May 2022</span></li>
                                    <li style={{ marginBottom: "5px"}}>Date of Tier II Exam :<span style={{fontWeight: "bold"}}>To be notified later</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Age Limit(as on 01-01-2021)</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}>Minimum Age :    <span style={{fontWeight: "bold"}}>   18 Years</span></li>
                                    <li style={{ marginBottom: "5px"}}>Maximum Age :    <span style={{fontWeight: "bold"}}>   27 Years</span></li>
                                    <li style={{ marginBottom: "5px"}}><span style={{fontWeight: "bold"}}>Age relaxation is applicable as per rules</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Educational Qualifications</span></div>
                            <div>
                                <ul>
                                    <li style={{ marginBottom: "5px",}}><span style={{fontWeight: "bold"}}>Candidates must have passed 12th class/ equivalent exam from a recognized Board/ University</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding'>
                            <div><span className='middle-heading' style={{color: "red",marginBottom: "15px", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Vacancy Details</span></div>
                            <div id="grid-vacancy">
                                <table>
                                    <thead>
                                        <tr>
                                            <td style={{color: "#AA336A", fontWeight: "bold"}}>SI No</td>
                                            <td style={{color: "#AA336A", fontWeight: "bold"}}>Category Name</td>
                                            <td style={{color: "#AA336A", fontWeight: "bold"}}>Vacancy</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>General</td>
                                            <td>86</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>SC</td>
                                            <td>08</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>ST</td>
                                            <td>29</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content remove-padding links' style={{paddingBottom: "1px"}}>
                            <div><span className='middle-heading' style={{color: "red", fontWeight: "bold", display: "flex", justifyContent: "center"}}>Important Links</span></div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content' style={{display: "flex", paddingTop: "0px", paddingBottom: "0px"}}>
                            <div style={{paddingLeft: "30%",flexBasis: "50%", float: "right"}}>Apply Online: </div><div style={{flexBasis: "50%"}}><a href={location.state.url} style={{fontWeight: "bold"}}>Click Here!</a></div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content' style={{display: "flex", paddingTop: "0px", paddingBottom: "0px"}}>
                            <div style={{paddingLeft: "30%",flexBasis: "50%", float: "right"}}>Notification: </div><div style={{flexBasis: "50%"}}><a href='https://www.google.com/' style={{fontWeight: "bold"}}>Click Here!</a></div>
                        </div>
                        <hr className='solid'/>
                        <div className='inner-job-content' style={{display: "flex", paddingTop: "0px", paddingBottom: "15px"}}>
                            <div style={{paddingLeft: "30%",flexBasis: "50%", float: "right"}}>Official Website: </div><div style={{flexBasis: "50%"}}><a href='https://www.google.com/' style={{fontWeight: "bold"}}>Click Here!</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Job;