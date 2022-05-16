

const CreateJobs = ({children, ...props}) => {
    return ( 
        <CreateJobsContainer {...props}>{children}</CreateJobsContainer>
     );
}

CreateJobs.Company = function CreateJobsCompany({children, ...props}) {
    return (
        <Company {...props}>{children}</Company>
    )
}
 
export default CreateJobs;