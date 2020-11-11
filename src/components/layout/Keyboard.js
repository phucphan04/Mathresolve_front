import React, { useState } from "react";
import { Container, Row, Col, Button } from "shards-react";
function Keyboard(smallStats) {
    const pStyle = {
        textAlign: 'center',

    };
    const buttonStyle = {
        width: "100%",
        borderRadius: "10px"


    };
    const rowStyle = {
        margin: "10px",
        marginTop: "20px"


    };
    var [result, setResult] = useState(0);
    return (
        <div style={{
            display: "block",
            backgroundColor: "#ede9e8",
            height: "300px",
            width: "100%",
            position: "absolute",
            bottom: "0px",
            zIndex: "2000",
            display: "none"
        }}>
            <Container className="dr-example-container">
                <Row style={rowStyle}>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "1";
                            }}
                            style={buttonStyle}>1</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "2";
                            }}
                            style={buttonStyle}>2</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "3";
                            }}
                            style={buttonStyle}>3</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "4";
                            }}
                            style={buttonStyle}>4</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "5";
                            }}
                            style={buttonStyle}>5</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "6";
                            }}
                            style={buttonStyle}>6</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "7";
                            }}
                            style={buttonStyle}>7</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "8";
                            }}
                            style={buttonStyle}>8</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "9";
                            }}
                            style={buttonStyle}>9</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "0";
                            }}
                            style={buttonStyle}>0</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "+";
                            }}
                            style={buttonStyle}>+</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "-";
                            }}
                            style={buttonStyle}>-</Button>
                    </Col>
                </Row>
                <Row style={rowStyle}>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + '\\begin {cases} pt 1\\\\ pt 2\\end{cases}';
                            }}
                            style={buttonStyle}>Hệ</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + "^";
                            }}
                            style={buttonStyle}>^</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + '\\intop';
                            }}
                            style={buttonStyle}>TP</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button
                            onClick={() => {
                                document.getElementById("formula").value = document.getElementById("formula").value + '\\intop';
                            }}
                            style={buttonStyle}>TPC</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>17</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>18</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>19</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>20</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>21</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>22</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>23</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>24</Button>
                    </Col>
                </Row>
                <Row style={rowStyle}>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>25</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>26</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>27</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>28</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>29</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>30</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>31</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>32</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>33</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>34</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>35</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>36</Button>
                    </Col>
                </Row>
                <Row style={rowStyle}>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>37</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>38</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>39</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>40</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>41</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>42</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>43</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>44</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>45</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>46</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>47</Button>
                    </Col>
                    <Col style={pStyle} sm="12" lg="1">
                        <Button style={buttonStyle}>48</Button>
                    </Col>
                </Row>




            </Container>
        </div >
    )
};


export default Keyboard;
