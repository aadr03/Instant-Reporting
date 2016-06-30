
    var loadLineChart = function(data){

      $(function () {
        $('#line').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Start Up'
        },
        xAxis: {
            categories: ['Round 1', 'Round 2', 'Round 3']
        },
        yAxis: {
            title: {
                text: 'Time'
            }
        },
        series: [{
            name: country(data,1),
            data: usaValue(data)
        }, {
            name: country(data,6),
            data: canadaValue(data)
        }, {
            name: country(data,11),
            data: germanyValue(data)
        }],
        });
      });

         
     };

    var loadBarChart = function(data){

      $(function () {
        $('#bar').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Update'
        },
        xAxis: {
            categories: ['Round 1', 'Round 2', 'Round 3']
        },
        yAxis: {
            title: {
                text: 'Time'
            }
        },
        series: [{
            name: country(data,1),
            data: usaValue(data)
        }, {
            name: country(data,6),
            data: canadaValue(data)
        }, {
            name: country(data,11),
            data: germanyValue(data)
        }],
        });
      });

         
     };

        var loadPieChart = function(data){

      $(function () {
        $('#pie').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Export'
        },
        xAxis: {
            categories: ['Round 1', 'Round 2', 'Round 3']
        },
        yAxis: {
            title: {
                text: 'Time'
            }
        },
        series: [{
            name: country(data,1),
            data: [2,3,4]
        }, {
            name: country(data,6),
            data: [1,2,3]
        }, {
            name: country(data,12),
            data: [2,3,4]
        }],
        });
      });

         
     };

var country = function(data,refNum){
  var range = data.result.values;
  var valArray = range[0][refNum];
  console.log(valArray);
  return valArray;
}


var usaValue = function (data) {
  var range = data.result.values;
  var valArray = range[2];
  var myArray = [];
    myArray.push(JSON.parse(valArray[1]));
    myArray.push(JSON.parse(valArray[2]));
    myArray.push(JSON.parse(valArray[3])); 
    console.log(myArray);
  return myArray;
  };

var canadaValue = function (data) {
  var range = data.result.values;
  var valArray = range[2];
  var myArray = [];
    myArray.push(parseInt(valArray[6]));
    myArray.push(parseInt(valArray[7]));
    myArray.push(parseInt(valArray[8])); 
    console.log(myArray);
  return myArray;
  };

  var germanyValue = function (data) {
  var range = data.result.values;
  var valArray = range[2];
  var myArray = [];
    myArray.push(parseInt(valArray[11]));
    myArray.push(parseInt(valArray[12]));
    myArray.push(parseInt(valArray[13])); 
    console.log(myArray);
  return myArray;
  };

// var update = function (data) {
//   var range = data.result.values;
//   var valArray = range[3];
//   var myArray = [];
//   for (j=1; j < valArray.length;j++){
//     myArray.push(JSON.parse(valArray[j]));
//   }
//   console.log(myArray);
//   return myArray;
// };

// var exportDa = function (data) {
//   var range = data.result.values;
//   var valArray = range[4];
//   var myArray = [];
//   for (j=1; j < valArray.length;j++){
//     myArray.push(JSON.parse(valArray[j]));
//   }
//   console.log(myArray);
//   return myArray;
// };


