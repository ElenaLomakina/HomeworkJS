function create(parent, tag, className, className1) {
    if (!className) className = "";
    if (!parent) parent = document;
    var block = document.createElement(tag);

    block.classList.add(className);
    if (className1) block.classList.add(className1);

    parent.appendChild(block);
    return block;
}

function blockContent(block, content, bgColor) {
    if (bgColor) block.style.backgroundColor = bgColor;
    block.innerHTML = content;
}


