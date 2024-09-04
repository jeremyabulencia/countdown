# Setting Up
## Plugin for a countdown timer
### make sure to import jQuery Library on <head>
#### 1. Create an elemnt for the two elements to merge
#### 2. Import of resources  
###### &nbsp; 2.1 Import `countdown.js` Plugin on <head>
```html
    <script src="countdown.js"></script>
```
###### &nbsp; 2.2 Import `countdown.css` on <head>
```html
    <link rel="stylesheet" href="countdown.css">
```
#### 3. Create an element for the container of the countdown with value of id countdown
```html
<div id="countdown"></div>
```
#### 5. Call the plugin using the element with the id name on #3
```html
    <script>
      $(document).ready(function () {
          $("#countdown").countdownTimer({
              targetDate: new Date("2025-01-04 13:00:00"), // Wedding Day January 04 2025 1 PM
              border: "2px solid orange",
              fontStyle: "Arial",
              fontColor: "green",
              numFontSize: "40px",
              labelFontSize: "10px",
              callback: function () {
                  
              }
          });
      });
    </script>
```
