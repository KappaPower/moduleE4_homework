'Написать функцию, которая принимает в качестве аргументов строку' +
' и объект, а затем проверяет есть ли у переданного объекта' +
' свойство с данным именем. Функция должна возвращать true или false.'

const obj = {
    'id' : 1,
    'string' : '123',
    'prop' : 'property',
    obj1: { obj2: 'obj2' },
}

const checkProperty = (property, someObj) => {
        if(property in someObj){
            return true
        }
        else return false
}

console.log(checkProperty('string', obj))
console.log(checkProperty('str', obj))