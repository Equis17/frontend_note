import _ from './lodash'

//n次后执行函数
_.after(2, () => console.log(1));

//只能调用n次
_.before(2, () => console.log(1));

//创建一个函数,最多只能传n个值
_.map(['6', '8', '10'], _.ary(parseInt, 1));

//bind
const object = { 'user': 'fred' };
const bound = _.bind(function(greeting, punctuation) {return greeting + ' ' + this.user + punctuation}, object, 'hi');
bound('!');/*?*/
//bind对象的key
const boundKey = _.bindKey(object, 'greet', 'hi');
boundKey('!');/*?*/

//curry 库里化
const curried = _.curry(function(a, b, c) {return [a, b, c];});/*?*/
curried(1)(2)(3);/*?*/
curried(1, 2)(3);/*?*/
curried(1, 2, 3);/*?*/
curried(1)(_, 3)(2);/*?*/
_.curryRight(function(a, b, c) {return [a, b, c];});/*?*/

//debounce 防抖动 多次调用事件 比如滚动事件
//创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。
_.debounce(sendMail, 300, {
  'leading': true,//指定在延迟开始前调用
  'trailing': false,// 指定在延迟结束后调用。
  'maxWait':1000
});

//throttle
//创建一个节流函数，在 wait 秒内最多执行 func 一次的函数
_.throttle(renewToken, 300000, { 'trailing': false });

//defer 推迟调用 返回计时器id 一毫秒或者更久
_.defer(function(text) {console.log(text);}, 'deferred');

//delay 延迟调用 返回计时器id
_.delay(function(text) {console.log(text);}, 1000, 'later');

//flip 翻转接受参数
const flipped = _.flip(function() {return _.toArray(arguments);});
flipped('a', 'b', 'c', 'd');

//创建一个缓存函数返回值
const values = _.memoize(_.values);
values({a:1,b:2});/*?*/

//断言结果取反
_.filter([1, 2, 3, 4, 5, 6], _.negate(function isEven(n) {return n % 2 == 0;}));/*?*/

//创建一个只能调用一次的函数
const once=_.once(function () {console.log(1)});

//创建一个范围指定形式的函数
function doubled(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

const func = _.overArgs(function(x, y) {return [x, y];}, [square, doubled]);
func(1,2);

