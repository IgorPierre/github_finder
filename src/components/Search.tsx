import { BsSearch } from 'react-icons/bs'

function Search() {
    return(
        <div>
            <h2>Buscar usuário</h2>

            <form>
                <input type="text" placeholder='Digite o nome do usuário' />
                <button><BsSearch/></button>
            </form>
        </div>
    )
}

export default Search;