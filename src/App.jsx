import Header from "./Header";
import StudentCard from "./StudentCard";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />

      <StudentCard name="Akshat" age={19} course="React" />
      <StudentCard name="Rahul" age={23} course="Java" />

      <Footer />
    </div>
  );
}

export default App;