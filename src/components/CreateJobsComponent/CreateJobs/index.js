import {
    CreateJobsMain,
    PageTitle,
    CompanyDiv,
    CompanyTitle,
    CompanyInput,
    DescriptionDiv,
    DescriptionTitle,
    DescriptionInput
} from "./style/createJobsStyles"

const CreateJobs = ({children, ...props}) => {
    return ( 
        <CreateJobsMain {...props}>{children}</CreateJobsMain>
     );
}


CreateJobs.PageTitle = function CreateJobsPageTitle({children, ...props}) {
    return (
        <PageTitle {...props}>{children}</PageTitle>
    )
}

// Company info input section
CreateJobs.CompanyDiv = function CreateJobsCompanyDiv({children, ...props}) {
    return (
        <CompanyDiv {...props}>{children}</CompanyDiv>
    )
}
CreateJobs.CompanyTitle = function CreateJobsCompanyTitle({children, ...props}) {
    return (
        <CompanyTitle {...props}>{children}</CompanyTitle>
    )
}
CreateJobs.CompanyInput = function CreateJobsCompanyInput({children, ...props}) {
    return (
        <CompanyInput {...props}>{children}</CompanyInput>
    )
}

// description info input section
CreateJobs.DescriptionDiv = function CreateJobsDescriptionDiv({children, ...props}) {
    return (
        <DescriptionDiv {...props}>{children}</DescriptionDiv>
    )
}
CreateJobs.DescriptionTitle = function CreateJobsDescriptionTitle({children, ...props}) {
    return (
        <DescriptionTitle {...props}>{children}</DescriptionTitle>
    )
}
CreateJobs.DescriptionInput = function CreateJobsDescriptionInput({children, ...props}) {
    return (
        <DescriptionInput {...props}>{children}</DescriptionInput>
    )
}


 
export default CreateJobs;