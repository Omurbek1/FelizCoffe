import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import './style.css'



import { render } from '@testing-library/react';


const images = [
    {

        width: '150px',

    }
];
let s = 0;
let el;

const open = () => {
    s = s + 1;
    console.log(s)
    if (s === 1) {
        el = render(<div style={{
            display: 'flex',
            position: 'fixed',
            width: '7%',
            backgroundColor: 'chocolate',
            marginLeft: ' 90%',
            marginTop: '8%',
            textAlign: 'center',
            justifyContent: 'center'



        }}>Как ваши дела?</div>)
    }

    if (s === 2) {
        el = render(<div style={{
            display: 'flex',
            position: 'fixed',
            width: '7%',
            backgroundColor: 'chocolate',
            marginLeft: ' 90%',
            marginTop: '7%',

            textAlign: 'center',
            justifyContent: 'center'



        }}>Начни день с кофе!</div>)
    }
    if (s === 3) {
        el = render(<div style={{
            display: 'flex',
            position: 'fixed',
            width: '7%',
            backgroundColor: 'chocolate',
            marginLeft: ' 90%',
            marginTop: '7%',

            textAlign: 'center',
            justifyContent: 'center'



        }}>Начни день с фыфыЫкофе!</div>)
    }



}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'fixed',
        height: 150,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: '100',
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },

    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },

}));

export default function ButtonBases(props) {



    const classes = useStyles();




    return (

        <div className={classes.root}>

            {images.map((image) => (
                <ButtonBase id="something" onClick={() => {
                    open()
                }}




                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >

                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            ))}

            <div>
                {el}
            </div>


        </div>

    );
}
