import css from './Contact.module.css';
import { deleteItems } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function Contact({id, name, number}) {
  const dispatch = useDispatch();

    return (
    <li key={id} className={css.contact}>
        <p className={css.name}>{name}</p>
        <p>{number}</p>
        <button onClick={()=>dispatch(deleteItems(id))}>Delete</button>
    </li>
  )
}
