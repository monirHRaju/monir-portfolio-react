import MainLayout from "./layouts/MainLayout";
import SmoothScrolling from "./components/SmoothScrolling";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <SmoothScrolling>
      <CustomCursor />
      <MainLayout />
    </SmoothScrolling>
  );
}

export default App;
