import _ from './lodash'

//取整
_.ceil(6.004, 2);/*?*/
_.ceil(6040, -2);/*?*/
_.floor(0.046, 2);/*?*/
_.floor(4060, -2);/*?*/

//获取数组最值
_.max([4, 2, 8, 6]);/*?*/
_.max([]);/*?*/
_.maxBy([{ 'n': 1 }, { 'n': 2 }], function(o) { return o.n; });/*?*/
_.min([4, 2, 8, 6]);/*?*/
_.minBy([{ 'n': 1 }, { 'n': 2 }], function(o) { return o.n; });/*?*/

//获取数组平均值
_.mean([4, 2, 8, 6]);/*?*/
_.meanBy( [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], function(o) { return o.n; });/*?*/

//四舍五入
_.round(1.33, 2);/*?*/
_.round(1.53, 2);/*?*/

//数组总值
_.sum([4, 2, 8, 6]);
_.sumBy([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], function(o) { return o.n; });
