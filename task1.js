const obj = {
    'id' : 1,
    'string' : '123',
    'prop' : 'property',
    obj1: { obj2: 'obj2' },
}

const getObjVals = (someObj) => {
    for (let key in someObj){
        if(someObj.hasOwnProperty(key)){
            console.log(key, someObj[key])
        }
    }
}

getObjVals(obj)