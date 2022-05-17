import {
    LocationSection,
    Title,
    Input
} from "./style/locationStyles.js"

const Location = ({children, ...props}) => {
    return ( 
        <LocationSection {...props}>{children}</LocationSection>
     );
}

Location.Title = function LocationTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
Location.Input = function LocationInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default Location;