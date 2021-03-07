import React from 'react';

const WeatherSearchBar = (props) => {
    return (<form onSubmit={props.onSubmit}> <label for="town-input"> Town </label><input name="town" id="town-input" type="text" onChange={props.onChange} />
        <label for="ISO-input"> ISO Code e.g UK </label><input name="ISO" id="ISO-input" type="text" onChange={props.onChange} />
        <input type="submit" value="Submit" />
    </form>);
}

export default WeatherSearchBar;