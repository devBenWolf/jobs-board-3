import Loading from "../components/HomeComponents/Loading";
import { LoadingMain } from "../components/HomeComponents/Loading/style/loadingStyles";


const LoadingContainer = (props) => {
    return ( 
        <LoadingMain className = {`loading-wrapper ${!props.isLoading ? "invisible" : null}`}>
            <Loading.Span className = "loading"><Loading.Span className = "loading-inner"></Loading.Span></Loading.Span>
        </LoadingMain>
     );
}
 
export default LoadingContainer;