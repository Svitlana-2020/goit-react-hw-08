import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { changeFilter } from '../redux/filters/slice';
import { selectFilter } from '../redux/filters/selectors';


const SearchBox =() => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleFilter = (e) => {
        const inputValue = e.target.value;
        dispatch(changeFilter(inputValue));
      };

   return (<div className={css.wrapper}>
    <p className={css.title}>Find contacts by name</p>
        
 <input type="text" value={filter} onChange={handleFilter} className={css.input} />
    </div>
)
}

export default SearchBox