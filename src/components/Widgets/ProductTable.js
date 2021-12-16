import React from 'react';

// react-bootstrap
import { Card, Table } from 'react-bootstrap';

// third party
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';

// -----------------------|| PRODUCT TABLE ||-----------------------//
const ProductTable = ({ wrapclass, title, height, tableheading, rowdata }) => (
    <Card className={wrapclass}>
        <Card.Header>
            <Card.Title as="h5">{title}</Card.Title>
        </Card.Header>
        <Card.Body style={{ height }}>
            <PerfectScrollbar>
                <Table responsive>
                    <thead>
                        <tr>
                            {tableheading.map((x, i) => (
                                <th key={i}>{x}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rowdata.map((y, j) => (
                            <tr key={j}>
                                <td>{y.name}</td>
                                <td>{y.image}</td>
                                <td>
                                    <div>
                                        <label className={`badge badge-${y.status.badge}`}>{y.status.label}</label>
                                    </div>
                                </td>
                                <td>{y.price}</td>
                                <td>
                                    {y.action.map((z, k) => (
                                        <Link to={z.link} key={k}>
                                            <i className={`feather icon-${z.icon} f-16 text-${z.textcls} ${k > 0 ? 'ms-3' : ''}`} />
                                        </Link>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </PerfectScrollbar>
        </Card.Body>
    </Card>
);

ProductTable.propTypes = {
    wrapclass: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    tableheading: PropTypes.array.isRequired,
    rowdata: PropTypes.array.isRequired
};

export default ProductTable;
