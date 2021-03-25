import React, { useState } from "react";
import {
  Container, Row, Col, Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import SolutionView from "../components/components-overview/SolutionView"
import ExampleView from "../components/components-overview/ExampleView"
import MathJax from 'react-mathjax2'
import Result from "../components/api/Result"
import convertLatexToSpeakableText from 'mathlive';
import SimpleDialogDemo from "../components/components-overview/SimpleDialog"



import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';




const { parse } = require("equation-parser")



var emails = [];

const styleSubmit = {
  marginLeft: "10px",
  height: "40px",
  borderRadius: "10px"
}
function SimpleDialog(props) {

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" style={{
      padding: "0px 30px 0px 30px"
    }} open={open}>
      <DialogTitle id="simple-dialog-title">Tuỳ chọn</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemText primary={"Giải theo biến " + email} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};









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

function Dathuc(smallStats) {
  var [input_latex, setInputLatex] = useState(0);

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    emails = [];
    var test = document.getElementById('formula').getValue("latex");
    if (test != "") {
      var test1 = duyetObject(parse(test));
      var test2 = test1.split("");
      const uniqueSet = new Set(test2);
      const backToArray = [...uniqueSet];
      backToArray.forEach(function (item, index, array) {
        emails.push(item);

      });
    }
    else {
      emails.push("Không hợp lệ, vui lòng nhập lại");
    }
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    setInputLatex(document.getElementById('formula').getValue("latex"));
  };

  // var test = "x^2+2x=q+2+1+3";

  // // let valuesArray = Object.values(parse(test));
  // // var test1 = duyetObject(parse(test));
  // // console.log(test1);
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle title="Đa thức" subtitle="Subtitle" className="text-sm-left mb-3" />
        <Col lg="11" md="11" sm="11" className="mb-4">
          <math-field id="formula" style={{
            backgroundColor: "#c0cacc",
            height: "40px",
            borderRadius: "10px",
            color: "#000000",
            fontSize: "20px"
          }}></math-field>
        </Col>
        <Col lg="1" md="1" sm="1" className="mb-4">
          <div>
            <Button style={styleSubmit} variant="outlined" color="primary" onClick={handleClickOpen}>
              Submit
            </Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
          </div>





        </Col>
        <Col lg="8" md="12" sm="12" className="mb-4">

          <Card small className="h-100">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Bài giải</h6>
            </CardHeader>
            <CardBody className="d-flex py-0">
              <Result tex={input_latex} var={selectedValue}></Result>
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

        </Col>
        <Col lg="4" md="12" sm="12" className="mb-4" style={{
          paddingLeft: "30px",

        }}>
          <ExampleView></ExampleView>
        </Col>



      </Row>

    </Container >
  )
};


export default Dathuc;
