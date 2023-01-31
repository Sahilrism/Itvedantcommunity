import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

import { Button,ButtonToolbar } from 'react-bootstrap';
import { AddDepModal } from '../AddDepModal';
import { EditDepModal } from '../EditDeptModal';
import { DeptContainer, DeptContent } from './deptle';

export class Department extends Component{  
    
    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
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

    <DeptContainer>
        <DeptContent>
        
        
        < Table className='mt-4' striped bordered hover size='sm'>
            <thead>
                <tr>
                    <th>DepartmentId</th>
                    <th>DepartmentName</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {deps.map(dep=>
                    <tr key={dep.DepartmentId}>
                        <td>{dep.DepartmentId}</td>
                        <td>{dep.DepartmentName}</td>
                        <td>
                            <ButtonToolbar>
                                <Button className='mr-2' variant='info'
                                onClick={()=>this.setState({editModalShow:true,
                                    depid:dep.DepartmentId,depname:dep.DepartmentName})}>
                                        Edit
                                    </Button>

                                    <Button className='mr-2' variant='danger'
                                onClick={()=>this.deleteDep(dep.DepartmentId)}>
                                        Delete
                                    </Button>

                                    <EditDepModal show={this.state.editModalShow}
                                    onHide={editModalClose}
                                    depid={depid}
                                    depname={depname}/>
                            </ButtonToolbar>
                        </td>
                    </tr>)}
            </tbody>
         </Table>
         <ButtonToolbar>
            <Button variant='primary'
            onClick={()=>this.setState({addModalShow:true})}>
                Add Department
            </Button>

            <AddDepModal show={this.state.addModalShow}
            onHide={addModalClose}/>

         </ButtonToolbar>
        </DeptContent>
        
    </DeptContainer>
    </div>
     )
    }
}

export default Department