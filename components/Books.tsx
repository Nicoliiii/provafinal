type Props = {
    title: string
    page: string
    removerBook: Function 
 }
 export default function Books(props: Props) {
    return (
        <div className="flex w-full space-x-10 items-center border-2 border-gray-200 bg-gray-50 rounded-lg p-2">
                <img src={props.title} className="aspect-square w-auto h-20 object-cover"/>
            <div className="w-full">
                <p>
                    {props.page}
                </p>
            </div>
            <button className="border-2 border-red-300 bg-red-50 px-2 rounded-lg h-min" onClick={() => props.removerBook(props.title)}>Remover</button>
        </div>
    )
  }