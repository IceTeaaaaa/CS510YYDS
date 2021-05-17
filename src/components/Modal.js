import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }
    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Query</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="todo-title">Query (Please don't press enter)</Label>
                            <Input
                                type="text"
                                id="todo-title"
                                name="query"
                                value={this.state.activeItem.query}
                                onChange={this.handleChange}
                                placeholder="Enter Query"
                            />
                        </FormGroup>
                        {/*<FormGroup>*/}
                        {/*    <Label for="todo-description">Description</Label>*/}
                        {/*    <Input*/}
                        {/*        type="text"*/}
                        {/*        id="todo-description"*/}
                        {/*        name="description"*/}
                        {/*        value={this.state.activeItem.description}*/}
                        {/*        onChange={this.handleChange}*/}
                        {/*        placeholder="Enter Todo description"*/}
                        {/*    />*/}
                        {/*</FormGroup>*/}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="success"
                        onClick={() => onSave(this.state.activeItem)}
                    >
                        Submit
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}