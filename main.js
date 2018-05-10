const google = require('googleapis');
const sheets = (new google.GoogleApis()).sheets({
    version: 'v4',
    auth: 'AIzaSyCqrgNL-EHd-LJsqhuEdyi4wvUkcfJRLoI' // specify your API key here
});

(function main() {
    sheets.spreadsheets.values.get({
        spreadsheetId: '1mvDkuMTTyAH_CY1sXCH1XaQF5y2J4EqzdVI9srNpZq8',
        range: '20 апреля 18!A1:K'
    }, (res) => {
        console.log(`Hello ${res}!`);
    });
})();