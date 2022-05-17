import {
    DescriptionSection,
    Title,
    Input
} from "./style/descriptionStyles"

function Description({children, ...props}) {
    return (
        <DescriptionSection {...props}>{children}</DescriptionSection>
    )
}
Description.Title = function DescriptionTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
Description.Input = function CreateJobsDescriptionInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}

export default Description