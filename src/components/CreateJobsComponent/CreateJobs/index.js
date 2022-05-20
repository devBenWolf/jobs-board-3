import {
    CreateJobsMain,
    PageTitle,
    Submit,
    TopSubDiv,
    BottomSubDiv
} from "./style/createJobsStyles"

const CreateJobs = ({children, ...props}) => {
    return ( 
        <CreateJobsMain {...props}>{children}</CreateJobsMain>
     );
}

CreateJobs.TopSubDiv = function CreateJobsTopSubDiv({children, ...props}) {
    return (
        <TopSubDiv {...props}>{children}</TopSubDiv>
    )
}
CreateJobs.BottomSubDiv = function CreateJobsBottomSubDiv({children, ...props}) {
    return (
        <BottomSubDiv {...props}>{children}</BottomSubDiv>
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