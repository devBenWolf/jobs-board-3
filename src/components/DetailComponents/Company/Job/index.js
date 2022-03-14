import {
    JobDiv,
    OuterDiv,
    InnerDiv,
    InfoDiv,
    Heading,
    HeadingSpan,
    HeadingDiv,
    Title,
    Location,
    Apply,
    ApplyDiv,
    BodyDiv,
    BodyText,
    SectionTitle,
    UList,
    OList,
    ListItem,
    Foot,
    FootDiv,
    FootApply,
    FootInfoDiv,
    FootTitle,
    FootName
} from "./styles/jobStyles"

const Job = ({children, ...props}) => {
    return ( 
        <JobDiv {...props}>{children}</JobDiv>
     );
}

Job.OuterDiv = function JobOuterDiv({children, ...props}) {
    return (
        <OuterDiv {...props}>{children}</OuterDiv>    
    )
}

Job.InnerDiv = function JobInnerDiv({children, ...props}) {
    return (
        <InnerDiv {...props}>{children}</InnerDiv>    
    )
}
Job.InfoDiv = function JobInfoDiv({children, ...props}) {
    return (
        <InfoDiv {...props}>{children}</InfoDiv>    
    )
}
Job.Heading = function JobHeading({children, ...props}) {
    return (
        <Heading {...props}>{children}</Heading>    
    )
}
Job.HeadingSpan = function JobHeadingSpan({children, ...props}) {
    return (
        <HeadingSpan {...props}>{children}</HeadingSpan>    
    )
}
Job.HeadingDiv = function JobHeadingDiv({children, ...props}) {
    return (
        <HeadingDiv {...props}>{children}</HeadingDiv>    
    )
}
Job.Title = function JobTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>    
    )
}
Job.Location = function JobLocation({children, ...props}) {
    return (
        <Location {...props}>{children}</Location>    
    )
}
Job.Apply = function JobApply({children, ...props}) {
    return (
        <Apply {...props}>{children}</Apply>    
    )
}
Job.ApplyDiv = function JobApplyDiv({children, ...props}) {
    return (
        <ApplyDiv {...props}>{children}</ApplyDiv>    
    )
}
Job.BodyDiv = function JobBodyDiv({children, ...props}) {
    return (
        <BodyDiv {...props}>{children}</BodyDiv>    
    )
}
Job.BodyText = function JobBodyText({children, ...props}) {
    return (
        <BodyText {...props}>{children}</BodyText>    
    )
}
Job.SectionTitle = function JobSectionTitle({children, ...props}) {
    return (
        <SectionTitle {...props}>{children}</SectionTitle>    
    )
}

Job.UList = function JobUList({children, ...props}) {
    return (
        <UList {...props}>{children}</UList>    
    )
}
Job.OList = function JobOList({children, ...props}) {
    return (
        <OList {...props}>{children}</OList>    
    )
}
Job.ListItem = function JobListItem({children, ...props}) {
    return (
        <ListItem {...props}>{children}</ListItem>    
    )
}
Job.Foot = function JobFoot({children, ...props}) {
    return (
        <Foot {...props}>{children}</Foot>    
    )
}
Job.FootDiv = function JobFoot({children, ...props}) {
    return (
        <FootDiv {...props}>{children}</FootDiv>    
    )
}
Job.FootApply = function JobFApply({children, ...props}) {
    return (
        <FootApply {...props}>{children}</FootApply>    
    )
}
Job.FootInfoDiv = function JobFInfoDiv({children, ...props}) {
    return (
        <FootInfoDiv {...props}>{children}</FootInfoDiv>    
    )
}
Job.FootTitle = function JobtTitle({children, ...props}) {
    return (
        <FootTitle {...props}>{children}</FootTitle>    
    )
}
Job.FootName = function JobFName({children, ...props}) {
    return (
        <FootName {...props}>{children}</FootName>    
    )
}


export default Job;