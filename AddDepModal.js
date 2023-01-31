import React,{Component} from "react";
import { Modal,Button, Row, Col,Form } from "react-bootstrap";

export class AddDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8000/department/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
             },
             body:JSON.stringify({
                 DepartmentId:null,
                 DepartmentName:event.target.DepartmentName.value,
                 Location:event.target.Location.value,
                 StudentName:event.target.StudentName.value,
                 Date:event.target.Date.value,
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
            Add Post
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="StudentName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name="StudentName" required
                        placeholder="Full name"/>
                    </Form.Group>

                    <Form.Group controlId="Location">
                        <Form.Label>Your Location</Form.Label>
                        <Form.Control type="text" name="Location" required
                        placeholder="Your current location"/>
                    </Form.Group>

                    <Form.Group controlId="Date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="Date" required
                        placeholder="Todays Date"/>
                    </Form.Group>

                    <Form.Group controlId="DepartmentName">
                        <Form.Label>Write Something Here</Form.Label>
                        <Form.Control type="text" name="DepartmentName" required
                        placeholder="Write here"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Post
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