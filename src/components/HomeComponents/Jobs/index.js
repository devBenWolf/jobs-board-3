import {
    JobsMain,
    OuterDiv,
    InnerDiv,
    InfoDiv,
    Heading,
    HeadingSpan,
    InfoText,
    InfoSubtext,
    LocationText,
    IconBackground,
    Icon
} from "./styles/jobsStyles"

const Jobs = ({children, ...props}) => {
    return ( 
        <JobsMain {...props}>{children}</JobsMain>
     );
}
 
Jobs.OuterDiv = function JobsOuterDiv({children, ...props}) {
    return (
        <OuterDiv {...props}>{children}</OuterDiv>
    )
}
Jobs.InnerDiv = function JobsInnerDiv({children, ...props}) {
    return (
        <InnerDiv {...props}>{children}</InnerDiv>
    )
}
Jobs.InfoDiv = function JobsInfoDiv({children, ...props}) {
    return (
        <InfoDiv {...props}>{children}</InfoDiv>
    )
}
Jobs.Heading = function JobsHeading({children, ...props}) {
    return (
        <Heading {...props}>{children}</Heading>
    )
}
Jobs.HeadingSpan = function JobsHeadingSpan({children, ...props}) {
    return (
        <HeadingSpan {...props}>{children}</HeadingSpan>
    )
}
Jobs.InfoText = function JobsInfoText({children, ...props}) {
    return (
        <InfoText {...props}>{children}</InfoText>
    )
}
Jobs.InfoSubtext = function JobsInfoSubtext({children, ...props}) {
    return (
        <InfoSubtext {...props}>{children}</InfoSubtext>
    )
}
Jobs.LocationText = function JobsLocationText({children, ...props}) {
    return (
        <LocationText {...props}>{children}</LocationText>
    )
}

Jobs.IconBackground = function JobsIconBackground({children, ...props}) {
    return (
        <IconBackground {...props}>{children}</IconBackground>
    )
}
Jobs.Icon = function JobsIcon({children, ...props}) {
    return (
        <Icon {...props} />
    )
}

export default Jobs;

