import React from "react";
import {
    Row,
    Col,
    Form,
    FormInput,
    FormSelect,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from "shards-react";
import ListExample from "../components-overview/ListExample"
const ExampleView = () => (

    <Card small className="h-100">
        <CardHeader className="border-bottom">
            <h6 className="m-0">Các ví dụ</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
            <ListExample></ListExample>
        </CardBody>
    </Card>
);

export default ExampleView;
