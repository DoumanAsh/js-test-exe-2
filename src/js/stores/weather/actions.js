export const REQUEST_WEATHER = 1
export const RECEIVE_WEATHER = 2
export const RESET_WEATHER = 3
export const ENTER_CITY = 4
export const REQUEST_CITY = 5
export const UNKNOWN_CITY = 6
export const RESET_SEARCH = 7

export function request_weather(city_id) {
    return {
        type: REQUEST_WEATHER,
        city_id
    }
}

export function receive_weather(city_id, json) {
    return {
        type: RECEIVE_WEATHER,
        city_id,
        data: {
            city_id: city_id,
            city: json.title,
            time: json.time,
            today: json.consolidated_weather[0]
        }
    }
}

export function reset_weather() {
    return {
        type: RESET_WEATHER,
        data: {
            city_id: null,
            city: null,
            time: null,
            today: null
        }
    }
}

export function enter_city(name) {
    return {
        type: ENTER_CITY,
        name
    }
}

const cors_proxy_url = (url) => "https://cors-anywhere.herokuapp.com/" + url

const fetch_options = {
    mod: 'cors',
}

export const weather_refresher = {
    timer: null,
    start: function(action) {
        if (this.timer !== null) this.stop()
        this.timer = setInterval(action, 60 * 60 * 1000) //1 hour interval
    },
    stop: function() {
        clearInterval(this.timer)
        this.timer = null
    }
}

export function fetch_weather(id) {
    return dispatch => {
        dispatch(request_weather(id))
        weather_refresher.start(() => dispatch(fetch_weather(id)))
        return fetch(cors_proxy_url(`https://www.metaweather.com/api/location/${id}/`), fetch_options)
            .then(resp => resp.json())
            .then(resp => dispatch(receive_weather(id, resp)))
    }
}

function handle_request_city(data, name) {
    if (data.length === 1) {
        return fetch_weather(data[0].woeid);
    }
    else {
        return unknown_city(name)
    }
}

export function request_city(name) {
    return dispatch => {
        dispatch(reset_weather())
        return fetch(cors_proxy_url(`https://www.metaweather.com/api/location/search/?query=${encodeURIComponent(name)}`), fetch_options)
               .then(resp => resp.json())
               .then(resp => dispatch(handle_request_city(resp, name)) )
    }
}

export function unknown_city(name) {
    return {
        type: UNKNOWN_CITY,
        name
    }
}

export function reset_search() {
    return {
        type: RESET_SEARCH,
        name: "Use search box!"
    }
}
