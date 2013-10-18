jquery.checkView
================

This jQuery plugin enables custom css styling on checkboxes. 

Features
--------
* Custom css styling
* Keyboard and Tab control

Example
-------

$("input[type='checkbox']").checkView();

Options
-------
<table>
  <tr>
    <th>Option</th><th>Description</th><th>Default</th>
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
    <th>Method</th><th>Description</th><th>Default</th>
  </tr>
  <tr>
    <td>invalidate</td><td>Refreshes the component</td>
  </tr>
  <tr>
    <td>setChecked(bool)</td><td>Set the checked state of the component</td>
  </tr>
  <tr>
    <td>getChecked</td><td>Returns the checked state of the component</td>
  </tr>
</table>
