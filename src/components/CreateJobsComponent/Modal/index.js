

const Modal = ({children, ...props}) => {
    return ( 
        <ModalMain {...props}>{children}</ModalMain>
     );
}
 
export default Modal;