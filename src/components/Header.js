import { Component } from "react";

class Header extends Component {

    getCurrentDate = () => {
        return new Date().toLocaleString('de', {
            weekday: 'long', // long, short, narrow
            day: '2-digit', // numeric, 2-digit
            month: '2-digit', // numeric, 2-digit, long, short, narrow
            year: 'numeric' // numeric, 2-digit
        });
    }

    render() {
        return (
            <header className="Header">
                <div className="HeaderTitle">
                    <p>Parteiisch &amp; Meinungsmachend</p>
                    <h1>Ruhrpott News</h1>
                    <p>{this.getCurrentDate()}</p>
                </div>
            </header>
        );
    }
}
export default Header;

