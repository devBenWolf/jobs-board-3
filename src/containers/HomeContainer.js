import {useContext, useEffect, useState} from "react"
import {Link, Outlet} from "react-router-dom"
import data from "../data"
import {ThemeContext} from "../context/ThemeContext"
import Jobs from "../components/HomeComponents/Jobs"
import Search from "../components/HomeComponents/Search"
import AltSearch from"../components/HomeComponents/AltSearch"
import {FaUndo} from "react-icons/fa"
import { SearchDiv } from "../components/HomeComponents/Search/styles/searchStyles"
import { JobsMain } from "../components/HomeComponents/Jobs/styles/jobsStyles"

const HomeContainer = () => {

    // Detect Chrome
    let browser = window.navigator.vendor
    let breakpoint

    browser === "Google Inc." ? breakpoint = 650 : breakpoint = 700


    // data matching full time filter
    const time = data.filter(datum => datum.contract === "Full Time")

    const {themeBoolean} = useContext(ThemeContext)
    // 
    const [currentData, setCurrentData] = useState(data)
    const [mainInputData, setMainInputData] = useState("")
    const [locationInputData, setLocationInputData] = useState("")
    const [inputFilter, setInputFilter] = useState(1)
    const [timeFilter, setTimeFilter] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    const [inputFocus, setInputFocus] = useState(1)
    

    


    const mainInput = () => {
        setInputFocus(prevCount => prevCount + 1)
        setLocationInputData("")
        console.log(inputFocus)
      }

    const locationInput = () => {
      setInputFocus(prevCount => prevCount - 1)
      setMainInputData("")
      console.log(inputFocus)
    }

    const fullTimeFilter = () => {
        timeFilter ? setCurrentData(data) : setCurrentData(time)
        setTimeFilter(prevState => !prevState)
      }
    
      const clearInput = () => {
        setMainInputData("")
        setLocationInputData("")
      }
    
      const lowerCaseMainData = (event) => {
        setMainInputData(event.target.value.toLowerCase())
      }
    
      const lowerCaseLocationData = (event) => {
        setLocationInputData(event.target.value.toLowerCase())
      }
    
      // handle layout of search bar on window resize
      useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
          window.addEventListener("resize", handleResize)
          return () => {
            window.removeEventListener("resize", handleResize)
          }
      }, [])

        // loop through filter variables (companies, titles, locations)
    const filterArray = [1, 2]
    const listLoop = () => {
        if (inputFilter === filterArray.length) {
      setInputFilter(1)
        } else {
            setInputFilter(prevState => prevState + 1)
    }
  }

    const mainSearch = currentData.filter(datum => datum.company.toLowerCase().includes(mainInputData) ||
        datum.position.toLowerCase().includes(mainInputData)).map((datum) => (
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
    
    const locationSearch = currentData.filter(datum => datum.location.toLowerCase().includes(locationInputData)).map(datum => (
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

    const mobile = <Search.Wrapper
                        themeBoolean={themeBoolean}
                    >
                        {inputFilter === 1 ? (
                            <Search.Input 
                                type="text"
                                placeholder = "Enter company, job..."
                                value={mainInputData}
                                onChange = {lowerCaseMainData}
                                themeBoolean={themeBoolean}
                            />
                        ) : (
                            <Search.Input 
                                type = "text"
                                placeholder = "Enter location..."
                                value = {locationInputData}
                                onChange = {lowerCaseLocationData}
                                themeBoolean={themeBoolean}
                            />
                        )}
                        <Search.InputSwitch 
                            src={"/assets/mobile/icon-filter.svg"}
                            onClick = {listLoop}
                        />
                        <Search.Reset
                            onClick = {clearInput}                         
                        >
                        <FaUndo style={{color: "white"}} size="25" />
                        </Search.Reset>
                    </Search.Wrapper>

    const desktop = <Search.Wrapper
                            themeBoolean={themeBoolean}
                    >
                        <Search.Input 
                            type = "text"
                            placeholder = "Enter company, job..."
                            value = {mainInputData}
                            onChange = {lowerCaseMainData}
                            onFocus = {mainInput}
                            themeBoolean = {themeBoolean}
                        />
                        <Search.Input 
                            type = "text"
                            placeholder = "Enter location..."
                            value = {locationInputData}
                            onChange = {lowerCaseLocationData}
                            onFocus = {locationInput}
                            themeBoolean = {themeBoolean}
                        />
                        <Search.TimeFilterDiv
                            themeBoolean = {themeBoolean}
                        >
                            <Search.TimeFilterLabel
                                themeBoolean = {themeBoolean}
                            >
                                <Search.TimeFilterInput
                                    onClick = {fullTimeFilter}
                                />Full Time
                            </Search.TimeFilterLabel>
                            <Search.Reset
                            onClick = {clearInput}                         
                            >
                                <FaUndo style={{color: "white"}} size="15" />
                            </Search.Reset>
                        </Search.TimeFilterDiv>
                    </Search.Wrapper>  
                    
    const desktopChrome = <AltSearch.Wrapper
                              themeBoolean={themeBoolean}
                          >
                          <AltSearch.Input 
                              type = "text"
                              placeholder = "Enter company, job..."
                              value = {mainInputData}
                              onChange = {lowerCaseMainData}
                              onFocus = {mainInput}
                              themeBoolean = {themeBoolean}
                          />
                          <AltSearch.Input 
                              type = "text"
                              placeholder = "Enter location..."
                              value = {locationInputData}
                              onChange = {lowerCaseLocationData}
                              onFocus = {locationInput}
                              themeBoolean = {themeBoolean}
                          />
                          <AltSearch.TimeFilterDiv
                              themeBoolean = {themeBoolean}
                          >
                              <AltSearch.TimeFilterLabel
                                  themeBoolean = {themeBoolean}
                              >
                                  <AltSearch.TimeFilterInput
                                      onClick = {fullTimeFilter}
                                  />Full Time
                              </AltSearch.TimeFilterLabel>
                              <AltSearch.Reset
                              onClick = {clearInput}                         
                              >
                                  <FaUndo style={{color: "white"}} size="15" />
                              </AltSearch.Reset>
                          </AltSearch.TimeFilterDiv>
                          </AltSearch.Wrapper>  
                    
    const mobileFilter = inputFilter === 1 ? mainSearch : locationSearch
    const desktopFilter = inputFocus === 2 ? mainSearch : locationSearch

    return (
        <> 
            <SearchDiv>
                {width <= breakpoint ? mobile : browser === "Google Inc." ? desktopChrome : desktop}
            </SearchDiv>
            <JobsMain>
                {width < breakpoint ? mobileFilter : desktopFilter}
            </JobsMain>
        </>
     );
}
 
export default HomeContainer;