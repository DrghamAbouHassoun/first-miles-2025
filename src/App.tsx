import "./App.css";
import "./Animation.css";
import "./GlobalAnimations.css";
import Layout from "./modules/common/components/layout/Layout";
import LangProvider from "./modules/common/contexts/LangProvider";
import MenuProvider from "./modules/common/contexts/MenuProvider";
import RouterProvider from "./modules/common/contexts/RouterProvider";
import Router from "./router/Router";
import ContactModalProvider from "./modules/home/contexts/ContactModalProvider";

function App() {
  return (
    <MenuProvider>
      <LangProvider>
        <RouterProvider>
          <ContactModalProvider>
            <Layout>
              <Router />
            </Layout>
          </ContactModalProvider>
        </RouterProvider>
      </LangProvider>
    </MenuProvider>
  );
}

export default App;
