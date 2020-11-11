import React, { useState } from "react";
import { Container, Row, Col, Button } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import MathJax from 'react-mathjax2'
import Result from "../components/api/Result"
import convertLatexToSpeakableText from 'mathlive';
function Dathuc(smallStats) {
  var [result, setResult] = useState(0);
  var [input_latex, setInputLatex] = useState(0);
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle title="Đa thức" subtitle="Subtitle" className="text-sm-left mb-3" />
      </Row>
      <math-field id="formula" style={{
        backgroundColor: "#c0cacc",
        height: "50px",
        borderRadius: "10px",
        color: "#000000",
        fontSize: "20px"
      }}></math-field>

      <Button style={{
        marginTop: "10px"
      }} onClick={() => {
        console.log(document.getElementById('formula').getValue("latex-expanded"));

        setInputLatex(document.getElementById('formula').getValue("latex"));
      }} id="submit">Submit</Button>
      <p style={{
        display: "none"
      }} id="trs">sss</p>
      <Result id="result" tex={input_latex}></Result>
    </Container>
  )
};


export default Dathuc;
