import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

import './style.css'

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));


export default function Reviews() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <div className='App'>
           
            <div className='blockqutes'>
                <div className='blockquote blockquote-bordered blockquote-quoted'>
                    <p className='blockqute_text'>"SVG React Lorem ipsum dolor sit amet,
                 consectetursicing elit. Ipsum eos ut consectetur numquam ullam fuga animi <br />
                 laudantium nobis rem molestias.icons of popular icon packs using ES6 imports. ... "
                </p>
                    {/* <EmojiEmotionsIcon style={{ fontSize: '50px', marginLeft:'90%', marginTop: '1%' }} /> */}
                    <p className='blockqute_text blockqute_text-credit'>Aman Ibraev </p>
                </div>
               
                <div className='blockquote blockquote-bordered blockquote-quoted'>
                    <p className='blockqute_text'>"SVG React Lorem ipsum dolor sit amet,
                 consectetursicing elit. Ipsum eos ut consectetur numquam ullam fuga animi <br />
                 laudantium nobis rem molestias.icons of popular icon packs using ES6 imports. ... "
                </p>
                    {/* <EmojiEmotionsIcon style={{ fontSize: '50px', marginLeft:'90%', marginTop: '1%' }} /> */}
                    <p className='blockqute_text blockqute_text-credit'>Aman Ibraev </p>
                </div>
                <div className='blockquote blockquote-bordered blockquote-quoted'>
                    <p className='blockqute_text'>"SVG React Lorem ipsum dolor sit amet,
                 consectetursicing elit. Ipsum eos ut consectetur numquam ullam fuga animi <br />
                 laudantium nobis rem molestias.icons of popular icon packs using ES6 imports. ... "
                </p>
                    <p className='blockqute_text blockqute_text-credit'>Aman Ibraev </p>
                </div>
            </div>
         
            <div>
                <Button className='button' variant="contained" color='secondary' style={{ marginTop: '10%' }} onClick={handleClickOpen}>
                    Оставить отзыв
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title">
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Оставьте отзыв
                    </DialogTitle>
                    <DialogContent>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField type='text' id="standard-basic" label="Ваша имя" /><br />
                            <TextField type='email' id="standard-basic" label="Ваш телефон" /><br />
                            <label>Ваша</label><br />
                            <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Оставте отзыв" />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Отправить
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
          
        </div>
    )
}
