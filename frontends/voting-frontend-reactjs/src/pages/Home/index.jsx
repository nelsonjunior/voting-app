import React from 'react'
import Typography from '@material-ui/core/Typography'
import "./styles.css";
import { makeStyles } from '@material-ui/core';
import VoteCard from './components/VoteCard';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
      width: '100%',
      maxWidth: 1280,
      margin: 0,
      padding: 20,
    },

    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    propertiesHeaderContainer: {
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'right',
        justifyContent: 'space-between',
    },

    content: {
        width: '100%',
        marginTop: 20,
    }
}));

export default function Home() {

    const classes = useStyles();

    return (
        <center>
            <div className={classes.rootContainer}>
                <header className={classes.headerContainer}>
                    <Typography variant="h3">
                        VOTING APP
                    </Typography>
                    <div className={classes.propertiesHeaderContainer}>
                        <Typography variant="caption">
                            Material.io/Guidelines/Components
                        </Typography>
                        <Typography variant="caption">
                            Version .5.22
                        </Typography>
                    </div>
                </header>
                <section className={classes.content}>
                    <VoteCard />
                </section>
            </div>
        </center>
    )
}