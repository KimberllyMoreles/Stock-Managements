angular.module("stock_managements").filter("ellipsis", function () {
    return function (input, size = 10) {
        console.log(input);
        if (input.length < size) return input;

        console.log(input);
		var output = input.substring(0, size) + "...";

        console.log(output);
        return output;
	};
});