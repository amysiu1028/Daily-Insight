import moment from "moment"
const Article = ({title, author, description, url, date}) => {
   const readableDate = moment(date).utc().format('MM-DD-YYYY')
  return (
    <div>
        <time datetime={date} >{readableDate}</time>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{description}</p>
        <a href={url}>Read full article</a>
    </div>
  )
}

export default Article


//Date format, install moment.js
