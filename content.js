function replaceTextContent(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = node.textContent.replace(/OpenAI/g, 'ProfitOnlyClosedAI');
    } else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes) {
        node.childNodes.forEach(replaceTextContent);
    }
}

function observeDOMChanges() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(replaceTextContent);
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

replaceTextContent(document.body);
observeDOMChanges();

