
/**
 * 
 * @param { HTMLElement } domElement - DOM element for xpath generation
 * @returns { string } - xpath value
 */
export const generateXPath = (domElement) => {
    try {
        if(domElement.id.length) {
            return `//*[@id='${domElement.id}']`;
        } else if (document.getElementsByTagName(domElement.tagName).length === 1) {
            return `//${domElement.tagName.toLowerCase()}`;
        } else {
            const nodesInSameLevel = Array.from(domElement.parentNode.childNodes);
            const nodesInSameLevelWithSameTagName = nodesInSameLevel.filter(element => element.tagName === domElement.tagName);
            const domElementLevelPosition = nodesInSameLevelWithSameTagName.indexOf(domElement);
            return `${generateXPath(domElement.parentNode)}/${domElement.tagName.toLowerCase()}${domElementLevelPosition ? `[${domElementLevelPosition + 1}]` : ''}`;
        }
    } catch {
        return null;
    }
}
