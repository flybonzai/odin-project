export class ApiSearch {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    buildUrl(cityName) {
        return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`;
    }

    async search(cityName) {
        const url = this.buildUrl(cityName);
        const response = await fetch(url);
        const json = await response.json();
        if (response.status == 200) {
            return json;
        } else {
            
            return {'result': json, 'status': response.status};
        }
    }
}