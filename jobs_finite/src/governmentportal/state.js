import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../header/header';
import "./government.css";
import Footer from '../footer/footer';

const StateGovernment = () => {
    return (
        <div>
            <Header/>
            <h2 style={{textAlign: "center"}}>State Government Jobs</h2>
            <div id="govtpage-main-outside">
                <div id="govtpage-main">
                    <div className='state'>Andaman and Nicobar Islands</div>
                    <table className='table' id='andaman'>
                    <tr>
                        <th>Post Date</th>
                        <th>Post Name</th>
                        <th>Qualification</th>
                        <th>Last Date</th>
                        <th>More Information</th>
                    </tr>
                    <tr>
                        <td>Post Date</td>
                        <td>Post Name</td>
                        <td>Qualification</td>
                        <td>Last Date</td>
                        <td>More Information</td>
                    </tr>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Andhra Pradesh</div>
                    <table className='table'>
                    <tr>
                    <th>Post Date</th>
                        <th>Post Name</th>
                        <th>Qualification</th>
                        <th>Last Date</th>
                        <th>More Information</th>
                    </tr>
                    <tr>
                    <td>Post Date</td>
                        <td>Post Name</td>
                        <td>Qualification</td>
                        <td>Last Date</td>
                        <td>More Information</td>
                    </tr>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Arunchal Pradesh</div>
                    <table className='table'>
                    <tr>
                    <th>Post Date</th>
                        <th>Post Name</th>
                        <th>Qualification</th>
                        <th>Last Date</th>
                        <th>More Information</th>
                    </tr>
                    <tr>
                    <td>Post Date</td>
                        <td>Post Name</td>
                        <td>Qualification</td>
                        <td>Last Date</td>
                        <td>More Information</td>
                    </tr>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Assam</div>
                    <table className='table'>
                    <tr>
                    <th>Post Date</th>
                        <th>Post Name</th>
                        <th>Qualification</th>
                        <th>Last Date</th>
                        <th>More Information</th>
                    </tr>
                    <tr>
                    <td>Post Date</td>
                        <td>Post Name</td>
                        <td>Qualification</td>
                        <td>Last Date</td>
                        <td>More Information</td>
                    </tr>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Bihar</div>
                    <table className='table'>
                        <tr>
                        <th>Post Date</th>
                        <th>Post Name</th>
                        <th>Qualification</th>
                        <th>Last Date</th>
                        <th>More Information</th>
                        </tr>
                        <tr>
                        <td>Post Date</td>
                        <td>Post Name</td>
                        <td>Qualification</td>
                        <td>Last Date</td>
                        <td>More Information</td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default StateGovernment;