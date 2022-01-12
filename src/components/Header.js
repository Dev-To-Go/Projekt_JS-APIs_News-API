import { Component } from "react";
import Filter from "./Filter";

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
                    <p>Abhängig<br />Parteiisch<br />Meinungsmachend</p>
                    <h1>Ruhrpott News</h1>
                    <p>{this.getCurrentDate()}</p>
                </div>
                <div className="HeaderFilter">
                    <Filter />
                </div>
            </header>
        );
    }
}
export default Header;

