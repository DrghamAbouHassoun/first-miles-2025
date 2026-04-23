import { useContext } from "react";
import { RouterContext } from "../modules/common/contexts/RouterProvider";
import OverviewPage from "../pages/OverviewPage";
import StrategicReviewPage from "../pages/StrategicReviewPage";
import LeadershipPage from "../pages/LeadershipPage";
import OperatingReviewPage from "../pages/OperatingReviewPage";
import SustainabilityReviewPage from "../pages/SustainabilityReviewPage";
import FinancialStatementsPage from "../pages/FinancialStatementsPage";
import Home from "../pages/Home";
import DownloadCenter from "../pages/DownloadCenter";

export const pages = [
  {
    path: "overview",
    name: "Overview",
    component: <OverviewPage />,
    isNavVisible: true,
  },
  {
    path: "strategic-review",
    name: "Strategic Review",
    component: <StrategicReviewPage />,
    isNavVisible: true,
  },
  {
    path: "leadership",
    name: "Leadership",
    component: <LeadershipPage />,
    isNavVisible: true,
  },
  {
    path: "operating-review",
    name: "Operating Review",
    component: <OperatingReviewPage />,
    isNavVisible: true,
  },
  {
    path: "sustainability-review",
    name: "Sustainability Review",
    component: <SustainabilityReviewPage />,
    isNavVisible: true,
  },
  {
    path: "financial-statements",
    name: "Financial Statements",
    component: <FinancialStatementsPage />,
    isNavVisible: true,
  },
  {
    path: "download-center",
    name: "Download Center",
    component: <DownloadCenter />,
    isNavVisible: false,
  }
]

const Router = () => {
  const { currentRoute, homeKey } = useContext(RouterContext)
  switch (currentRoute) {
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
    case "financial-statements":
      return <FinancialStatementsPage />;
    case "download-center":
      return <DownloadCenter />;
    default:
      return <Home key={homeKey} />;
  }
};

export default Router;
