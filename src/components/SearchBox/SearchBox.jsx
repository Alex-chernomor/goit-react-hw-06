import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import {searchName} from '../../redux/filtersSlice';



export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => {    
    state.filters.name}
  );
  
  return (
    <div>
        <p className={css.sortField}>Find contacts by name</p>
        <input 
        className ={css.inputField} 
        type="text"
        value={filter}
        onChange={(e) => {
          dispatch(searchName(e.target.value))}
        }
        />
    </div>
  )
}
