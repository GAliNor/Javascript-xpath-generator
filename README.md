# XPATH function generator

xpath generator is a simple function that helps you generate the xpath of a given html element.


# XPATH function generator

xpath generator is a simple function that helps you generate the xpath of a given html element.

  

# Table of contents

- [How it works](#how-it-works)

- [How to use it](#how-to-use-it)

- [Usage example](#usage-example)

- [Acknowledgments](#acknowledgments)

# How it works

  

The function takes as an argument a DOM element and returns a string representing an xpath value.

  

It will process the given element and its parents ascendingly.

  

For each element it will:

  

* Lookup it's id

* If it doesn't possess an id, it will check if there is no similar tag in the DOM

* Else, it will determine its position inside its wrapper and then recursively process its parent node.

  
  

# Usage example

Using the generateXPath function add an click event to the document and display the data :

    const  displayXPathValue = (e) => {
	    console.log(generateXPath(e.target));
    };
   
    document.addEventListener('click', displayXPathValue);

Use the browser console in the page from where you retrieved the xPath and  then execute this command to verify that the xPath is leading to the right element. (Please note that the string paramater need to be replaced with the generated xpath) .

    $x('Generated xpath here');

  Then after testing the function, remove the click event listener created before :
  

    document.removeEventListener('click', displayXPathValue);

  

# Use cases

  Use cases example :
  

 - Flag an element to be evaluate every time a page will be load
 - Prepare a data extraction
 - Generate quickly  xPath expression for a UI testing automation

  

# Acknowledgments

Many thanks to :

 - @abiari
 - @hmellahi
 - @karimerrahli

for the reviews and advices
