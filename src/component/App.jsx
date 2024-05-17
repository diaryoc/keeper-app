import '../App.css';
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../constant/notes";

function App() {
  return (
    <div className="App">
      <Heading/>
        {notes.map(note => (
            <Note key={note.id} title={note.title} description={note.content} />
        ))}
      <Footer />
    </div>
  );
}

export default App;
