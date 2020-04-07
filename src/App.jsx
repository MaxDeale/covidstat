import React, {Component} from "react";
import {Cards, Chart, CountryPicker} from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";


// App is a class based component with state, all other components are functional using useState hook

class App extends Component {
    state = {
        data: {},
        country: ""
    };

    // using asynchronous componendidmnount to fetch data with function from useState
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    // drop down menu uses this function to set state to the picked country - takes in the country as a parameter
    handleCountryChange = async (country) => { // first fetch data from api
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        // then set local state
        this.setState({data: fetchedData, country: country});
    };

    render() {
        const {data, country} = this.state;
        return (

            <div>
                <Header/>
                <div className={
                    styles.container
                }>
                    <Cards data={data}/>
                    <CountryPicker handleCountryChange={
                        this.handleCountryChange
                    }/>
                    <Chart data={data}
                        country={country}/>
                </div>
                <Footer/>
            </div>


        );
    }
}

export default App;
