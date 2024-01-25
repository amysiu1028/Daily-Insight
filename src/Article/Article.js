import moment from "moment"
import './Article.scss'

const Article = ({title, author, description, url, date, img}) => {
   const readableDate = moment(date).utc().format('MM-DD-YYYY')
  return (
    <div className="single-article">
        <time datetime={date} >{readableDate}</time>
        <h2>{title}</h2>
        <p>{description}</p>
        <img className="article-img" src={img} altText={`Image of ${title}`}></img>
        <p>Written by: {author}</p>
        <a href={url}>Read full article</a>
    </div>
  )
}

export default Article


//Date format, install moment.js
