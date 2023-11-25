var target1 = document.getElementById("test1").children[1];

var target2 = document.getElementById("test2").firstElementChild;

var find = target1.isEqualNode(target2);

console.log(find);