//Date format, install moment.js
import moment from "moment"
import './Article.scss'

const Article = ({title, author, description, url, date, img}) => {
   const readableDate = moment(date).utc().format('MM-DD-YYYY')
  return (
    <div className="single-article">
        <time dateTime={date} >{readableDate}</time>
        <h2>{title}</h2>
        <p>{description}</p>
        <img data-test='article-img' className="article-img" src={img} alttext={`Image of ${title}`}></img>
        <p>Written by: {author}</p>
        <a href={url}>Read full article</a>
    </div>
  )
}

export default Article


