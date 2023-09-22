# Cat photo gallery

Let's make a randomized Cat photo gallery!

- Go and explore this website: https://cataas.com/
- Check how do the below APIs work:
    - `/cat`
    - `/cat/:tag`
    
    Experiment with them

    __Put a huge attantion to the `Advanced` section, you gonna need that!__

- Create an `index.html` file that will display your random Cat image. 
To make it simple (just for now) you can make whole content static: 
    - place a `<div id="root">` in the body and put inside:
        - "image-container"
        - "button"
        - "text field" with label: "Image Tag" and a check-box next to the input field. No label for the check-box needed.
- Create a `script.js` file and function(s) in it that would do the following:
    - when page is loaded make an API call to get the data for a random cat (what is the api link?). From the response you can take the direct link to the Cat's image. Create `<img>` element for that image and put it into image-container.
    Google, how to check with JS that page has been completely loaded, and only then do the rest of the logic.
- Assign click event listener to the button, and every time button is clicked, reload the image.
- By default input text field is inactive, but if the check-box is checked, then it should become active.
- If input field has some text in it, use API call with tag.

__Note__: there are no exact API links given to you in the task description.
This is done on purpose. But, if you struggle to find what is the api link for your fetch function - ask you mentor for help!


