//*****************************************************************************
//
import { Component } from "react";

import ArticleCards from './ArticleCards';

//*****************************************************************************
//
const apiUrl = "https://newsapi.org/";
const apiKey = "e9644e4dd16e4a40b6b993673e9bfa14";

class Articles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articleData: []
        }
    }

    componentDidMount() {

        const url = `${apiUrl}/v2/top-headlines?country=de&sortBy=publishedAt&apiKey=${apiKey}`;
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ articleData: json.articles }))
    }

    render() {
        console.log(this.state.articleData);
        return (
            <section className="Articles">
                {this.state.articleData.length && this.state.articleData.map(article => <ArticleCards key={article.url} article={article} />)}
            </section>
        );
    }
}

export default Articles;