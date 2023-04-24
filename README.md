# How to create a box shadow generator

Source> https://www.freecodecamp.org/news/how-to-create-a-box-shadow-generator-in-react/

Used `npx create-react-app` instead `npm create vite@lates`

![Box Shadow Generator screen](public/images/box-shadow-generator-full.png?raw=true "Box Shadow Generator")

After your dependencies have been installed, run `npm i react-colorful`. react-colorful is the NPM package that we will use in this project to render a color picker.

## Project Structure

This project will be structured: one CSS file is used to style the entire app, and the app layout will consist of a grid with three columns.

The first column will house, our 'controls'. This is where all the components required to generate the box shadow will live. The next column will be used to preview the box shadow currently being generated. The last column will contain our output.

## How to Create the Controls
Controls are components that we use to tweak the parameters of the box shadow. We will have six controls:

one control to control the color
four controls that control the offsetX, offsetY, spread and blur values in px
and the last control will be a checkbox that allows you to change the box-shadow style to inset if checked.

In CSS, the common syntax for the box-shadow property is:

---
box-shadow: offsetXpx offsetYpx blur* spread* inset* #330303f5*;
---

## Creating the Output Component
The CodeOutput component takes a single prop called shadow, which is an array that represents the values for the CSS box-shadow property. The component returns JSX that displays the CSS output based on the shadow prop passed in.

The JSX contains two divs: one with the class name `paneChild`, and the other with the class name codeOutput. Inside the `codeOutput` div, the component maps over each element in the `shadow` prop and generates the corresponding CSS code.

If the element is a number, it adds "px" to the value, otherwise it adds the element as a string. The resulting array of CSS values is joined together into a single string with a space between each value.

## Tying everything together in the Container.js file

The first four elements of the array ([23, 23, 0, 10]) represent the horizontal offset, vertical offset, blur radius, and spread radius of the shadow, respectively. The fifth element (" ") is a placeholder for the shadow's inset property, which is not being used in this case. Finally, the sixth element ("#00000045") represents the color of the shadow in HEX format.

The component should return three divs wrapped in a React fragment. The first div should have a class names "controlPane" and "controls". The last div should have the class name, "controlPane".

## How to declare the `onChangeHandler` Function

A function takes in two parameters, `e` (an event object) and `index` (a numeric index value).

The function uses a switch statement to determine which logic to execute based on the value of index. If index is 5, the function updates the boxShadow state by mapping over the existing array and replacing the value at index 5 with e.

If index is 4, the function updates the boxShadow state by mapping over the existing array and replacing the value at index 4 with either the string 'inset' or an empty string ('') depending on whether e.target.checked is truthy or falsy, respectively.

Otherwise, if index is any other value, the function updates the boxShadow state by mapping over the existing array and replacing the value at the specified index with the numeric value of e.target.value.

## The function `shadowArrayToString`
The function shadowArrayToString takes one argument called element. The purpose of this function is to convert elements of the boxShadow array (which can contain numerical values representing pixel sizes) into a string format with a "px" suffix. If the element argument is not a number, the function returns the element value unchanged.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!