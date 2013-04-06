boxrespond
==========

Responsive Box Model for CSS using jQuery

BoxRespond adds classes to HTML elements depending on their current width, allowing you to write styles that depend on the width of the box rather than the browser.

How to use
----------

Include the JS file, and fire the boxRespond function.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="js/jquery.boxrespond.min.js"></script>
<script>
  $.boxRespond();
</script>
```

BoxRespond looks for elements with the class ‘r-box’, and uses data from the ‘data-r-sizes’ attribute.

```html
<div class="r-box" data-r-sizes="200, 400, 600">
  <!-- your responsive content goes here -->
</div>
```

When r-box is greater than 200, the class *gt-200* will be added. Similarly , if the box is smaller than or equal to 200, the class *lt-200* is added. Each box can have a different set of breakpoints, and have as many as required.

Elements are free to respond to their own sizes and exist in any environment.

That's it!
----------

Instead of using media queries for individual boxes, respond to changes in the gt-* classes.

```css
div .child
{
	width: 100%;
	float: left;
}

div.gt-200 .child
{
	width: 50%;
}
div.gt-400 .child
{
	width: 33.333%;
}
div.gt-600 .child
{
	width: 16.666%;
}
```

This will show one child per row as default, and increase to 2, 3 and 6 as the parent grows larger than 200, 400 and 600 respectively. All independent of its placement within the main structure.
