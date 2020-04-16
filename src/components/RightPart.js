import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ListItem from "./ListItem";

const styles = {
    upperPart: {
        padding: 16,
    },
    divider: {
        height: 1,
        width: 200,
        marginTop: 8,
        backgroundColor: '#CDDC39'
    },
    listGridParent: {
        maxHeight: '85%',
        overflowY: 'auto',
        marginRight: 8,
        marginLeft: 8,
    },
    currentRoute: {
        color: "#212121",
        fontSize: 14,
        fontWeight: 'bold'
    }
}

const arr = [
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
    'a',
]

const RightPart = () => {
    return (
        <Grid style={{height: '100%'}} container xs item direction='row' alignContent='flex-start'>
            <Grid style={styles.upperPart} container direction='row'>
                <Grid>
                    <Button disabled style={styles.currentRoute}>
                        CURRENT ROUTE
                    </Button>
                    <Divider orientation="horizontal" style={styles.divider} flexItem/>
                </Grid>
            </Grid>

            <Grid spacing={1} style={styles.listGridParent} container xs item direction='row'>
                {
                    arr.map(item => <ListItem/>)
                }
            </Grid>

        </Grid>
    );
};

export default RightPart;