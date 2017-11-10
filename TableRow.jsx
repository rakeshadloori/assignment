import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class TableRow extends React.Component {
    render() {
       return (
 
             <Collapsible trigger={this.props.data.TitleName}>
             <div className="container text-lowercase">
                 <span>Release Year: {this.props.data.ReleaseYear}</span>
                 <div>
                     
                     <Collapsible trigger="Awards">
                     <table className="table table-stripped">
                         <thead>
                             <tr>
                                 <th>Award Won</th>
                                 <th>Year</th>
                                 <th>Award Name</th>
                                 <th>Award Company</th>
                             </tr>
                         </thead>
                         <tbody>
                             
                             {
                                 this.props.data.Awards.map((item, i) => {
                                     
                                         return <tr>
                                             <td>{item.AwardWon ? "Yes": "No"}</td>
                                             <td>{item.AwardYear}</td>
                                             <td>{item.AwardName}</td>
                                             <td>{item.AwardCompany}</td>
                                         </tr>
                                 })
                             }
                     </tbody>
                     </table>
                     </Collapsible>
                     
                 </div>
                 
                 <Collapsible trigger="Genre">
                 <div>
                     {
                         
                         this.props.data.Genres.map((item, i) => {
                             return <li>{item}</li>
                         })
                        
                     }
                 </div>
                 </Collapsible>
 
 
                     
                     <Collapsible trigger="Participants">
                     <table className="table table-stripped">
                         <thead>
                             <tr>
                                 <th>Name</th>
                                 <th>Role Type</th>
                                 <th>IsOnScreen</th>
                                 <th>Participant Type</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 this.props.data.Participants.map((item, i) => {
                                     
                                         return <tr>
                                             <td>{item.Name}</td>
                                             <td>{item.RoleType}</td>
                                             <td>{item.IsOnScreen ? "Yes": "No"}</td>
                                             <td>{item.ParticipantType}</td>
                                         </tr>
                                 })
                             }
                     </tbody>
                     </table>
                     </Collapsible>
             </div>
             </Collapsible>
       );
    }
 }

 export default TableRow;