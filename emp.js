import React, { Component } from 'react'

import Video from '../../videos/video (1).mp4';

import { Button,ButtonToolbar } from 'react-bootstrap';
import { AddDepModal } from '../AddDepModal';
import { EditDepModal } from '../EditDeptModal';
import { EmpBg, EmpCard, EmpContainer, EmpContent, EmpContent2, EmpContent3, EmpH1, EmpH2, EmpH3, VideoBg } from './empele';
import { ButtonD, ButtonS, ButtonV, ButtonZ } from '../ButtonElement';



export class Employee extends Component{  
    
    constructor(props){
        super(props);
        var date= new Date().getDate() + '-' + new Date().getMonth() + 1 + '-' + new Date().getFullYear();
        var time= new Date().getHours() + ':' + new Date().getMinutes();
        this.state={deps:[], addModalShow:false, editModalShow:false,currentMonth: date,currentTime: time}

    }

    refreshList(){
        fetch(' http://127.0.0.1:8000/department/')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDep(depid){
        if(window.confirm('Are you sure?')){
            fetch(' http://127.0.0.1:8000/department/'+depid,{
                method:'DELETE',
                headers:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }

    }

render(){
    const{deps, depid, depname}=this.state;
    let addModalClose=()=>this.setState({addModalShow:false});
    let editModalClose=()=>this.setState({editModalShow:false});
  return (
    <div> 
        
    <EmpContainer>
    <EmpBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
    </EmpBg>
    <EmpContent2>
        <EmpH1> Whats in your mind ? </EmpH1>
        <ButtonToolbar>
            <ButtonZ 
            onClick={()=>this.setState({addModalShow:true})}>
                Post Something Here 
            </ButtonZ>

            <AddDepModal show={this.state.addModalShow}
            onHide={addModalClose}/>

         </ButtonToolbar>
    </EmpContent2>
    <EmpContent>
    {deps.map(dep=>
     <EmpCard>
        <EmpH3>{dep.Date}</EmpH3>
        <EmpH3>{dep.StudentName}</EmpH3>
        <EmpH2>{dep.DepartmentName}</EmpH2>
        <EmpH3>Posted from,{dep.Location}</EmpH3>
            <ButtonV 
                onClick={()=>this.setState({editModalShow:true,
                depid:dep.DepartmentId,depname:dep.DepartmentName})}>
                Edit
             </ButtonV>

            <ButtonD 
                onClick={()=>this.deleteDep(dep.DepartmentId)}>
                Delete
            </ButtonD>

            <EditDepModal show={this.state.editModalShow}
                onHide={editModalClose}
                depid={depid}
                 depname={depname}/>
        </EmpCard> )}  
        </EmpContent>  
    </EmpContainer>
    </div>
     )
    }
}

export default Employee