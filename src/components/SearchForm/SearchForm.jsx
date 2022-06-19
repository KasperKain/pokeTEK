import "./SearchForm.css"
import { useState } from 'react';

export default function SearchForm(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('name');
    const [used, setUsed] = useState('unused');

    const handleSubmit = (e) => {
        setUsed('used')
        e.preventDefault();
        props.onClick(searchType, searchTerm);
    }

    return <form className={`SearchForm ${used}`} onSubmit={handleSubmit}>
        <input onChange={(e) => setSearchTerm(e.target.value)} className='form-field' placeholder='query' name='query' value={searchTerm} />
        <select onChange={(e) => setSearchType(e.target.value)} className='form-field' name="search-type" id="search-type" value={searchType}>
            <option value="name">By Name</option>
            <option value="type">By Type</option>
            <option value="generation">By Gen</option>
        </select>
        <button type='submit'>
            GO
        </button>
    </form >

}