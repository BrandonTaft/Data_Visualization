import {DiscussionEmbed} from "disqus-react"
const Comments = () => {
  const disqusShortname = "sorting-visual"
  const disqusConfig = {
    url: "https://sage-nougat-85746e.netlify.app/bubble",
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default Comments;