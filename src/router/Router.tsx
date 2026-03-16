import { useContext } from "react";
import { RouterContext } from "../contexts/RouterProvider";
import AtAGlancePage from "../pages/AtAGlancePage";
import OverviewPage from "../pages/OverviewPage";
import StrategicReviewPage from "../pages/StrategicReviewPage";
import LeadershipPage from "../pages/LeadershipPage";
import OperatingReviewPage from "../pages/OperatingReviewPage";
import SustainabilityReviewPage from "../pages/SustainabilityReviewPage";
import Home from "../pages/Home";

export const pages = [
  {
    path: "at-a-glance",
    name: "At A Glance",
    component: <AtAGlancePage />
  },
  {
    path: "overview",
    name: "Overview",
    component: <OverviewPage />
  },
  {
    path: "strategic-review",
    name: "Strategic Review",
    component: <StrategicReviewPage />
  },
  {
    path: "leadership",
    name: "Leadership",
    component: <LeadershipPage />
  },
  {
    path: "operating-review",
    name: "Operating Review",
    component: <OperatingReviewPage />
  },
  {
    path: "sustainability-review",
    name: "Sustainability Review",
    component: <SustainabilityReviewPage />
  }
]

const Router = () => {
  const { currentRoute } = useContext(RouterContext)
  switch (currentRoute) {
    case "at-a-glance":
      return <AtAGlancePage />;
    case "overview":
      return <OverviewPage />;
    case "strategic-review":
      return <StrategicReviewPage />;
    case "leadership":
      return <LeadershipPage />;
    case "operating-review":
      return <OperatingReviewPage />;
    case "sustainability-review":
      return <SustainabilityReviewPage />;
    default:
      return <Home />;
  }
};

export default Router;
