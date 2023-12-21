A simple star rating component. This is a popular machine coding question for frontend.
[Question Link](https://workat.tech/frontend-development/practice/star-rating-component-gd6mkdaf2qun)


# Assumptions
- single SVG image for stars
- blank stars or non-selected stars are just grayed out
- hovered stars have the same SVG image, but only the sepia property is used.

# Requirements
- Use only CSS to manipulate the star's state.
- Build only using vanilla JS
- make code modular

# Implementation 1
- Created a StarComponent.js that has the function definition of initializing the Star Rating component.
- Have even listeners attached to stars. When they are hovered or selected, their respective position is considered to make the previous stars 'hovered' or 'selected'. The rest of the stars are kept in 'faded' states
- Container of the Stars also has an event listener to remove the stars from the 'faded' state.

## Problems with this implementation
- Too many even listeners attached. Suppose that there are 100 such star components. Each has 5 stars. That is a total of 500 event listeners. Since there are 'mouseover' and 'mouseleave' events, the total number is actually 2x the stars.
- These event listeners stay attached. Suppose that the user clicks on something and that page does not load, something similar to dynamic page rendering. Then these events stay attached.

# Improvements
- One way to improve will be to attach event listeners to stars only when their container element receives or emits the 'mouseover' event.
- Then we can remove the attached event listeners to the stars when the container emits 'mouseleave' event'
- This way we will have only events limited to the number of rating components, rather than the number of stars.


