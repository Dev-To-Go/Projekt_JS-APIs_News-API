import { BrowserRouter, NavLink } from "react-router-dom";

const ArticleDetails = (data) => {

    const article = data.article;

    let formatDate = (unformattedDate) => {
        return new Date(unformattedDate).toLocaleString('de', {
            weekday: 'long', // long, short, narrow
            day: '2-digit', // numeric, 2-digit
            month: '2-digit', // numeric, 2-digit, long, short, narrow
            year: 'numeric', // numeric, 2-digit
            hour: '2-digit',
            minute: '2-digit',
        });
    }



    return (<article className="ArticleDetails">
        <img src={article.urlToImage} alt="" />
        <h4>{article.title}</h4>
        <p>{article.description}</p>

        <div>
            <p>{formatDate(article.publishedAt)}</p>
            <BrowserRouter>
                <NavLink to={article.url}>Read More</NavLink>
            </BrowserRouter>
        </div>


    </article>);
}

export default ArticleDetails;