import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import css from './ContactList.module.css';

export default function ContactList(){
  const contacts = useSelector((state)=>state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const contactsList = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
    <ul className={css.contactLst}>      
       {
              contactsList.map((contact)=>{
              return <Contact       
              id = {contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
              />
              }) 
        }
    </ul>
  )
}
