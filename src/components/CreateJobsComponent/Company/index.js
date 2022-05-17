import {CompanySection, CompanyTitle, CompanyInput} from "./style/companyStyles"

// --------------------------------------------------
// --------- Company info input section ---------
// --------------------------------------------------
const Company = ({children, ...props}) => {
    return ( 
        <CompanySection {...props}>{children}</CompanySection>
     );
}
 

Company.CompanyTitle = function CreateJobsCompanyTitle({children, ...props}) {
    return (
        <CompanyTitle {...props}>{children}</CompanyTitle>
    )
}
Company.CompanyInput = function CreateJobsCompanyInput({children, ...props}) {
    return (
        <CompanyInput {...props}>{children}</CompanyInput>
    )
}

export default Company; 