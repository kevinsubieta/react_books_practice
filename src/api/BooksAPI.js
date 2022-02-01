
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


export const getAllBookFromService = () => getAll()
export const searchBooksByQueryFromService = (query) => search(query)
export const updateAnyBookByShelf = (book, shelf) => update(book, shelf)

export  const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

async function getAll() {
   let response = await fetch(`${api}/books`, { headers })
        .then(res => res.json())
        .then(data =>  data.books )
    return await response
}


async function update(book, shelf) {
    let response = await fetch(`${api}/books/${book.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({shelf})
    }).then(res => res.json())
    return await response
}

async function search(query) {
    let response = await fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query})
    }).then(res => res.json())
        .then(data => data.books)
    return response
}
