import classes from './ErrorModal.module.css'
import Card from './Card'
import Button from './Button'
import ReactDOM  from 'react-dom';


const Backdrop = (props) =>{
   return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Modal =(props)=>{
    return(
 
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p >{props.message}</p>
            </div>
            <footer className={classes.action}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
};




const ErrorModal = ( props)=>{
    return(
         <>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))};
        {ReactDOM.createPortal(<Modal onConfirm={props.onConfirm} title={props.title} message={props.message}/>, document.getElementById('modal-root'))}
        </>
 
)}
export default ErrorModal;