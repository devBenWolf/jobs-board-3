import {
    CreateJobsMain,
    PageTitle,
    CompanyDiv,
    CompanyTitle,
    CompanyInput,
    DescriptionDiv,
    DescriptionTitle,
    DescriptionInput,
    Submit,
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

// Submit button
CreateJobs.Submit = function CreateJobsSubmit({children, ...props}) {
    return (
        <Submit {...props}>{children}</Submit>
    )
}


 
export default CreateJobs;