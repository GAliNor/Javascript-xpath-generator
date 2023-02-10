
/**
 * 
 * @param { HTMLElement } domElement - DOM element for xpath generation
 * @returns { string } - xpath value
 */
const generateXPath = (domElement, full=false) => {
    if(!full && domElement.id.length) {
        return `//*[@id='${domElement.id}']`;
    }
    if (!full && document.getElementsByTagName(domElement.tagName).length === 1) {
        return `//${domElement.tagName.toLowerCase()}`;
    }
    if(full && domElement.tagName.toLowerCase() === 'html') {
        return '/html'
    }
    const nodesInSameLevel = Array.from(domElement.parentNode.childNodes);
    const nodesInSameLevelWithSameTagName = nodesInSameLevel.filter(element => element.tagName === domElement.tagName);
    const domElementLevelPosition = nodesInSameLevelWithSameTagName.indexOf(domElement);
    return `${generateXPath(domElement.parentNode, full)}/${domElement.tagName.toLowerCase()}${`[${domElementLevelPosition + 1}]`}`;
}
