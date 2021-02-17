import React, { useState } from "react";
import Image from "react"
import { Col, FormCheckbox } from "shards-react";
import MathJax from 'react-mathjax2'
function Plot({ tex }) {
    var [result, setResult] = useState("");
    var [result_detail, setResultDetail] = useState("");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "input": tex });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/plot_api", requestOptions)
        .then(res => {
            res.json().then(db => {
                console.log(db.detail);
                var result_api = "";
                let valuesArray = Object.values(db.detail);
                let i = 1;
                for (let value of valuesArray) {

                    if (typeof value == "number") {
                        continue;
                    }
                    if (typeof value == "object") {
                        let valuesArray1 = Object.values(value);

                        for (let value of valuesArray1) {
                            result_api = result_api + value + "\\" + "\\";
                            i++;
                        }
                    } else {
                        result_api = result_api + value + "\\" + "\\";
                        i++;
                    }
                }
                setResultDetail(result_api);
                var x = "data:image/png;base64,";
                console.log(result_api);

                setResult(db.result);
            })
        }).catch(err => {
            console.log(err);
            console.log("test1");
        })



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
                    <MathJax.Node>{result_detail}</MathJax.Node>
                </div>
            </MathJax.Context>
            <img style={{ height: "400px" }} src={`data:image/jpeg;base64,${result}`} />
        </Col>
    )
};

export default Plot;
