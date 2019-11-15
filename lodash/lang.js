import _ from './lodash'

//将vlaue转换成数组
_.castArray({a:1,b:2});/*?*/
_.toArray({ 'a': 1, 'b': 2 });/*?*/

_.castArray('abc');/*?*/
_.toArray('abc');/*?*/
//浅拷贝
const objects = [{'a': 1}, {'b': 2}];

const shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);/*?*/
_.cloneWith(document.body, function (value) {
  if (_.isElement(value)) {
    return value.cloneNode(true);
  }
});

//深拷贝
const deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);/*?*/
_.cloneDeepWith(document.body, function (value) {
  if (_.isElement(value)) {
    return value.cloneNode(true);
  }
});

//对象判断
_.conformsTo(objects, {'b': function (n) {return n > 1;}});/*?*/

//判断两者是否相等
const object = {'a': 1};
const other = {'a': 1};
_.eq(object, object);/*?*/
_.eq(object, other);/*?*/
_.isEqual(object, other);
//isEqualWith

//判断两者大小
_.gt(3, 1);/*?*/

//判断大于等于
_.gte(3, 3);/*?*/

//小于等于
_.lt(3,1);/*?*/
_.lte(3,1);/*?*/

//判断是否为数组
_.isArray([1, 2, 3]);/*?*/
_.isArrayLike(document.body.children);/*?*/
_.isArrayLikeObject(document.body.children);/*?*/

//判断是否为Boolean
_.isBoolean(false);/*?*/
_.isBoolean(null);/*?*/

//判断是否为Date
_.isDate(new Date);/*?*/

//判断是否为元素
_.isElement(document.body);

//是否为function
_.isFunction(_);

//是否为整数
_.isInteger(1);/*?*/
_.isInteger('1');/*?*/

//检查 value 是否为一个空对象，集合，映射或者set
_.isEmpty(1);/*?*/
_.isEmpty({a: 1});/*?*/
_.isEmpty([]);/*?*/
_.isEmpty([1, 2, 3]);/*?*/
_.isEmpty('');/*?*/
_.isEmpty('21');/*?*/

//深度比较属性
_.isMatch(object, { 'b': 2 });/*?*/
_.isMatch(object, { 'b': 1 });/*?*/
//isMatchWith

//是否为NaN
_.isNaN(undefined);/*?*/

//是否为null或undefined
_.isNil(undefined);/*?*/
_.isNil(null);/*?*/
_.isNil(1);/*?*/

//是否为Object arrays, functions, objects, regexes,new Number(0), 以及 new String('')
_.isObject({});/*?*/
_.isObject([1, 2, 3]);/*?*/
_.isObject(null);/*?*/
_.isObject('去2');/*?*/
_.isObject('');/*?*/

_.isObjectLike({});/*?*/
_.isObjectLike([1, 2, 3]);/*?*/
_.isObjectLike(null);/*?*/
_.isObjectLike('去2');/*?*/
_.isObjectLike('');/*?*/

//是否为普通object
_.isPlainObject({a:1});/*?*/
_.isPlainObject([1, 2, 3]);/*?*/

//是否为字符串
_.isString('')/*?*/
_.isString('123')/*?*/
