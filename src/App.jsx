import './App.css';
import { Contactlist } from './components/Contactlist/Contactlist';
import { Searchbox } from './components/Searchbox/Searchbox';
import { Contactform } from './components/Contactform/Contactform';

export const App = () => {
  return (
    <div>
      <Contactform />
      <Searchbox />
      <Contactlist />
    </div>
  );
};
