import {
    OuterDiv,
    InnerDiv,
    IconBackground,
    Icon,
    InfoDiv,
    Name,
    URL,
    Site
} from "./styles/companyStyles"

const Company = ({children, ...props}) => {
    return ( 
        <OuterDiv {...props}>{children}</OuterDiv>
     );
}

Company.InnerDiv = function CompanyInnerDiv({children, ...props}) {
    return (
        <InnerDiv {...props}>{children}</InnerDiv>
    )
}
Company.IconBackground = function CompanyIconBackground({children, ...props}) {
    return (
        <IconBackground {...props}>{children}</IconBackground>
    )
}
Company.Icon = function CompanyIcon({...props}) {
    return (
        <Icon {...props} />
    )
}

Company.InfoDiv = function CompanyInfoDiv({children, ...props}) {
    return (
        <InfoDiv {...props}>{children}</InfoDiv>
    )
}
Company.Name = function CompanyName({children, ...props}) {
    return (
        <Name {...props}>{children}</Name>
    )
}
Company.URL = function CompanyURL({children, ...props}) {
    return (
        <URL {...props}>{children}</URL>
    )
}
Company.Site = function CompanySite({children, ...props}) {
    return (
        <Site {...props}>{children}</Site>
    )
}

 
export default Company;