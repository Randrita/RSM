/* chart.js chart examples */

// chart colors
var colors = ['#D82E2F','#242B2E','#23C4ED','#03203C','#FF6666','#758283','#E07C24','#0D0D0D','#F4BE2C'];




/* 3 donut charts */
var donutOptions = {
  cutoutPercentage: 50, 
  legend: {position:'bottom', padding:5, labels: {pointStyle:'circle', usePointStyle:true}}
};

// donut 1
var chDonutData1 = {
    labels: ['India', 'USA', 'United Kingdom','Singapore','South Africa','Switzerland','Canada','France','Australia'],
    datasets: [
      {
        backgroundColor: colors.slice(0,9),
        borderWidth: 0,
        data: [50, 23, 8,4,1,1,1,1,1]
      }
    ]
};

var chDonut1 = document.getElementById("chDonut1");



if (chDonut1) {
  new Chart(chDonut1, {
      type: 'doughnut',
      data: chDonutData1,
      outerHeight: 500,
      outerWidth: 500,
      innerHeight: 500,
      options: {
        plugins: {
            title: {
                display: true,
                text: 'GLOBAL DISTRIBUTION OF RSM STUDENTS'
            }
        },

        animations: {
            tension: {
              duration: 50000,

            }


    }
}
  });
}

 
 $(document).ready(function(){
     $('.counter-value').each(function(){
         $(this).prop('Counter',0).animate({
             Counter: $(this).text()
         },{
             duration: 3500,
             easing: 'swing',
             step: function (now){
                 $(this).text(Math.ceil(now));
             }
         });
     });
 });



