import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Container } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

export default class Edit extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Typography
                        variant='h6'
                        component='h2'
                        color='textSecondary'
                        gutterBottom
                    >
                     Edit Employee
                    </Typography>

                    <form noValidate autoCapitalize='off'>
                        <TextField
                            label="name"
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            required
                        />
                        <TextField
                            label="username"
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            required
                        />
                        <TextField
                            label="email"
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            required
                        />
                        <TextField
                            label="phone"
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            required
                        />
                        <TextField
                            label="street"
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            required
                        />
                        <Button
                            type='submit'
                            color='secondary'
                            variant='contained'
                        >
                            Submit
                        </Button>
                    </form>
                </Container>
            </div>
        )
    }
}
