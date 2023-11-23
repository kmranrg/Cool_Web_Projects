const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        removeButtons()
        panel.classList.add('active')
        addButton(panel)
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

function removeButtons() {
    panels.forEach((panel) => {
        const buttonToRemove = panel.querySelector('.panel-button')
        if (buttonToRemove) {
            buttonToRemove.parentNode.removeChild(buttonToRemove);
        }
    })
}

function addButton(panel) {
    var newButton = document.createElement('button')
    newButton.className = 'panel-button'
    newButton.innerHTML = 'Download'

    // applying CSS to the newButton
    newButton.style.opacity = '1';
    newButton.style.fontSize = '18px';
    newButton.style.borderRadius = '10px';
    newButton.style.position = 'absolute';
    newButton.style.bottom = '20px';
    newButton.style.right = '20px';
    newButton.style.margin = '0';
    newButton.style.transition = 'opacity 0.3s ease-in 0.4s';

    panel.appendChild(newButton)
}

