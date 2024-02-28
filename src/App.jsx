import './App.css';
import { ContactList } from './components/Contactlist/Contactlist';
import { Searchbox } from './components/Searchbox/Searchbox';
import { Contactform } from './components/Contactform/Contactform';

export const App = () => {
  return (
    <div>
      <Contactform />
      <Searchbox />
      <ContactList />
    </div>
  );
};
