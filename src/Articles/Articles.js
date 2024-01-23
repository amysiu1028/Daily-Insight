
import Article from "../Article/Article"

const Articles = ({stories}) => {
    console.log("stories", stories)
    const sortByMostRecent = stories.sort((a, b) => b.publishedAt - a.publishedAt)
    console.log("sortByMostRecent",sortByMostRecent)

    const displaySortedStories = sortByMostRecent.map((story) => {
        return (
            <Article
                title={story.title}
                author={story.author}
                description={story.description}
                url={story.url}
                key={story.title}
                date={story.publishedAt}
            />
        )
    })
  return (
    <div>
        {displaySortedStories}
    </div>
  )
}

export default Articles