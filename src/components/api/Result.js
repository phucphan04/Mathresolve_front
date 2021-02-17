import React, { useState } from "react";
import { Col, FormCheckbox } from "shards-react";
import MathJax from 'react-mathjax2'

function Results({ tex }) {
    var [result, setResult] = useState("");
    fetch("http://127.0.0.1:8000/api/backend_handling", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            input: tex,
            variable: "x"
        })
    }).then(res => {
        res.json().then(db => {

            var result_api = "";
            let valuesArray = Object.values(db.result);
            let i = 1;
            for (let value of valuesArray) {

                if (typeof value == "number") {
                    continue;
                }
                if (typeof value == "object") {
                    let valuesArray1 = Object.values(value);

                    for (let value of valuesArray1) {
                        console.log(value);
                        result_api = result_api + value + "\\" + "\\";
                        i++;
                    }
                } else {
                    result_api = result_api + value + "\\" + "\\";
                    i++;
                }
            }
            console.log(result_api);
            setResult(result_api)
        })
    }).catch(err => {

        console.log("test1");
    })
    let logicJS = (brd) => {
        var c = brd.create('functiongraph', [function (x) { return x + 1; }, -4, 4], { strokeColor: '#000000', strokeWidth: 3 });
        brd.unsuspendUpdate();
    }
    return (
        <Col sm="12" md="4" className="mb-3">
            <MathJax.Context input='tex'
                options={{
                    displayAlign: 'left',
                    mathmlSpacing: false,
                    displayIndent: '0',
                    paddingLeft: true,
                    skipHtmlTags: [
                        '+'
                    ],
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    processEscapes: true,
                    tex: {
                        packages: { '[+]': ['color'] },
                    }
                }}
            >
                <div>
                    <MathJax.Node>{result}</MathJax.Node>
                </div>
            </MathJax.Context>
        </Col>
    )
};

export default Results;
