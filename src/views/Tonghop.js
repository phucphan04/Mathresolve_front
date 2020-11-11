import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tonghop = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Toán tổng hợp" subtitle="Subtitle" className="text-sm-left" />
    </Row>
  </Container>
);

export default Tonghop;
