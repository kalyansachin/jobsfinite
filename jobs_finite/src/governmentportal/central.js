import React from 'react';
import Header from '../header/header';
import "./government.css";

const CentralGovernment = () => {

    // const addRow = (stateName) => {
    //     let table = document.getElementById(stateName);
    //     let row = table.insertRow(1);
    //     for(let i = 0; i < 7; i++)
    //     {
    //         let cell = row.insertCell(i);
    //         cell.innerHTML = '<input type="text">'
    //     }
    // }


    // const removeRow = (stateName) => {
    //     document.getElementById(stateName).deleteRow(-1);
    // }

    // const removeEdit = (stateName) => {
    //     let table = document.getElementById(stateName);
    //     let lastRow = table.rows[table.rows.length-1];
    //     let lastCell = lastRow.cells[lastRow.cells.length-1];
    //     for(let i = 0; i < lastRow.cells.length; i++)
    //     {
    //         let lastCell = lastRow.cells[i];
    //         lastCell.disabled = true;
    //     }
    // } 

    return (
        <div>
            <Header/>
            <h2 style={{textAlign: "center"}}>Central Government Jobs</h2>
            <div id="govtpage-main-outside">
                <div id="govtpage-main">
                    <div className='state'>UPSC</div>
                    <table className='table' id='andaman'>
                    <tr>
                        <th>Post Date</th>
                        <th>Recruitment Board</th>
                        <th>Post Name</th>
                        <th>Qualification</th>
                        <th>Advt No</th>
                        <th>Last Date</th>
                        <th>More Information</th>
                    </tr>
                    <tr>
                        <td>Post Date</td>
                        <td>Recruitment Board</td>
                        <td>Post Name</td>
                        <td>Qualification</td>
                        <td>Advt No</td>
                        <td>Last Date</td>
                        <td>More Information</td>
                    </tr>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Banking</div>
                    <table className='table'>
                    <tr>
                        <th>Post Date</th>
                        <th>Recruitment Board</th>
                        <th>Post Name</th>
                        <th>Qualification</th>
                        <th>Advt No</th>
                        <th>Last Date</th>
                        <th>More Information</th>
                    </tr>
                    <tr>
                        <td>Post Date</td>
                        <td>Recruitment Board</td>
                        <td>Post Name</td>
                        <td>Qualification</td>
                        <td>Advt No</td>
                        <td>Last Date</td>
                        <td>More Information</td>
                    </tr>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Railways</div>
                    <table className='table'>
                    <tr>
                        <th>Post Date</th>
                        <th>Recruitment Board</th>
                        <th>Post Name</th>
                        <th>Qualification</th>
                        <th>Advt No</th>
                        <th>Last Date</th>
                        <th>More Information</th>
                    </tr>
                    <tr>
                        <td>Post Date</td>
                        <td>Recruitment Board</td>
                        <td>Post Name</td>
                        <td>Qualification</td>
                        <td>Advt No</td>
                        <td>Last Date</td>
                        <td>More Information</td>
                    </tr>
                    </table>
                </div>
                <div id="govtpage-main">
                <div className='state'>Staff Selection Committee</div>
                    <table className='table'>
                    <tr>
                        <th>Post Date</th>
                        <th>Recruitment Board</th>
                        <th>Post Name</th>
                        <th>Qualification</th>
                        <th>Advt No</th>
                        <th>Last Date</th>
                        <th>More Information</th>
                    </tr>
                    <tr>
                        <td>Post Date</td>
                        <td>Recruitment Board</td>
                        <td>Post Name</td>
                        <td>Qualification</td>
                        <td>Advt No</td>
                        <td>Last Date</td>
                        <td>More Information</td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CentralGovernment;