import AjaxRequests from "./components/AjaxRequests";
import Animation from "./components/Animation";
import ConditionalRendering from "./components/ConditionalRendering";
import EventHandling from "./components/EventHandling";
import FormHandling from "./components/FormHandling";
import RenderingLists from "./components/RenderingLists";
import DomManipulation from "./components/DomManipulation";

function App() {
  return (
    <div>
      <h1>React Sample Project</h1>
      <DomManipulation />
      <EventHandling />
      <AjaxRequests />
      <RenderingLists />
      <FormHandling />
      <ConditionalRendering />
      <Animation />
    </div>
  );
}

export default App;
