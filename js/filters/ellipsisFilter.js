/**
 * filter that limitizes the strings on the lists
 */
angular.module("stock_managements").filter("ellipsis", function () {

    //receives a string and the size, default it's 10
    return function (input, size) {
        size = size || 10;
        //checks if the input's size are valid
        if (input.length < size) return input;

        //if not valid, resizes the shown string
		var output = input.substring(0, size) + "...";

        //return resized string
        return output;
	};
});