import "./App.css";
import "./Animation.css";
import "./GlobalAnimations.css";
import Layout from "./modules/common/components/layout/Layout";
import LangProvider from "./modules/common/contexts/LangProvider";
import MenuProvider from "./modules/common/contexts/MenuProvider";
import RouterProvider from "./modules/common/contexts/RouterProvider";
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
