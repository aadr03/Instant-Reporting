          
      var CLIENT_ID = '790914204018-4pn4ionapd2neo0j09ii08hm1rlgefg9.apps.googleusercontent.com';

      var SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, handleAuthResult);
      }
      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          loadSheetsApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      }
      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      function handleAuthClick(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }

      /**
       * Load Sheets API client library.
       */
       function helper(){
        loadSheetsApi();
       }
    
      function loadSheetsApi() {
        var discoveryUrl =
            'https://sheets.googleapis.com/$discovery/rest?version=v4';
        gapi.client.load(discoveryUrl).then(listMajors);
      }
     
     var loadTable = function(data){
          var range = data.result.values;
          console.table(range);
          var tableObj = $('<table border = "1" border-collapse:collapse />');
            for (i=0; i < range.length; i++) {
              var eachArray = range[i];
              //console.log(eachArray);
              var tableRowObj = $('<tr border = "1" />').appendTo(tableObj);
                for (j=0; j < eachArray.length; j++){
                    var eachValue = eachArray[j];
                    //mydata[mycnt++] = eachValue;
                    $('<td align = "center">'+ eachValue + '</td>').appendTo(tableRowObj);
                    //console.log(eachValue);
                }
                tableObj.appendTo($('#container'));
            }
     };

  

      function listMajors() {
        gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: '1uzxLg12JSkJncOxviQTLgzZIyhNzaXhqxDfZwdKid7I',
          range: 'Sheet1!A1:N11',
        }).then(function(response){
          
            loadTable(response);
            loadLineChart(response);
            loadBarChart(response);
            loadPieChart(response);

        }, function(response) {
          appendPre('Error: ' + response.result.error.message);
        }
        );
    }
 




    