import _ from './lodash'

const arr1 = [1, 2, 3, 4,5];
const arr2 = [undefined, 1, false, '', 2, '2', ' '];
/*
* By:返回第一个数组的值,使用值查询
* With:返回第一个数组的值,使用function
* */
//数组分块
_.chunk(arr1, 2);/*?*/
_.chunk(arr1, 3);/*?*/

//数组去假值
_.compact(arr2);/*?*/

//数组拼接
_.concat(arr1, arr2);/*?*/
_.compact(_.concat(arr1, arr2));/*?*/

//数组转字符串
_.join(['a', 'b', 'c'], '~');/*?*/

//数组排除
_.difference(arr1, arr2);/*?*/

_.difference([{a: 1}], [{a: 1}]);/*?*/
_.differenceBy([{a: 1}], [{a: 1}], 'a');/*?*/
_.differenceWith([{'x': 1, 'y': 2}, {'x': 2, 'y': 1}], [{'x': 1, 'y': 2}], _.isEqual);/*?*/

//数组去除n个元素
_.drop([1, 2, 3], 2);/*?*/
_.dropRight([1, 2, 3], 2);/*?*/
const users = [{'user': 'barney', 'active': true}, {'user': 'fred', 'active': false}, {
  'user': 'pebbles',
  'active': false
}];
_.dropWhile(users, function (item) {return !item.active;});/*?*/
_.dropRightWhile(users, function (item) {return !item.active;});/*?*/

//数组填充
_.fill([4, 6, 8, 10], '*', 1, 3);/*?*/

//寻找索引
_.findIndex(users, function (item) {return item.user === 'barney';});/*?*/
_.findIndex(users, {'user': 'fred', 'active': false});/*?*/
_.findIndex(users, ['active', false]);/*?*/
_.findIndex(users, 'active');/*?*/
_.findLastIndex(users, function (item) {return item.user === 'barney';});/*?*/
_.findLastIndex(users, {'user': 'fred', 'active': false});/*?*/
_.findLastIndex(users, ['active', false]);/*?*/
_.findLastIndex(users, 'active');/*?*/
_.indexOf([1, 2, 1, 2], 2);/*?*/
_.indexOf([1, 2, 1, 2], 2, 2);/*?*/
_.lastIndexOf([1, 2, 1, 2], 2, 2);/*?*/

//数组扁平化(仅支持数组)
_.flatten([1, [2, [3, [4]], 5]]);/*?*/
_.flattenDeep({name: 1, children: [{name: 2, children: [{name: 3}, {name: 4}]}, {name: 5}]});/*?*/
_.flattenDeep([1, [2, [3, [4]], 5]]);/*?*/
_.flattenDepth([1, [2, [3, [4]], 5]], 2);

//数组转换对象
_.fromPairs([['fred', 30], ['barney', 40]]);/*?*/

//数组获取第一个元素的值
_.head([1, 2, 3]);/*?*/

//数组获取最后一个元素的值
_.last([1, 2, 3]);/*?*/

//数组获取第N个元素的值
_.nth(arr1, 1);/*?*/

//数组获取除了最后一个元素的值
_.initial([1, 2, 3]);/*?*/

//数组获取除了第一个元素的值
_.tail([1, 2, 3]);/*?*/

//数组获取特定值以外的数组
_.without([2, 1, 2, 3], 1, 2);

//数组裁剪
_.slice([1, 2, 3, 4, 5], 2, 4);/*?*/

//数组获取从起始到第n个元素的数组
_.take([1, 2, 3], 2);/*?*/
_.takeRight([1, 2, 3], 2);/*?*/
_.takeWhile(users, function(o) { return !o.active; });/*?*/
_.takeRightWhile(users, function(o) { return !o.active; });/*?*/

//数组删除值
_.pull([1, 2, 3, 1, 2, 3], 2, 3);/*?*/
_.pullAll([1, 2, 3, 1, 2, 3], [2, 3]);/*?*/
_.pullAllBy([{'x': 1}, {'x': 2}, {'x': 3}, {'x': 1}], [{'x': 1}, {'x': 3}], 'x');/*?*/
_.pullAllWith([{'x': 1, 'y': 2}, {'x': 3, 'y': 4}, {'x': 5, 'y': 6}], [{'x': 3, 'y': 4}], _.isEqual);/*?*/
_.pullAt([5, 10, 15, 20], 1, 3);/*?*/
_.remove([1, 2, 3, 4], function (n) {return n % 2 == 0;});/*?*/

//数组交集
_.intersection([2, 1], [4, 2], [1, 2]);/*?*/
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);/*?*/
_.intersectionBy([{'x': 1}], [{'x': 2}, {'x': 1}], 'x');/*?*/
_.intersectionWith([{'x': 1, 'y': 2}, {'x': 2, 'y': 1}], [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}], _.isEqual);/*?*/

//数组并集
_.union([2], [1, 2]);
_.unionBy([2.1], [1.2, 2.3], Math.floor);
_.unionWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual);

//数组翻转
_.reverse([1, 2, 3]);/*?*/
_.map(_.chunk(arr1,2),(i)=>_.reverse(i));/*?*/
//数组二进制检索下标
_.sortedIndex([41, 50], 40);/*?*/
_.sortedIndexBy([{'x': 4}, {'x': 5}], {'x': 4}, function (o) {return o.x;});/*?*/
_.sortedIndexOf([4, 5, 5, 5, 6], 5);/*?*/
_.sortedLastIndex([4, 5, 5, 5, 6], 5);/*?*/
_.sortedLastIndexBy([{'x': 4}, {'x': 5}], {'x': 4}, function (o) {return o.x;});/*?*/
_.sortedLastIndexOf([4, 5, 5, 5, 6], 5);

//数组去重
_.sortedUniq([1, 1, 2, 2, 3, 4, {x: 1}, {x: 1}]);/*?*/
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);/*?*/
_.uniq([4,2, 1, 1,2,3,2]);/*?*/
_.uniqBy([2.1, 1.2, 2.3], Math.floor);/*?*/
_.uniqWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual);/*?*/
_.xor([2, 1], [2, 3]);/*?*/
_.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);/*?*/
_.xorWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual);/*?*/

//数组分配
_.zip(['fred', 'barney'], [30, 40], [true, false]);/*?*/
_.unzip( [['fred', 30, true], ['barney', 40, false]]);/*?*/
_.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {return a + b + c;});/*?*/
_.unzipWith([[1, 10, 100], [2, 20, 200]], _.add);/*?*/

//数组分配成对象
_.zipObject(['a', 'b'], [1, 2]);/*?*/
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);/*?*/
