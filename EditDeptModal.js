import React,{Component} from "react";
import { Modal,Button, Row, Col,Form } from "react-bootstrap";

export class EditDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8000/department/',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
             },
             body:JSON.stringify({
                 DepartmentId:event.target.DepartmentId.value,
                 DepartmentName:event.target.DepartmentName.value,
             })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })

    }

    render(){
        return (
            <div className="container">
<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Post
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="DepartmentId">
                        <Form.Label>Student ID</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled 
                        defaultValue={this.props.depid}
                        placeholder="Department Id"/>
                    </Form.Group>

                    <Form.Group controlId="DepartmentName">
                        <Form.Label>Edit Post</Form.Label>
                        <Form.Control type="text" name="DepartmentName" required
                        defaultValue={this.props.depname}
                        placeholder="Department Name"/>
                    </Form.Group>


                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Post
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>

    </Modal.Footer>
    
</Modal>                
            </div>
        )
    }
}