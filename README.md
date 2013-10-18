jquery-checkview
================

This jQuery plugin enables custom css styling on checkboxes. 

Features
--------
* Custom css styling
* Keyboard and Tab control

Example
-------

```
$(document).ready(function() {
	$("input[type='checkbox']").checkView();
});
```

Get access to the plugin-instance:
```
var checkView = $("input[type='checkbox']").data('checkView');
```


Options
-------
<table>
  <tr>
    <th>Name</th><th>Description</th><th>Default</th>
  </tr>
  <tr>
    <td>containerClass</td><td>Container css class</td><td>checkview</td>
  </tr>
  <tr>
    <td>iconClass</td><td>Icon css class</td><td>icon-ok</td>
  </tr>
  <tr>
    <td>autoSubmit</td><td>Specifies whether to submit form on element change</td><td>false</td>
  </tr>
</table>

Methods
-------
<table>
  <tr>
    <th>Name</th><th>Description</th><th>Return</th>
  </tr>
  <tr>
    <td>invalidate</td><td>Refreshes the component</td><td>void</td>
  </tr>
  <tr>
    <td>setChecked(bool)</td><td>Set the checked state of the component</td><td>void</td>
  </tr>
  <tr>
    <td>getChecked</td><td>Returns the checked state of the component</td><td>boolean</td>
  </tr>
</table>
