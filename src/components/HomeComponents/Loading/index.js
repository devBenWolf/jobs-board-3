import {LoadingMain, Span} from "./style/loadingStyles"

const Loading = ({children, ...props}) => {
    return ( 
        <LoadingMain {...props}>
            {children}
        </LoadingMain> 
    );
}

Loading.Span = function LoadingSpan({children, ...props}) {
    return (
        <Span {...props}>
            {children}
        </Span>
    )
}
 
export default Loading;