import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})


export default function View() {

    const classes = useStyles()

    return (
        <div>
            <Typography
                className={classes.text}
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                Employee detail
            </Typography>
            <Typography
                className={classes.text}
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                name:
            </Typography>
            <Typography
                className={classes.text}
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                username:
            </Typography>
            <Typography
                className={classes.text}
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                email:
            </Typography>
            <Typography
                className={classes.text}
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                phone:
            </Typography>
            <Typography
                className={classes.text}
                variant='h6'
                component='h2'
                color='textSecondary'
                gutterBottom
            >
                street:
            </Typography>
        </div>
    )
}
