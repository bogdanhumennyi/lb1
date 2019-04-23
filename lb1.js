/*
 1. задано 234245645335 секунд вивести скільки пройшло секунд з останньої повної години
 */
var time = new Date();
time.setSeconds(234245645335);
console.log(+time.toString().substr(22, 2) + time.toString().substr(19, 2) * 60);
/*
 2. задана строка " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at."
 * вивести масив з усіма індексами літери "a" у даній строці
 */
var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";
var index = [];
for(var i = 0; i < text.length; i++) {
	if(text[i] == "a") {
		index.push(i);
	}
}
console.log(index);
