import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {AppBar, Dialog, DatePicker, FlatButton, RaisedButton} from 'material-ui'
import {MuiThemeProvider, getMuiTheme} from "material-ui/styles";
import redux from 'redux';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
	margin-top: 10px;
`;


// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    appBar: {
        height: 50
    }
});

const App = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <StyledAppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'))