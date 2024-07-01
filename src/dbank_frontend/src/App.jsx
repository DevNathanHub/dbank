
import ErrorBoundary from './ErrorBoundary';
import LoanApp from './LoanApp';
import './App.css';
import Layout from './Layout';

function App() {
  // const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   dbank_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <main >
      
      <Layout>
      <ErrorBoundary>
        <LoanApp/>
      </ErrorBoundary>
      </Layout>
    </main>
  );
}

export default App;
