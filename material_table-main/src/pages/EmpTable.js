import React, { Component } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import TextField from '@material-ui/core/TextField';

export default class EmpTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        this.getPost();
    }

    getPost() {
        axios.get("http://localhost:5000/posts").then((res) => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.posts,
                });
                console.log(this.state.posts);
            }
        });
    }

    render() {
        return (
            <div>
                <Typography
                    variant='h6'
                    component='h2'
                    color='textSecondary'
                    gutterBottom>
                    Employee Table
                </Typography>
                <form>
                    <TextField id="standard-basic" label="Search" />
                </form>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>name</TableCell>
                                <TableCell>username</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>phone</TableCell>
                                <TableCell>street</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.posts.map((post) => (
                                <TableRow>
                                    <TableCell>{post.name}</TableCell>
                                    <TableCell>{post.username}</TableCell>
                                    <TableCell>{post.email}</TableCell>
                                    <TableCell>{post.phone}</TableCell>
                                    <TableCell>{post.street}</TableCell>
                                    <TableCell>
                                        <DeleteIcon />
                                    </TableCell>
                                    <TableCell>
                                        <Link to='/edit'>
                                            <EditIcon />
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <Link to='/view'>
                                            <VisibilityIcon />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="btn">
                    <Link to='/add'><Button color="secondary"><AddIcon />Create</Button></Link>
                    <Button color="secondary"><CloudDownloadIcon /> export</Button>
                </div>
            </div>
        );
    }
}
