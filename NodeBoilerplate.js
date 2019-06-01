/* 
	Boilerplate to read input and output data
*/


let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let lineNum = 0;

rl.on('line', function(line) {
    if(lineNum === 0) {
        lineNum = 1;
    } else {
        let digits = line.split("");
        let arr1 = [];
        let arr2 = [];
        let str1 = "";
        let str2 = "";
        
        digits.forEach(n => {
        	if(n === "4") {
        		arr1.push("2");
        		arr2.push("2");
        	} else {
        		arr1.push(n);
        		arr2.push("0");
        	}
        });
        
        arr1.forEach(n => {
        	str1 += n;
        });
        
        arr2.forEach(n => {
        	if(n === "0") {
        		if(str2 !== "") {
        			str2 += n;
        		}
        	} else {
        		str2 += n;
        	}
        });
        
        let output = "Case #" + lineNum + ": " + parseInt(str1) + " " + parseInt(str2);
        console.log(output);
        lineNum++;
    }
}).on('close',function(){
    process.exit(0);
});