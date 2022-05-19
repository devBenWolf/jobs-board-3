import {
    CreateJobsMain,
    PageTitle,
    Submit,
    SubDiv
} from "./style/createJobsStyles"

const CreateJobs = ({children, ...props}) => {
    return ( 
        <CreateJobsMain {...props}>{children}</CreateJobsMain>
     );
}

CreateJobs.SubDiv = function CreateJobsSubDiv({children, ...props}) {
    return (
        <SubDiv {...props}>{children}</SubDiv>
    )
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