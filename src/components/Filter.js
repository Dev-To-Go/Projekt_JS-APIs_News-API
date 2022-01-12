//*****************************************************************************
// language
// The 2-letter ISO-639-1 code of the language you want to get headlines for.
// Possible options:
//    ar,de,en,es,fr,he,it,nl,no,pt,ru,se,ud,zh.
const languages = [
    { key: "de", value: "Deutsch" },
    { key: "ar", value: "العربية" },
    { key: "en", value: "English" },
    { key: "es", value: "Español" },
    { key: "fr", value: "Français" },
    { key: "he", value: "עברית" },
    { key: "it", value: "Italiano" },
    { key: "nl", value: "Nederlands" },
    { key: "no", value: "Norsk" },
    { key: "pt", value: "Português" },
    { key: "ru", value: "русский" },
    { key: "se", value: "Davvisámegiella" },
    // { key: 'ud', value: '' },
    { key: "zh", value: "中文" }
];


//*****************************************************************************
// country
// The 2-letter ISO 3166-1 code of the country you want to get headlines for.
// Possible options:
//     ae,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,fr,gb,gr,hk,hu,id,ie,il,in,it,jp,kr,
//     lt,lv,ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za
const countries = [
    { key: "de", value: "Deutschland" },
    { key: "ae", value: "United Arab Emirates" },
    { key: "ar", value: "Argentina" },
    { key: "at", value: "Austria" },
    { key: "au", value: "Australia" },
    { key: "be", value: "Belgium" },
    { key: "bg", value: "Bulgaria" },
    { key: "br", value: "Brazil" },
    { key: "ca", value: "Canada" },
    { key: "ch", value: "Suisse" },
    { key: "cn", value: "China" },
    { key: "co", value: "Columbia" },
    { key: "cu", value: "Cuba" },
    { key: "cz", value: "Czechia" },
    { key: "eg", value: "Egypt" },
    { key: "fr", value: "France" },
    { key: "gb", value: "United Kingdom" },
    { key: "gr", value: "Greece" },
    { key: "hk", value: "Hong Kong" },
    { key: "hu", value: "Hyngary" },
    { key: "id", value: "Indonesia" },
    { key: "ie", value: "Ireland" },
    { key: "il", value: "Israel" },
    { key: "in", value: "India" },
    { key: "it", value: "Italy" },
    { key: "jp", value: "Japan" },
    { key: "kr", value: "Korea (South)" },
    { key: "lt", value: "Lithuania" },
    { key: "lv", value: "Latvia" },
    { key: "ma", value: "Marocco" },
    { key: "mx", value: "Mexico" },
    { key: "my", value: "Malaysia" },
    { key: "ng", value: "Nigeria" },
    { key: "nl", value: "Netherlands" },
    { key: "no", value: "Norway" },
    { key: "nz", value: "New Zealand" },
    { key: "ph", value: "Philippines" },
    { key: "pl", value: "Poland" },
    { key: "pt", value: "Portugal" },
    { key: "ro", value: "Romania" },
    { key: "rs", value: "Serbia" },
    { key: "ru", value: "Russian Federation" },
    { key: "sa", value: "Saudi Arabia" },
    { key: "se", value: "Sweden" },
    { key: "sg", value: "Singapore" },
    { key: "si", value: "Slovenia" },
    { key: "sk", value: "Slovakia" },
    { key: "th", value: "Thailand" },
    { key: "tr", value: "Turkey" },
    { key: "tw", value: "Taiwan" },
    { key: "ua", value: "Ukraine" },
    { key: "us", value: "USA" },
    { key: "ve", value: "Venezuela" },
    { key: "za", value: "South Africa" }
];



const Filter = () => {
    return (
        <form className="mainQuery">
            <label htmlFor="txtKeywords">Suche
                <input type="text" name="txtKeywords" id="txtKeywords" />
            </label>

            <label htmlFor="dateStart">Anfangsdatum
                <input type="date" name="dateStart" id="dateStart" />
            </label>

            <label htmlFor="dateEnd">Enddatum
                <input type="date" name="dateEnd" id="dateEnd" />
            </label>

            <label htmlFor="selectCountry">Land
                <select name="selectCountry" id="selectCountry">
                    {countries.length && countries.map(country =>
                        <option key={country.key} value={country.key}>{country.value}</option>)}
                </select>
            </label>

            <label htmlFor="selectLanguage">Sprache
                <select name="selectLanguage" id="selectLanguage">
                    <option value="*">Alle</option>
                    {languages.length && languages.map(language =>
                        <option key={language.key} value={language.key} {...language.length > 2 ? language.selected : ""}>{language.value}</option>)}
                </select>
            </label>

            <label htmlFor="selectCategory">Kategorie
                <select name="selectCategory" id="selectCategory">
                    <option value="*">Alle</option>
                </select>
            </label>
            <button>SUCHEN</button>
        </form >
    );
}

export default Filter;