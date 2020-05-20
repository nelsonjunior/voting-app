import React from 'react'
import { makeStyles } from '@material-ui/core';
import VoteCard from './components/VoteCard';
import NavBar from '../../shared/components/NavBar'

const useStyles = makeStyles((theme) => ({
    rootContainer: {
      width: '100%',
      maxWidth: 1280,
      margin: 0,
      padding: 20,
    },

    content: {
        width: '100%',
        marginTop: 20,
    }
}));

export default function Home() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <NavBar currentPath='Teste' />
            <div className={classes.rootContainer}>
                <section className={classes.content}>
                    <VoteCard />
                </section>
            </div>
        </React.Fragment>
    )
}