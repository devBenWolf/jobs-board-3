import {
    ContractSection,
    Title,
    Input
} from "./style/contractStyles.js"

const Contract = ({children, ...props}) => {
    return ( 
        <ContractSection {...props}>{children}</ContractSection>
     );
}

Contract.Title = function ContractTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
Contract.Input = function ContractInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default Contract;