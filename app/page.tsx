import Books from '../components/Books'
import { useState } from 'react'

export default function Home() {
  const [Books, atualizarBook] = useState<any[]>([])

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
    atualizarBook([...Books, novo_book])
  }
  function removerBook(title: string) {
    let novos_books = Books.filter(Books => Books.title != title) 

    atualizarBook(novos_books)
  }
  return(
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Gerenciador de Cadastro de Livros</h1>
      <div>
      <form onSubmit={adicionarBook} className='w-full flex flex-col space-y-4 my-10'>
      <input type="text" title="title" placeholder='Nome do Livro'/> 
          <input type="text" name="page" placeholder='Quanti. de Paginas'/> 
          <button type="submit" className='border-2 rounded-lg border-green-300 bg-green-200'>Adicionar</button>
      </form>
      </div>
      <div id="lista" className='space-y-5 w-full max-w-2xl'>
        {Books.map(Book01 => < Books
          key={Book01.title}
          nome={Book01.page} 
          removerBook={removerBook} 
        />)}
      </div>
    </main>
  )
  
}
