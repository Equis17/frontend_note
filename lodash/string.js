import _ from './lodash'

//转换驼峰
_.camelCase('Foo Bar');/*?*/

//首字母大写
_.capitalize('FRED');/*?*/

//首字母小写
_.lowerFirst('FRED');/*?*/

//判断末尾
_.endsWith('abc', 'c');/*?*/
_.endsWith('abc', 'b');/*?*/

//转换html
_.escape('fred, barney, & pebbles');/*?*/

//转义reg特殊字符
_.escapeRegExp('[lodash](https://lodash.com/)');/*?*/

//转换连接词
_.kebabCase('Foo Bar');/*?*/
_.snakeCase('Foo Bar');/*?*/

//转换小写
_.lowerCase('--Foo-Bar--');/*?*/

//字符填充
_.pad('abc', 8);/*?*/
_.pad('abc', 7);/*?*/
_.padEnd('abc', 6);/*?*/
_.padStart('abc', 6);/*?*/
_.padStart('abc', 6, '_-');/*?*/

//字符串重复
_.repeat('abc', 2);/*?*/

//字符串替换
_.replace('Hi Fred', 'Fred', 'Barney');/*?*/

//字符串拆分
_.split('a-b-c', '-', 2);/*?*/

//除去空格
_.trim('  abc  ');
_.trimEnd('  abc  ');
_.trimStart('  abc  ');
