var init_X = function(n,m){
	let X = [];	

	for (let i = 0; i < m; i++) {
		let x = [1];
		for (let j = 0; j< n; j++){
			x.push(Math.random());
		}
		X.push(x);
	}

	return X;
}

var init_y = function(X, args, bias){
	let y = [];
	if (args.length != X[0].length-1){
		throw "Different size";
	}
	else {
		for (let i =  0; i < X.length; i++){
			let y_val = 0;
			for (let j = 0; j < args.length; j++) {
				y_val += X[i][j+1] * args[j];
			}
			y_val+=bias;
			y.push(y_val);
		}
	}

	return y;
}

var init_theta = function(X){
	let theta = [];

	for (let i = 0; i < X[0].length ; i++) {
		theta.push(Math.random());
	}

	return theta;
}


var hypothesis = function(theta,X){
	let h = [];

	for (let i = 0; i < X.length; i++) {
	 	h_val = math.dot( X[i], theta);	
	 	h.push(h_val);
	 }

	return h;
}

var cost_function = function(h,y){
	 error = math.subtract(h,y);
	 m = y.length;

	 error_squared = [];

	 for (let i = 0; i < error.length; i++) {
	 	error_squared.push(Math.pow(error[i],2));
	 }

	 let cost = math.sum(error_squared) / 2 / m;

	 return cost;
}

var compute_gradient = function(h,y,X){
	error = math.subtract(h,y);
	gradient = math.multiply(math.transpose(X),error);
	gradient = math.divide(gradient,m);

	return gradient;
}

var update_theta = function(theta, lr, gradient){
	updated_theta = math.subtract(theta, math.multiply(gradient,lr));
	return updated_theta
}

var train = function(X,y,theta,lr,EPOCH){


	h = hypothesis(theta,X);
	J = cost_function(h,y);

	
	for (var i = 0; i < EPOCH ; i++) {
		if (i%10 === 0) console.log(J);
		gradient = compute_gradient(h,y,X);
		theta = update_theta(theta,lr,gradient);
		h = hypothesis(theta,X);
		J = cost_function(h,y);
	}

	console.log(theta);
}

LEARNING_RATE = 0.2;
DEBUG = true;

if (DEBUG){	
	args = [4,5,2,4,20,1,9];
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

	train(X,y,theta,LEARNING_RATE,1500);
}




