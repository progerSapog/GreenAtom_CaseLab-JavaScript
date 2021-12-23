function getLength(array) {
<<<<<<< HEAD
    if (array.pop() === undefined) return 0;
    else return 1 + getLength(array)
=======
	if (array.pop() === undefined) return 0;
	else return 1 + getLength(array)
>>>>>>> 7878dc859bb27817ab2428eda0ad2afc777e4419
}

console.log(getLength([1,2,3,4,5,6,7,8,9,10]));
