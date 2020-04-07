import axios from "axios";


// saving root endpoint of api into a variable
const url = "https://covid19.mathdro.id/api";

// exporting function to fetch initial data from api

export const fetchData = async (country) => {
    let difurl = url;
    // saving another variable for the api call with the selected country as a parameter
    if (country) {
        difurl = `${url}/countries/${country}`;
    }
    try { // destructuring the values from the api data
        const {
            data: {
                confirmed,
                recovered,
                deaths,
                lastUpdate
            }
        } = await axios.get(difurl);
        // saving data to new variable
        const appData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        };
        return appData;
    } catch (error) {
        console.log(error);
    }
};

// function to fetch the daily data from api, then maps over them to save to new values which are then returned

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        const appData = data.map((dailyData) => ({confirmed: dailyData.confirmed.total, deaths: dailyData.deaths.total, date: dailyData.reportDate}));

        return appData;
    } catch (error) {}
};

// function to fetch the list of countries from the api, returns a list of the country names by mapping through them

export const fetchCountries = async () => {
    try {
        const {data: {
                countries
            }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
};
