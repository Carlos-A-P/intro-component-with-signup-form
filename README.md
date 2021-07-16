# intro-component-with-signup-form

- Live website -(https://carlospwd-intro-component-with-signup.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## My process

### Screenshot

### End Result

![result](https://user-images.githubusercontent.com/85038929/126002233-1ca03e52-19a3-4ae2-a50a-4f2081fb736e.JPG)

### Active image

![active](https://user-images.githubusercontent.com/85038929/126002262-2736b782-427b-41f2-badd-d582eaa1fb35.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript

### What I learned

I learned how to setup my forms in this project. I set up all of my styles in my parent element which was the form tag. This allowed me to easily change the class and add styles to my project. These are a few examples taken from my code to show how I managed to display styles after hitting the submit button.

```HTML
<form class="form" id="form">

        <div class="form-control">
          <input type="text" placeholder="First Name" id="firstname">
          <i class="fas fa-check-circle fa-lg"></i>
          <i class="fas fa-exclamation-circle fa-lg"></i>
          <small>Error message</small>
        </div>
        <!-- .... -->
</form>

```

```Javascript
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}
```

```CSS
.form-control.success i.fa-check-circle {
	color: var(--green);
	visibility: visible;
}
```

### Questions

- What are some ways that I can make my code look cleaner?
- How can I improve my layout?

### Useful resources

- [Build a Responsive Grid CSS Website Layout From Scratch](https://www.youtube.com/watch?v=moBhzSC455o&ab_channel=TraversyMedia) - This helped me understand how to use grids and flexbox to organize my website. I also learned about some new vs code extentions such as prettier which helped make my code look neat and organised.

- [JavaScript Client-slide Form Validation](https://www.youtube.com/watch?v=rsd4FNGTRBw&ab_channel=FlorinPop) - this tutorial helped my understand how to format forms in my project and how to implement javascript so that the users can receive a message back

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://www.site.com)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
