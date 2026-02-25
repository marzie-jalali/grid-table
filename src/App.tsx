import GridTable from "./components";
import { childColumns, mockColumns, sourceData } from "./components/data";

function App() {
  return (
    <>
      <GridTable
        columns={mockColumns}
        data={sourceData}
        childColumns={childColumns}
      />
    </>
  );
}

export default App;
