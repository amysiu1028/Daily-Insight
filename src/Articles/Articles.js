
import Article from "../Article/Article"
import './Articles.scss'

const Articles = ({stories}) => {
    if (!stories || stories.length === 0) {
        return <p data-test='error-message' className="error-message-container">Server is down, please try again later.</p>
    }

    const sortByMostRecent = stories.sort((a, b) => b.publishedAt - a.publishedAt)
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
    <div data-test='all-articles' className="all-articles-container">
        {displaySortedStories}
    </div>
  )
}

export default Articles
