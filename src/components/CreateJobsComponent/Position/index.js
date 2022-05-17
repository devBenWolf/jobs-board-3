import {
    PositionSection,
    Title,
    Input
} from "./style/positionStyles.js"

const Position = ({children, ...props}) => {
    return ( 
        <PositionSection {...props}>{children}</PositionSection>
     );
}

Position.Title = function PositionTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
Position.Input = function PositionInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default Position;