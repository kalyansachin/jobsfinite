import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import "./corporate.css"

const Corporate = () => {
    return (
        <div>
            <Header />
            <h2 style={{textAlign: "center"}}>Private Jobs</h2>
            <div id="govtpage-main-outside">
                <div id="govtpage-main">
                    <div className='state'>TCS</div>
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
                <div className='state'>INFOSYS</div>
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
                <div className='state'>GOOGLE</div>
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
                <div className='state'>ACCENTURE</div>
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
                <div className='state'>AMAZON</div>
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
            <Footer />
        </div>
    );
};

export default Corporate;