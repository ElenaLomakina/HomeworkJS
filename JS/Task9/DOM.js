function create(parent, tag, classNames) {
    if (!parent) parent = document;
    var block = document.createElement(tag);
    if (classNames) {
        classNames.forEach(function (className) {
            block.classList.add(className);
        });
    }
    parent.appendChild(block);
    return block;
}

function blockContent(block, content, bgColor) {
    if (bgColor) block.style.backgroundColor = bgColor;
    block.innerHTML = content;
}


