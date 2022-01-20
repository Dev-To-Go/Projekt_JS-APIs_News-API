//*****************************************************************************
import { categories } from "../data/categories";
import { countries } from "../data/countries";
import { languages } from "../data/language";

//*****************************************************************************
const Filter = () => {
    return (
        <form className="mainQuery">
            <label htmlFor="txtKeywords">
                Suche
                <input type="text" name="txtKeywords" id="txtKeywords" />
            </label>

            <label htmlFor="dateStart">
                Anfangsdatum
                <input type="date" name="dateStart" id="dateStart" />
            </label>

            <label htmlFor="dateEnd">
                Enddatum
                <input type="date" name="dateEnd" id="dateEnd" />
            </label>

            <label htmlFor="selectCountry">
                Land
                <select name="selectCountry" id="selectCountry">
                    {countries.length &&
                        countries.map((country) => (
                            <option key={country.key} value={country.key}>
                                {country.value}
                            </option>
                        ))}
                </select>
            </label>

            <label htmlFor="selectLanguage">
                Sprache
                <select name="selectLanguage" id="selectLanguage">
                    <option value="*">Alle</option>
                    {languages.length &&
                        languages.map((language) => (
                            <option key={language.key} value={language.key}>
                                {language.value}
                            </option>
                        ))}
                </select>
            </label>

            <label htmlFor="selectCategory">
                Kategorie
                <select name="selectCategory" id="selectCategory">
                    <option value="*">Alle</option>
                    {categories.length &&
                        categories.map((category) => (
                            <option key={category.key} value={category.key}>
                                {category.value}
                            </option>
                        ))}
                </select>
            </label>
            <button>SUCHEN</button>
        </form>
    );
};

//*****************************************************************************
export default Filter;
