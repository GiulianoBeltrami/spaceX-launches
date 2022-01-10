import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';
import { useTable } from 'react-table'

import { useGetSpacexPastLaunchesQuery, useGetSpacexUpcomingLaunchesQuery } from '../services/spacexAPI';
import helper from '../helpers/Helpers';
import Loader from './Loader';

const { Header, Body, Title: CardTitle, Text } = Card;
const { Title, Paragraph, Anchor } = helper;

const Launches = () => {
    const { data: pastLaunches, isFetching: isFetchingPast } = useGetSpacexPastLaunchesQuery();
    const { data: upcomingLaunches, isFetching: isFetchingUpcoming } = useGetSpacexUpcomingLaunchesQuery();

    if (isFetchingUpcoming || isFetchingPast) {
        return <Loader />
    }
    
    const columns = React.useMemo(
        () => 
        [
            {
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name',
                    },
                    {
                        Header: 'Date',
                        accessor: 'date',
                    },
                    {
                        Header: 'Rocket',
                        accessor: 'rocket',
                    },
                    {
                        Header: 'Patch',
                        accessor: 'patch',
                    },
                ]
            }
        ]
    );
    

    console.log(pastLaunches);

    return (
        <>
            <Row className="pt-3">
                <Col className="col-6">
                    <Card>
                        <Header>
                            {Title().renderH3('Total launches')}
                        </Header>
                        <Body>
                            <Text>Total</Text>
                        </Body>
                    </Card>
                </Col>
                <Col className="col-6">
                    <Card>
                        <Header>
                            {Title().renderH3('Upcoming launches')}
                        </Header>
                        <Body>
                            <Text>Launches</Text>
                        </Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center pt-3">
                <Col className="col-8">
                    <Card>
                        <Header>
                            {Title().renderH3('Failed launches')}
                        </Header>
                        <Body>
                            <Text>Launches</Text>
                        </Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


const iconColor = () => {
    return 'primary'
}

export default Launches

