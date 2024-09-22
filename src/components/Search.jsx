import {useState} from "react";

function Search(props) {
    const [value, setValue] = useState('');
    const {handleSearch = Function.prototype} = props;

    const handleKey = (e)=>{
        if(e.key === 'Enter'){
            handleSubmit();

        }
    };

    const handleSubmit=()=>{
        handleSearch(value);

    };

    return (
        <div className="input-field col s12">
            <input type="search"
                   id='search-field'
                   onKeyDown={handleKey}
                   onChange={(e)=> setValue(e.target.value)}
                   value={value}
            />
            <button className='btn'
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0
            }
            } onClick={handleSubmit}>Search
            </button>
        </div>
    );

}

export {Search};