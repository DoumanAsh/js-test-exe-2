import React from 'react'
import {connect} from 'react-redux'

import {enter_city, request_city} from '../stores/weather/actions.js'

const Input = (props) => <input placeholder="Type city and press enter..."
                                title="Press enter to request weather."
                                type="text" {...props}/>

const dispatch_to_props = (dispatch) => {
    return {
        onKeyPress: (event) => {
            if (event.key === "Enter") {
                dispatch(enter_city(event.target.value))
                dispatch(request_city(event.target.value))
                event.target.value = ''
            }
        }
    }
}

const CityInput = connect(null, dispatch_to_props)(Input)

export default CityInput
