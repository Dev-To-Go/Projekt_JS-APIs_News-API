//*****************************************************************************
//
import { Component } from "react";

import ArticleCards from './ArticleCards';

//*****************************************************************************
//
class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articleData: []
        }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_APIURL}/v2/top-headlines?country=de&sortBy=publishedAt&apiKey=${process.env.REACT_APP_APIKEY}`)
            .then(response => response.json())
            .then(json => this.setState({ articleData: json.articles }))
    }

    render() {
        return (
            <section className="Articles">
                {this.state.articleData.length && this.state.articleData.map(article => <ArticleCards key={article.url} article={article} />)}
            </section>
        );
    }
}

export default Articles;