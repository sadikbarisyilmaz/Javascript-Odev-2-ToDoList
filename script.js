let inputDOM = document.querySelector('#task')
// Getting items from local Storage
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(x => {
    let cancel = document.createElement('embed')
    cancel.setAttribute('src', '/css/assets/cancel.png')
    cancel.setAttribute('style', 'margin-top: 8px; opacity: 0.50;')
    let deleteDOM = document.createElement('button')
    let ulDOM = document.querySelector('#list')
    let liDOM = document.createElement('li')
    let divDOM = document.createElement('div')
    divDOM.classList = 'listitem'
    divDOM.setAttribute('id', 'div')
    liDOM.setAttribute('id', 'li')
    divDOM.innerHTML = `${x}`
    ulDOM.append(liDOM)
    liDOM.append(divDOM)
    liDOM.append(deleteDOM)
    deleteDOM.append(cancel)
    // Removing list items
    deleteDOM.setAttribute('type', 'reset')
    deleteDOM.setAttribute('class', 'button1 ml-auto p-3 border border-0')
    deleteDOM.setAttribute('id', 'delete')
    deleteDOM.addEventListener('click', function handleClick() {
        deleteDOM.parentElement.remove()
    })

    // Implementing list item color change for new list items
    liDOM.classList = 'd-flex'
    liDOM.addEventListener('click', function handleClick() {
        if (liDOM.classList == 'd-flex') {
            liDOM.setAttribute('class', 'd-flex checked');
        } else {
            liDOM.setAttribute('class', 'd-flex');
        }

    })
})

function newElement() {

    if (inputDOM.value.length <= 0 || inputDOM.value[0] === " " || inputDOM.value[inputDOM.value.length - 1] === " ") {
        console.log("Listeye boş ekleme yapamazsınız!")
        // activating toast notifications
        $(document).ready(function () {
            $('.error').toast('show');
        });
    } else if (inputDOM.value.length > 0) {
        $(document).ready(function () {
            $('.success').toast('show');
        });
        // Setting items to local storage
        itemsArray.push(inputDOM.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        // Adding list items
        let cancel = document.createElement('embed')
        cancel.setAttribute('src', '/css/assets/cancel.png')
        cancel.setAttribute('style', 'margin-top: 8px; opacity: 0.50;')
        let deleteDOM = document.createElement('button')
        let ulDOM = document.querySelector('#list')
        let liDOM = document.createElement('li')
        let divDOM = document.createElement('div')
        divDOM.classList = 'listitem'
        divDOM.setAttribute('id', 'div')
        liDOM.setAttribute('id', 'li')
        divDOM.innerHTML = `${inputDOM.value}`
        ulDOM.append(liDOM)
        liDOM.append(divDOM)
        liDOM.append(deleteDOM)
        deleteDOM.append(cancel)
        // Removing list items
        deleteDOM.setAttribute('type', 'reset')
        deleteDOM.setAttribute('class', 'button1 ml-auto p-3 border border-0')
        deleteDOM.setAttribute('id', 'delete')
        deleteDOM.addEventListener('click', function handleClick() {
            deleteDOM.parentElement.remove()
        })

        // Implementing list item color change for new list items
        liDOM.classList = 'd-flex'
        liDOM.addEventListener('click', function handleClick() {
            if (liDOM.classList == 'd-flex') {
                liDOM.setAttribute('class', 'd-flex checked');
            } else {
                liDOM.setAttribute('class', 'd-flex');
            }

        })

        // Form input cleared
        inputDOM.value = ''
    }
} 