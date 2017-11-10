import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class App extends React.Component {

   constructor(){
       super();
       this.state = {mongoData: []};
    };

    //Input from text box
    updateSearch(){
        this.search(this.refs.query.value);
    }
    //Calling web api for search filter
    search(query = ""){
        fetch("http://localhost:54238/api/search/"+ query)
        .then((Response) => Response.json()).then((findRes) => 
         {  
            this.setState({ mongoData: findRes })
         })
    }
    //Html content
   render() {
      return (
        <div class="container">
            <form>
                <h2><label className="label label-info">
                    Title
                </label></h2>
                    <div className="row">
                        <div className="form-group">
                            <div className="col-xs-6 col-md-4">
                                <input type="text" ref="query" className="form-control" />  
                            </div>
                            <div className="col-xs-6 col-md-8">
                                <button className="btn btn-success" onClick = { (e) => { this.updateSearch(); e.preventDefault(); } }>Search</button>
                            </div>
                        </div>
                    </div> 
                 <h4 className="text-uppercase">
                        { 
                            this.state.mongoData.map((dynamicData, i) => <TableRow key = {i}
                            data = {dynamicData} />)
                        } 
                     </h4> 
                   
                    </form>
         </div>
      );
   }
}



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

export default App;