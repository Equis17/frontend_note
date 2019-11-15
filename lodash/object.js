import _ from './lodash.js'

//对象覆盖
function Foo() {this.a = 1;}
function Bar() {this.c = 3;}
Foo.prototype.b = 2;
Bar.prototype.d = 4;

_.assign({ 'a': 0 }, new Foo, new Bar);/*?*/
_.assignIn({ 'a': 0 }, new Foo, new Bar);/*?*/
_.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });/*?*/
_.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });/*?*/

//获取对象属性值
const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
_.at(object, ['a[0].b.c', 'a[1]']);/*?*/
_.get(object, 'a[0].b.c');/*?*/
_.get(object, ['a', '0', 'b', 'c']);/*?*/
_.get(object, 'a.b.c', 'default');/*?*/

//获取对象的key
_.findKey({'barney':  { 'age': 36, 'active': true }, 'fred':    { 'age': 40, 'active': false }, 'pebbles': { 'age': 1,  'active': true }}, 'active');
_.findLastKey({'barney':  { 'age': 36, 'active': true }, 'fred':    { 'age': 40, 'active': false }, 'pebbles': { 'age': 1,  'active': true }}, ['active', false]);

//获取key
_.keys({a:1,b:2,c:3});


