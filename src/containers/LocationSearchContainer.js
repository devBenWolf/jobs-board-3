import { useContext } from "react";
import Jobs from "../components/HomeComponents/Jobs"
import {Link, Outlet} from "react-router-dom"
import { DataContext } from "../contexts/DataContext"
import {ThemeContext} from "../contexts/ThemeContext"

const LocationSearchContainer = () => {
    const {currentData, locationInputData, jobs} = useContext(DataContext)
    const {themeBoolean} = useContext(ThemeContext)
    console.log(jobs)
    return ( 
        currentData.filter(datum => datum.location.toLowerCase().includes(locationInputData)).map(datum => (
            <Jobs.OuterDiv key = {datum.id}>
                <Jobs.IconBackground backgroundColor={datum.logoBackground}>
                    <Jobs.Icon
                        src={datum.logo}
                    />
                </Jobs.IconBackground>
                <Jobs.InnerDiv themeBoolean={themeBoolean}>
                    <Link
                        style={{textDecoration: "none"}}
                        to={`/${datum.id}`}
                    >
                        <Jobs.InfoDiv>
                            <Jobs.Heading>{datum.postedAt}<Jobs.HeadingSpan></Jobs.HeadingSpan>{datum.contract}</Jobs.Heading>
                            <Jobs.InfoText themeBoolean={themeBoolean}>{datum.position}</Jobs.InfoText>
                            <Jobs.InfoSubtext>{datum.company}</Jobs.InfoSubtext>
                            <Jobs.LocationText>{datum.location}</Jobs.LocationText>
                        </Jobs.InfoDiv>
                    </Link>
                </Jobs.InnerDiv>
                <Outlet />
            </Jobs.OuterDiv>
        ))
     );
}
 
export default LocationSearchContainer;