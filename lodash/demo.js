import _ from 'lodash'
/*对象*/

//如何深度比较两个对象|深比较
{
  let object1 = {};
  let object2 = {};
  object1.prop1 = 2;
  object2.prop1 = 2;
  object1.prop2 = {prop3: 2};
  object2.prop2 = {prop3: 2};

  _.isEqual(object1, object2);/*?*/
}

//提取两个对象不同属性|差集
{
  let object1 = {};
  let object2 = {};
  object1.prop1 = 2;
  object2.prop1 = 2;
  object1.prop2 = {prop3: 2};
  object2.prop2 = {prop3: 1};

  _.reduce(object1, (result, value, key) => _.isEqual(value, object2[key]) ? result : result.concat(key), [])/*?*/
}

//过滤对象的键|过滤
{
  const data = {
    'aaa': 111,
    'abb': 222,
    'bbb': 333
  };

  _.pickBy(data, (value, key) => _.startsWith(key, 'a'));/*?*/
}

//从对象中移除某个属性|过滤|去值
{
  const object = {
    'objectiveDetailId': 285,
    'objectiveId': 29,
    'number': 1,
    'text': 'x',
    'subTopics': [{
      'subTopicId': 1,
      'number': 1
    }, {
      'subTopicId': 2,
      'number': 32
    }, {
      'subTopicId': 3,
      'number': 22
    }]
  };
  const stToDelete = 2;
  _.remove(object.subTopics, {subTopicId: stToDelete});/*?*/
  _.remove(object.subTopics, obj => obj.subTopicId === stToDelete);/*?*/
  object.subTopics = _.filter(object.subTopics, (obj) => obj.subTopicId === stToDelete);/*?*/
  object.subTopics = _.filter(object.subTopics, {subTopicId: stToDelete});/*?*/
  //数组对象方法
  _.pull(object['subTopics'], {'subTopicId': 2, 'number': 32});
}

//将对象转换为数组|转换
{
  const obj = {
    22: {name: 'John', id: 22, friends: [5, 31, 55], works: {books: [], films: [],}},
    12: {name: 'Ivan', id: 12, friends: [2, 44, 12], works: {books: [], films: [],}}
  };
  _.toArray(obj);/*?*/
  _.values(obj);/*?*/
}

//删除对象中未定义或空值|去值
{
  const object = {a: undefined, b: 2, c: 4, d: undefined, f: false};
  _.pickBy(object, _.identity);/*?*/
  _.omitBy(object, _.isNil)/*?*/
}

/*数组*/

//从数组中删除重复项|去重
{
  let data = [
    {url: 'www.example.com/hello', id: '22'},
    {url: 'www.example.com/hello', id: '22'},
    {url: 'www.example.com/hello-how-are-you', id: '23'},
    {url: 'www.example.com/i-like-cats', id: '24'},
    {url: 'www.example.com/i-like-pie', id: '25'}
  ];

  _.uniqBy(data, 'id');/*?*/
  _.uniqWith(data, _.isEqual);/*?*/
}

//从数组对象中通过key获取value的数组|获取值|数组对象
{
  const users = [{id: 12, name: 'Adam'}, {id: 14, name: 'Bob'}, {id: 16, name: 'Charlie'}, {id: 18, name: 'David'}];
  _.map(users, (item) => _.get(item, 'id'));/*?*/
  _.map(users, 'id');/*?*/
}
