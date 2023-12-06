import books from '../components/books'
import { useState } from 'react'

export default function Home() {
  const [books, atualizarBook] = useState<any[]>([])

  function adicionarBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let title = e.target[0].value
    let page = e.target[1].value
   
    if (title.length == 0 || page.length == 0) {
      alert('Preencha todos os campos')
      return 
    }
    const novo_book = {
      title: title,
      page: page,
    } 
    atualizarBook([...books, novo_book])
  }
  function removerBook(title: string) {
    let novos_books = books.filter(books => books.title != title) 

    atualizarBook(novos_books)
  }
  return(
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Gerenciador de Cadastro de Livros</h1>
      <div>
      <form onSubmit={adicionarBook} className='w-full flex flex-col space-y-4 my-10'>
      <input type="text" title="title" placeholder='Nome do Livro'/> 
          <input type="text" name="page" placeholder='Quantidade de Paginas'/> 
          <button type="submit" className='border-2 rounded-lg border-green-300 bg-green-200'>Adicionar</button>
      </form>
      </div>
      <div id="lista" className='space-y-5 w-full max-w-2xl'>
        {books.map(Book01 => <books
          key={Book01.title}
          nome={Book01.page} 
          removerBook={removerBook} 
        />)}
      </div>
    </main>
  )
  
}
