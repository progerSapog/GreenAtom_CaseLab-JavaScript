function getLength(array) {
	if (array.pop() === undefined) return 0;
    else return 1 + getLength(array)
}

console.log(getLength([1,2,3,4,5,6,7,8,9,10]));
