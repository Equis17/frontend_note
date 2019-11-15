import _ from './lodash'

const users=[{ 'user': 'barney', 'age': 36, 'active': false }, { 'user': 'fred',   'age': 40, 'active': false }];

//返回key的迭代次数
//长度为3的字符串出现2次,长度为5的字符串出现一次
_.countBy(['one', 'two', 'three'], 'length');/*?*/
_.keyBy([{ 'dir': 'left', 'code': 97 }, { 'dir': 'right', 'code': 100 }], 'dir');/*?*/

//断言返回真值,中断返回假值
_.every([]);/*?*/
_.every(users, { 'user': 'barney', 'active': false });/*?*/
_.every(users, ['active', false]);/*?*/
//断言返回假值,中断返回真值
_.some(users, { 'user': 'barney', 'active': false });/*?*/
_.some(users, ['active', false]);/*?*/

//返回为假的值
_.reject(users, 'active');


//返回为真的值
_.filter(users, function(o) { return !o.active; });/*?*/
_.find(users, function(o) { return o.age < 40; });/*?*/
_.findLast([1, 2, 3, 4], function(n) {return n % 2 == 1;});/*?*/

//数组扁平化
_.flatMap([1, 2], function duplicate(n) {return [n, n];});/*?*/
_.flatMapDeep([1, 2], function duplicate(n) {return [[[n, n]]];});/*?*/
_.flatMapDepth([1, 2], function duplicate(n) {return [[[n, n]]];}, 2);/*?*/

//数组|对象遍历
_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {console.log(key);});/*?*/
_.forEachRight([1, 2], function(value) {console.log(value);});/*?*/

//对象,数组分配
_.groupBy(['one', 'two', 'three'], 'length');/*?*/

//是否含有特定值
_.includes({ 'user': 'fred', 'age': 40 }, 'fred');/*?*/

//数组操作
_.invokeMap([123, 456], String.prototype.split, '');/*?*/
_.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');/*?*/
_.map(users, 'user');/*?*/

//数组排序
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
_.sortBy(users, function(o) { return o.user; });

//数组归类 分块
_.partition(users, function(o) { return o.active; });
_.partition(users, { 'age': 1, 'active': false });
//获取随机的值
_.sample([1, 2, 3, 4]);
_.sampleSize([1, 2, 3], 2);

//打乱数组
_.shuffle([1, 2, 3, 4]);

//返回数组长度
_.size('pebbles');

