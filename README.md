# jsdoc
jsdoc 语法类似javadoc开始于1999 Netscape/Mozilla，基本各大IDE都集成了jsdoc提示与补全，关注度远大于其他同类产品，功能上基本也是只强不弱。
## REF
- [jsdoc](https://en.wikipedia.org/wiki/JSDoc)
- [jsdoc vs xxx](https://nodejs.libhunt.com/categories/488-documentation)
- [why use jsdoc](http://blog.fusioncharts.com/2013/12/jsdoc-vs-yuidoc-vs-doxx-vs-docco-choosing-a-javascript-documentation-generator/)

## jsodc-tip
- eslint 支持检查jsdoc 语法添加rule
```javascript
"valid-jsdoc": [
			2,
			{ "requireReturn": false }
		]
```
```javascript
/** Class representing a point. 
 * @class   这个名字如果不写则设定为后面的class|function|object ,如果指定名字 后面必须显示的 使用memberof 指定从属关系
 * @param {number} x - The x value.
 * @param {number} y - The y value.
 * @memberof  es5
 * 
*/

```

## thinking about jsdoc
- 一个控件一个 namespace ，暴露的接口加上 memberof namespace

