DEBUG = true;

if (DEBUG){ 
  LEARNING_RATE = 0.2;
  args = [10,20,30,40,60,70,2,3,4,2,3,4];
  console.log("Args : ");
  console.log(args);

  var X = init_X(args.length,150);
  console.log("X:");
  console.log(X);

  bias = 10;
  console.log("bias : ");
  console.log(bias);
    
  var y = init_y(X,args,bias);  
  console.log("y: ");
  console.log(y);

  var theta = init_theta(X);
  console.log("Theta : ")
  console.log(theta);

  h = hypothesis(theta,X);
  console.log("h : ")
  console.log(h);

  cost = cost_function(h,y);
  console.log("Error :");
  console.log(cost);

  gradient = compute_gradient(h,y,X);
  console.log("Grad :");
  console.log(gradient);

  theta = init_theta(X);

  result = train(X,y,theta,LEARNING_RATE,100);
  console.log(result.theta);
  console.log(result.cost_history);
}

drawChart();

function drawChart(){

   var chart = new CanvasJS.Chart("costGraph",
      {
       zoomEnabled: true,
     animationEnabled: true,
     animationDuration: 1000,

      axisX:{
        interval: 10,
        title: "Epochs"
      },

      axisY:{
       title: "Cost function"
      },

     title:{
        text: "Linear Regression"
        },
         data: [
        {
          type: "line",
          dataPoints: result.cost_history
        }
        ],
         legend: {
          horizontalAlign: "right",
          verticalAlign: "center"
        },

      });

  chart.render();

}