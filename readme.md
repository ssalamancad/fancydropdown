# Fancy Dropdown

Fancy Dropdown is a jQuery plugin that turns your regular HTML5 select tags into nice looking dropdown menus with fancy effects.

## Installation

Fork or download the plugin from GitHub.

Inside the page's head tag include the slider's CSS file.

```html
<link rel="stylesheet" href="css/fancydropdown.min.css">
```

In the page footer, just before "</body>" tag, include the required JavaScript files.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="js/fancyDropdown.min.js"></script>
```

## Usage

Use the well known html5 select element, make sure to add the "id" and "name" attributes to it.

```html
<select name="regular_select" id="regular_select">
	<option value="custom_value1">Custom value 1</option>
	<option value="custom_value2">Custom value 2</option>
	<option value="custom_value3">Custom value 3</option>
</select>
```

Instantiate the dropdown:

```html
<script type="text/javascript">
    
    $(document).ready(function() {
      $("#regular_select").fancyDropdown();
    });

</script>
```
That's it.

## License
[MIT](https://choosealicense.com/licenses/mit/)
