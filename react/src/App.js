import React, { Component } from 'react'
import axios from 'axios';


export default class app extends Component {
    constructor(props){
        super(props);
        this.state={
            task:'',
            tasklist:[]
        }
        
    } 
    componentDidMount(){ 
        this.getTaskList();
    }
    getTaskList(){
         //get task list from nodejs server running localhost and port 5000      
        axios.get('http://localhost:5000/tasks/list' ).then(res =>{
            this.setState({tasklist:res.data});
        }).catch(function (error) { console.log(error); });
    }
    saveTask(){  
        axios.post('http://localhost:5000/tasks/save',{"task":this.state.task} ).then(res =>{
            if(res.status == "success"){
                this.getTaskList();
            }
        }).catch(function (error) { console.log(error); });
    }

    render_tasklist(){
        if( this.state.tasklist != undefined && this.state.tasklist.length > 0){
          return this.state.tasklist.map( (item, index) =>{          
            return ( <tr key={index} id={index}><td>{index}</td><td>{item.task}</td> </tr> ) 
           }, this);
        }
    }


    render() {        
        return (
            <div align="center">
             <div>
                 <br/><br/>
                <label htmlFor="id_task">Task</label> 
                <input id="id_task" type="text" value={this.state.task} onChange={(e)=>{this.setState({task:e.target.value})}} placeholder="Enter Task" /> 	
                <button onClick={()=>{this.saveTask()}}>Save</button>
             </div>
             <div>
                <br/><br/>
                <table>
                    <thead><tr><td>SN.</td><td>Task List </td></tr></thead>
                    <tbody>{this.render_tasklist()}</tbody>  
                </table>
             </div>
             
         </div>
        )
    }
}
