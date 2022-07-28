import {DiscussionEmbed} from "disqus-react"
const Comments = () => {
  
  return (
    <DiscussionEmbed
    shortname='sorting visual'
    config={
        {
            url: "https://sage-nougat-85746e.netlify.app",
        }
    }
/>
  )
}
export default Comments;
