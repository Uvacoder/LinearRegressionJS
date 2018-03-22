function getArgumentNumber(arguments_class){
	var args = document.getElementById(arguments_class);

	return args.childElementCount;
}

function addArgument(){
	var args_class = "arguments";
	var args_num = getArgumentNumber(args_class) + 1;
	console.log(args_num);
	var args_dom = document.getElementById(args_class);
	var new_arg = "<input id=\"" + "argument_" + args_num +  "\" type=\"number\" name=\"\" value=\"0\" placeholder=\"\" style=\"max-width: 50px;\">"

	args_dom.innerHTML += new_arg;
	console.log(args_dom);
}

function removeArgument(){
	var args_id = "argument_" + getArgumentNumber("arguments");
	console.log(args_id);
	document.getElementById(args_id).remove();
}

function getArguments(){
	args = [];

	let args_div = document.getElementById("arguments").children;

	for (var i = 0; i < getArgumentNumber("arguments");  i++) {
		args.push( parseInt(args_div[i].value) );
	}

	console.log(args);
	return args;
}

