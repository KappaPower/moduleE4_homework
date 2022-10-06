const obj = new Object();
obj.a = 100;
obj.b = 'string'
obj.c = undefined
obj.d = NaN
obj['e'] = function() {
    console.log(1);
}

delete obj.e
for(let key in obj) {
    console.log(`${key} = ${obj[key]}`)
}
