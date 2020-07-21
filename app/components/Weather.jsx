var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage')
var owm = require('owm')

var Weather = React.createClass({
    getInitialState: function () {
        return {
           isLoading: false
        }
    },
    handleSearch: function(location) {
        var that = this;

        debugger;
        this.setState({isLoading: true})

        owm.getTemp(location).then(function(temp) {        
        that.setState({            
                location: location,
                temp: temp,
                isLoading: false                     
        });
        }, function  (errorMessage) {
            that.setState ({isLoading: false});
            alert('Wrong City Name');
        
        });
        }, 

    render: function() {
           var {isLoading, temp, location} = this.state;  
           
           function renderMessage () {
               if (isLoading) {
                  return <h3>Fetching Weather...</h3>;
               } else if (temp && location){
                   return <WeatherMessage temp={temp} location={location}/>;
               }
               
           }

        return (
            <div>
                <h3>Weather Component</h3>                 

                <WeatherForm onSearch={this.handleSearch}/>   

                {renderMessage()}      
            </div>
        );
    }
});
module.exports = Weather;