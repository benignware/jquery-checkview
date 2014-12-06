jquery-checkview
================

> This jQuery plugin enables custom css styling of checkboxes and radiobuttons.

Features
--------
* Custom css styling
* Keyboard and Tab control

Basic Usage
-----------

Init checkview as follows:

```js
$(function() {
  $("input[type='checkbox'], input[type='radio']").checkview();
});
```

Set up your css. Take a look at the example styles:

```css
.checkview {
  background-color: #FFFFFF;
  border: 1px solid #ACACAC;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  width: 1.4em;
  height: 1.4em;
}

.checkview:focus {
  /* Add custom focus styles here */
}

.checkview .icon-ok {
  display: inline-block;
  background: url('http://cdn.dustball.com/tick.png') no-repeat center;
  width: 100%;
  height: 100%;
}
```


Example using bootstrap
-----------------------

Init checkview to work with bootstrap's button and icon components:

```js
$(function() {
  $("input[type='checkbox'], input[type='radio']").checkview({
    wrapperClass: 'btn btn-default btn-xs',
    iconClass: 'glyphicon glyphicon-ok'
  });
});
```



Options
-------
<table>
  <tr>
    <th>Name</th><th>Description</th><th>Default</th>
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
