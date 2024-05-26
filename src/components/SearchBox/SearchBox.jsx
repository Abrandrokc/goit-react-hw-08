import { useDispatch, useSelector } from 'react-redux';

import css from "./SearchBox.module.css";
import { selectNameFilter } from '../../redux/filter/selectors';
import { changeFilter } from '../../redux/filter/slice';

export default function SearchBox() {
    const dispatch = useDispatch();
    const nameFilter = useSelector(selectNameFilter);
    console.log(nameFilter)

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value)); 
    };

    return <div className={css.SearchBox}>
        <label>Find contacts by name</label>
        <input 
            className={css.Input} 
            type="text" 
            value={nameFilter} 
            onChange={handleChange}
        />
    </div>
}
