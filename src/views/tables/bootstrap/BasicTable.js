import React from 'react';

// react bootstrap
import { Row, Col, Card, Table } from 'react-bootstrap';

// project imports
import { TableData } from 'data/tableData';

// -----------------------|| BASIC TABLE ||-----------------------//
const BasicTable = () => (
    <Row noGutters>
        <Col md={6} sm={12}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Basic Table</Card.Title>
                    <span className="d-block m-t-5">
                        use bootstrap <code>Table</code> component
                    </span>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(TableData || []).map((object, key) => (
                                <tr>
                                    <th scope="row" key={key}>
                                        {object.id}
                                    </th>
                                    <td>{object.firstName}</td>
                                    <td>{object.lastName}</td>
                                    <td>{object.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
        <Col md={6} sm={12}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Inverse Table</Card.Title>
                    <span className="d-block m-t-5">
                        use class <code>table-inverse</code> with <code>Table</code> component
                    </span>
                </Card.Header>
                <Card.Body>
                    <Table responsive table-inverse>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(TableData || []).map((object, key) => (
                                <tr>
                                    <th scope="row" key={key}>
                                        {object.id}
                                    </th>
                                    <td>{object.firstName}</td>
                                    <td>{object.lastName}</td>
                                    <td>{object.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
        <Col md={6} sm={12}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Hover Table</Card.Title>
                    <span className="d-block m-t-5">
                        use props <code>hover</code> with <code>Table</code> component
                    </span>
                </Card.Header>
                <Card.Body>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(TableData || []).map((object, key) => (
                                <tr>
                                    <th scope="row" key={key}>
                                        {object.id}
                                    </th>
                                    <td>{object.firstName}</td>
                                    <td>{object.lastName}</td>
                                    <td>{object.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
        <Col md={6} sm={12}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Dark Table</Card.Title>
                    <span className="d-block m-t-5">
                        use props <code>variant="dark"</code> with <code>Table</code> component
                    </span>
                </Card.Header>
                <Card.Body>
                    <Table variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(TableData || []).map((object, key) => (
                                <tr>
                                    <th scope="row" key={key}>
                                        {object.id}
                                    </th>
                                    <td>{object.firstName}</td>
                                    <td>{object.lastName}</td>
                                    <td>{object.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
        <Col md={12}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Striped Table</Card.Title>
                    <span className="d-block m-t-5">
                        use props <code>striped</code> with <code>Table</code> component
                    </span>
                </Card.Header>
                <Card.Body>
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(TableData || []).map((object, key) => (
                                <tr>
                                    <th scope="row" key={key}>
                                        {object.id}
                                    </th>
                                    <td>{object.firstName}</td>
                                    <td>{object.lastName}</td>
                                    <td>{object.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
        <Col md={6} sm={12}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Contextual Classes</Card.Title>
                    <span className="d-block m-t-5">
                        use props <code>className="table-*"</code> with <code>tr</code> element
                    </span>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(TableData || []).map((object, key) => (
                                <tr>
                                    <th scope="row" key={key}>
                                        {object.id}
                                    </th>
                                    <td>{object.firstName}</td>
                                    <td>{object.lastName}</td>
                                    <td>{object.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default BasicTable;
