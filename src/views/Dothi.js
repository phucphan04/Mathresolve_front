import React from "react";
import {
  Container,
  Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Dothi = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Đồ thị" subtitle="Subtitle" className="text-sm-left mb-3" />
    </Row>
    <math-field id="formula" style={{
      backgroundColor: "#c0cacc",
      height: "50px",
      borderRadius: "10px",
      color: "#000000",
      fontSize: "20px"
    }}></math-field>
  </Container>
);

export default Dothi;
