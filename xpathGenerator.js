
/**
 * 
 * @param { HTMLElement } domElement - DOM element for xpath generation
 * @returns { string } - xpath value
 */
const generateXPath = (domElement) => {
    if(domElement.id.length) {
        return `//*[@id='${domElement.id}']`;
    }
    if (document.getElementsByTagName(domElement.tagName).length === 1) {
        return `//${domElement.tagName.toLowerCase()}`;
    }
    const nodesInSameLevel = Array.from(domElement.parentNode.childNodes);
    const nodesInSameLevelWithSameTagName = nodesInSameLevel.filter(element => element.tagName === domElement.tagName);
    const domElementLevelPosition = nodesInSameLevelWithSameTagName.indexOf(domElement);
    return `${generateXPath(domElement.parentNode)}/${domElement.tagName.toLowerCase()}${`[${domElementLevelPosition + 1}]`}`;
}
