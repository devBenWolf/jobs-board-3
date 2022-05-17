import {
    PostedAtSection,
    Title,
    Input
} from "./style/postedAtStyles.js"

const PostedAt = ({children, ...props}) => {
    return ( 
        <PostedAtSection {...props}>{children}</PostedAtSection>
     );
}

PostedAt.Title = function PostedAtTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
PostedAt.Input = function PostedAtInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default PostedAt;