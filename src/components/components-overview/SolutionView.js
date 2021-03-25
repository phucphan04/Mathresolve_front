
import React, { useState } from "react";
import {
    Container, Row, Col, Button, Card,
    CardHeader,
    CardBody,
    CardFooter
} from "shards-react";
import MathJax from 'react-mathjax2'
import Result from "../api/Result"
import convertLatexToSpeakableText from 'mathlive';

function SolutionView(latex) {

    console.log(latex.latex);

    return (
        <Card small className="h-100">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Bài giải</h6>
            </CardHeader>
            <CardBody className="d-flex py-0">
                <Result tex={latex}></Result>
            </CardBody>
            <CardFooter className="border-top">
                <Row>
                    <Col className="text-right view-report">
                        {/* eslint-disable-next-line */}
                        <a href="#">Xem các bước giải &rarr;</a>
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    )
};


export default SolutionView;
