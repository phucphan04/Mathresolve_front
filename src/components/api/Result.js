import React, { useState } from "react";
import { Col, FormCheckbox } from "shards-react";
import MathJax from 'react-mathjax2'

import JXGBoard from 'jsxgraph-react-js'

function Results({ tex }) {
    var [result, setResult] = useState("");
    fetch("http://127.0.0.1:8000/api/backend_handling", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latex_input: tex })
    }).then(res => {
        res.json().then(db => {
            console.log(db);
            setResult(db.result);
        })
    }).catch(err => {
        console.log(err);
        console.log("test1");
    })
    let logicJS = (brd) => {
        var c = brd.create('functiongraph', [function(x){ return x+1;}, -4, 4], { strokeColor: '#000000', strokeWidth: 3 });
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
                    skipHtmlTags: [            //  HTML tags that won't be searched for math
                        '+'
                    ]
                }}
            >
                <div>
                    <MathJax.Node>{result}</MathJax.Node>
                </div>
            </MathJax.Context>
            <JXGBoard
          logic={logicJS}
          boardAttributes={{
              axis: true,
              boundingbox: [-12, 10, 12, -10],
              showCopyright: false,
              showReload: false,
              showZoom: false,
              showNavigation: false,
            }}
        //   style={{
        //     border: "3px solid red"
        //   }}
        />
        </Col>
    )
};

export default Results;
