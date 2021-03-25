import React, { useState } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import Form from "@rjsf/material-ui";
import PageTitle from "../components/common/PageTitle";
const { parse } = require("equation-parser")
// const Form = JSONSchemaForm.default;
const schema = {
  "type": "object",
  "properties": {
    "baitoan": {
      "type": "object",
      "title": "Phần định nghĩa đề bài",
      "properties": {
        "description": {
          "type": "string",
          "title": "Đề bài",
          "description": "Nhập mô tả bài toán"

        }
      }
    },
    "Variable": {
      "type": "array",
      "title": "Phần định nghĩa các biến số",
      "items": {
        "type": "object",
        "title": "Nhập biến số trong bài toán",
        "properties": {
          "name": {
            "type": "string",
            "title": "Biến số",
            "default": "x"
          },
          "unit": {
            "type": "string",
            "title": "Đơn vị",
            "default": ""
          },
          "condition": {
            "type": "string",
            "title": "Điều kiện",
            "default": ""
          },
        }
      }
    },
    "ListCondituon": {
      "type": "array",
      "title": "Phần khai báo các điều kiện, bài giải",
      "items":
      {
        "type": "object",
        "title": "Điều kiện",

        "properties": {
          "item1": {
            "type": "string",
            "title": "Lời dẫn",
            "default": "Nhập lời giải chú thích cho biểu thức điều kiện. Vd: Tính delta"
          },
          "item2": {
            "type": "string",
            "title": "Các biểu thức điều kiện",
            "default": "Vd: v = s/t"
          },
          "item3": {
            "type": "array",
            "title": "Các lời giải tương ứng",
            "items": {
              "type": "object",
              "title": "",
              "properties": {
                "introduction": {
                  "type": "string",
                  "title": "Lời dẫn"
                },
                "equation": {
                  "type": "string",
                  "title": "Bài giải"
                }
              }

            }
          }
        }

      }
    }
  }
};
const uiSchema = {
  "baitoan": {
    "description": {
      "ui:widget": "textarea"
    }

  }
};
// function ArrayFieldTemplate(props) {
//   return (
//     <div>
//       {props.items.map(element => element.children)}
//       {props.canAdd && <button type="button" onClick={props.onAddClick}></button>}
//     </div>
//   );
// }



function duyetObject(obj) {
  if (obj.a == undefined || obj.b == undefined) {

    if (obj.type == "variable") {
      return obj.name;
    }
    else return "";
  }
  else {
    return duyetObject(obj.a) + duyetObject(obj.b);


  }
}

function getvar(data) {
  // var text = data.baitoan.description;
  var text = "";

  const regexVar = /{(.*?)}/g;
  const regexCondition = /#(.*?)#/g;
  if (data.baitoan.description == undefined) {
    text = "";
  }
  else {
    text = data.baitoan.description;

  }
  var foundVar = text.match(regexVar);

  var foundCondition = text.match(regexCondition);



  var x = [];
  var objVar;
  if (foundVar != undefined) {
    for (var tempVar in foundVar) {

      if (foundCondition != undefined) {
        objVar = { "name": foundVar[tempVar].slice(1, foundVar[tempVar].length - 1), "unit": null, "condition": null };
        for (var temp in foundCondition) {

          var test1 = duyetObject(parse(foundCondition[temp].slice(1, foundCondition[temp].length - 1)));
          if (foundVar[tempVar].slice(1, foundVar[tempVar].length - 1) == test1) {
            objVar = { "name": foundVar[tempVar].slice(1, foundVar[tempVar].length - 1), "unit": null, "condition": foundCondition[temp].slice(1, foundCondition[temp].length - 1) }
          }
        }
        x.push(objVar);
      } else {
        var objVar1 = { "name": foundVar[tempVar].slice(1, foundVar[tempVar].length - 1), "unit": null, "condition": null }
        x.push(objVar1);
      }
    }
  }
  data.Variable = x;


}
function api_dataconstructor(id, name, IDUser, subject, grade, data, date) {
  this.id = id;
  this.name = name;
  this.IDUser = IDUser;
  this.subject = subject;
  this.grade = grade;
  this.data = data;
  this.date = date;
}

function savedata(data) {
  var api_data = new api_dataconstructor("id1", "id2", "IDUser", "math", "9", data, "21/03/2021");
  console.log(api_data);
  fetch("http://127.0.0.1:8000/api/defineproblem", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input: api_data
    })
  }).then(res => {
    res.json().then(db => {
    })
  }).catch(err => {
    console.log("Error 193.Tonghop.js");
  })

}
function Tonghop() {
  const [formData, setFormData] = useState(null);
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="12" title="Định nghĩa bài toán" subtitle="Subtitle" className="text-sm-left" />

      </Row>
      <Row>
        <Col sm="12">
          <Form schema={schema} uiSchema={uiSchema} formData={formData} /*ArrayFieldTemplate={ArrayFieldTemplate}*/ onChange={e => {
            getvar(e.formData);
            setFormData(e.formData);

          }} >
            <Button type="submit" onClick={() => { savedata(formData) }

            }
            >Save</Button>
          </Form>
        </Col>
      </Row>

    </Container >
  );
}
export default Tonghop;
