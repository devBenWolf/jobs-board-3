

import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ThemeContext } from "../contexts/ThemeContext";
import CreateJobs from "../components/CreateJobsComponent/CreateJobs";
import { CreateJobsMain } from "../components/CreateJobsComponent/CreateJobs/style/createJobsStyles";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreateJobsContainer = () => {
    const [company, setCompany] = useState("")
    const [description, setDescription] = useState("")
    const {themeBoolean} = useContext(ThemeContext)

    // database and collection to which we add the jobs
    const jobsCollectionRef = collection(db, "jobs")

    // navigate to homepage after submitting job data
    const navigate = useNavigate()

    const createJob = async () => {
        // add document to the collection along with with author id object
        await addDoc(jobsCollectionRef, {company, description, author: 
            {name:  auth.currentUser.displayName, id: auth.currentUser.uid}})
            navigate("/")
    }

    return ( 
        <CreateJobsMain data-flow="2">
            <CreateJobs.PageTitle>enter jobs data</CreateJobs.PageTitle>
            {/* Company info */}
            <CreateJobs.CompanyDiv>
                <CreateJobs.CompanyTitle>company</CreateJobs.CompanyTitle>
                <CreateJobs.CompanyInput 
                    value = {company} 
                    onChange = {(event) => setCompany(event.target.value)}    
                />
            </CreateJobs.CompanyDiv>

            {/* Description info */}
            <CreateJobs.DescriptionDiv>
                <CreateJobs.DescriptionTitle>description</CreateJobs.DescriptionTitle>
                <CreateJobs.DescriptionInput rows="5" cols="40" 
                    value = {description} 
                    onChange = {(event) => setDescription(event.target.value)}
                />
            </CreateJobs.DescriptionDiv>
            <CreateJobs.Submit>Submit</CreateJobs.Submit>
        </CreateJobsMain>
     );
}
 
export default CreateJobsContainer;