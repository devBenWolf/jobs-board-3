import {Main} from "./primaryDivStyles"

const PrimaryDiv = ({children, ...props}) => {
    return ( 
        <Main {...props}>{children}</Main>
     );
}
 
export default PrimaryDiv;