import Header from "../components/Header";
import Footer from "../components/footer";
import Task from "../components/task";
import Taskinput from "../components//taskinput";
export default function Home() {
  const task = [
{id: 1, title: "Read a book", comp:true },
{id: 2, title: "Take a shower", comp:false},
{id: 3, title: "Sleep", comp:false },
  ];

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* taskinput */}
        <Taskinput />
        {/* task */}
        <Task {...task[0]}/>
        {/* task */}
        <Task {...task[1]}/>
        {/* task */}
        <Task {...task[2]}/>
      </div>

      {/* //footer section */}
      <Footer />
        
    </div>
  );
}
