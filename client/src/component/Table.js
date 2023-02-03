import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useEffect, useState } from 'react';



function createData(end_year, country, region, intensity, likelihood) {
    return { end_year, country, region, intensity, likelihood };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function AccessibleTable(props) {
    const [variable, setVariable] = useState("");
    const [rows, setRows] = useState();
    const [end_year, setEnd_year] = useState();
    const [country, setCountry] = useState();
    const [region, setRegion] = useState();
    const [intensity, setIntensity] = useState();
    const [likelihood, setLikelihood] = useState();

    useEffect(() => {
        async function fetchData() {
            const body = { end_year, country, region, intensity, likelihood }
            const { data } = await axios.get('http://localhost:5000/variable', body)
            // console.log(data);
            setVariable(data);
        }
        fetchData();
    });


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table" data={variable}>

                <TableHead>
                    <TableRow>
                        <TableCell>End_year</TableCell>
                        <TableCell align="right">Intensity</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Region</TableCell>
                        <TableCell align="right">Likelihood</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {!variable ? "loading" : variable.map((row) => (
                        <TableRow key={row}>
                            <TableCell component="th" scope="row">
                                {row.end_year}
                            </TableCell>
                            <TableCell align="right">{row.intensity}</TableCell>
                            <TableCell align="right">{row.region}</TableCell>
                            <TableCell align="right">{row.country}</TableCell>
                            <TableCell align="right">{row.likelihood}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}