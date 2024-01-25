
import Article from "../Article/Article"
import './Articles.scss'

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
                key={story.url}
                date={story.publishedAt}
                img={story.urlToImage}
            />
        )
    })
  return (
    <div className="all-articles-container">
        {displaySortedStories}
    </div>
  )
}

export default Articles
