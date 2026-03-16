import "./App.css";
import Layout from "./components/layout/Layout";
import LangProvider from "./contexts/LangProvider";
import MenuProvider from "./contexts/MenuProvider";
import RouterProvider from "./contexts/RouterProvider";
import Router from "./router/Router";

function App() {
  return (
    <MenuProvider>
      <LangProvider>
        <RouterProvider>
          <Layout>
            <Router />
          </Layout>
        </RouterProvider>
      </LangProvider>
    </MenuProvider>
  );
}

export default App;
