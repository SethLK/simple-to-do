const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const innerList = document.createElement('li')
    const span = document.createElement('span')
    const button = document.createElement('button')
    button.innerHTML = 'delete'

    span.textContent = input.value
    innerList.appendChild(span)
    innerList.appendChild(button)
    ul.appendChild(innerList)
    input.value = ''

    button.addEventListener('click', () =>{
        innerList.remove()
    })

    span.addEventListener('click', () => {
        span.style.textDecoration = span.style.textDecoration === "line-through" ? "none" : "line-through";
    });
    
})