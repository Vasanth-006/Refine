import { Refine } from "@refinedev/core";
import dataProvider, { GraphQLClient } from "@refinedev/graphql";
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import ImageDisplay from "./components/ImageDisplay";
import RefineStorybookimage from "./components/RefinePage";
import CombinedImagePage from "./components/CombinedImagePage";


const API_URL = "https://your-graphql-url/graphql";
const client = new GraphQLClient(API_URL);
const gqlDataProvider = dataProvider(client);

function App() {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={gqlDataProvider}
        routerProvider={routerBindings}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
          useNewQueryKeys: true,
          projectId: "veTWis-vLaid7-0immZr",
        }}
      >
        <Routes>
          {/* Replace this with your actual pages */}
          <Route index element={<CombinedImagePage/>} />
        </Routes>
        <UnsavedChangesNotifier />
        <DocumentTitleHandler />
      </Refine>
    </BrowserRouter>
  );
}

export default App;
