import {ModalMain, Text} from "./style/modalStyles"

const Modal = ({children, ...props}) => {
    return ( 
        <ModalMain {...props}>{children}</ModalMain>
     );
}

Modal.Text = function ModalText({children, ...props}) {
    return (
        <Text {...props}>{children}</Text>
    )
}
 
export default Modal;