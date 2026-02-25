import GridTable from "./components";
import { mockColumns, sourceData } from "./components/data";

function App() {
  return (
    <>
      <GridTable columns={mockColumns} data={sourceData} />
    </>
  );
}

export default App;
