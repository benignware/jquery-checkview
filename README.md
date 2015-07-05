jquery-checkview
================

> This jQuery plugin enables custom css styling of checkboxes and radiobuttons.

Features
--------
* Custom css styling
* Keyboard and Tab control


[Demo](http://benignware.github.io/jquery-checkview)

Usage
-----

Include dependencies

```html
<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="jquery.checkview.min.js"></script>
```

Provide markup

```html
<label><input type="checkbox"/> Check me!</label>
```

Init checkview as follows:

```js
$("input[type='checkbox'], input[type='radio']").checkview();
```

Set up your css. Take a look at the example styles:

```css
.checkview {
  background-color: #FFFFFF;
  border: 1px solid #ACACAC;
  line-height: 1em;
}

.checkview .icon-ok {
  display: inline-block;
  background: url('http://cdn.dustball.com/tick.png') no-repeat center;
  background-size: contain;
  width: 1em;
  height: 1em;
}
```


Bootstrap Example
-----------------

Include Bootstrap CSS:
```html
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
```

Provide Bootstrap Checkbox Markup:

```html
<div class="checkbox">
  <label>
    <input type="checkbox"> Check me!
  </label>
</div>
```

Configure checkview with Bootstrap's button and icon components:

```js
$(".checkbox input[type='checkbox']").checkview({
  wrapperClass: 'btn btn-default btn-xs',
  iconClass: 'glyphicon glyphicon-ok'
});
```



Options
-------
<table>
  <tr>
    <th>Name</th><th>Description</th><th>Default</th>
  </tr>
  <tr>
    <td>checkedClass</td><td>CSS Class to indicate the checkview's state</td><td>checkview</td>
  </tr>
  <tr>
    <td>iconClass</td><td>Icon css class</td><td>icon-ok</td>
  </tr>
  <tr>
    <td>preventSubmit</td><td>Specifies whether to propagate pressing of enter key</td><td>false</td>
  </tr>
  <tr>
    <td>wrapperClass</td><td>Container css class</td><td>checkview</td>
  </tr>
  <tr>
    <td>wrapperTag</td><td>Container tag name</td><td>span</td>
  </tr>
</table>

Methods
-------

<table>
  <tr>
    <th>Name</th><th>Description</th><th>Return</th>
  </tr>
  <tr>
    <td>getChecked</td><td>Returns the checkview's state</td><td>boolean</td>
  </tr>
  <tr>
    <td>invalidate</td><td>Refreshes the component</td><td>void</td>
  </tr>
  <tr>
    <td>setChecked(bool)</td><td>Sets the checkview's state</td><td>void</td>
  </tr>
</table>

## Method example
Access plugin-instance and refresh

```
$("#checkview").data('checkview').refresh();
```
