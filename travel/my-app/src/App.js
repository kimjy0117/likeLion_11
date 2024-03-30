import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import Main2 from "./pages/Main2";
import Header from "./component/Header";
import RootLayout from "./component/RootLayer";
import Intro from './pages/Intro';
import Intro2 from "./pages/Intro2";
import CcIntro from "./pages/ChungCheong/Intro";
import Error from "./pages/Error";
import IntroChungCafe1 from "./pages/ChungCheong/IntroChungCheongCafe1";
import IntroChungCafe2 from "./pages/ChungCheong/IntroChungCheongCafe2";
import IntroChungPlace1 from "./pages/ChungCheong/introChungCheongPlace1";
import IntroChungPlace2 from "./pages/ChungCheong/introChungCheongPlace2";
import IntroChungFood1 from "./pages/ChungCheong/introChungCheongRestaurant1";
import IntroChungFood2 from "./pages/ChungCheong/introChungCheongRestaurant2";
import GwIntro from "./pages/Gangwon/Intro";
import IntroGangwonCafe1 from "./pages/Gangwon/introGangwonCafe1";
import IntroGangwonCafe2 from "./pages/Gangwon/introGangwonCafe2";
import IntroGangwonPlace1 from "./pages/Gangwon/introGangwonPlace1";
import IntroGangwonPlace2 from "./pages/Gangwon/introGangwonPlace2";
import IntroGangwonfood1 from "./pages/Gangwon/introGangwonRestaurant1";
import IntroGangwonfood2 from "./pages/Gangwon/introGangwonRestaurant2";
import GgIntro from "./pages/Gyeonggi/Intro";
import IntroGyeonggiCafe1 from './pages/Gyeonggi/introGyeonggiCafe1'
import IntroGyeonggiCafe2 from './pages/Gyeonggi/introGyeonggiCafe2'
import IntroGyeonggiPlace1 from './pages/Gyeonggi/introGyeonggiPlace1'
import IntroGyeonggiPlace2 from './pages/Gyeonggi/introGyeonggiPlace2'
import IntroGyeonggifood1 from './pages/Gyeonggi/introGyeonggiRestaurant1'
import IntroGyeonggifood2 from './pages/Gyeonggi/introGyeonggiRestaurant2'
import SeoulIntro from "./pages/Seoul/Intro";
import SeoulCafe1 from "./pages/Seoul/introSeoulCafe1";
import SeoulCafe2 from './pages/Seoul/introSeoulCafe2'
import SeoulPlace1 from "./pages/Seoul/introSeoulPlace1";
import SeoulPlace2 from './pages/Seoul/introSeoulPlace2'
import Seoulfood1 from './pages/Seoul/introSeoulRestaurant1'
import Seoulfood2 from './pages/Seoul/introSeoulRestaurant2'
import GyeongsangIntro from "./pages/Gyeongsang/Intro";
import JejuIntro from "./pages/Jeju/Intro";
import JeollaIntro from './pages/Jeolla/Intro'
import GyeongsangCafe1 from './pages/Gyeongsang/introGyeongsangCafe1'
import GyeongsangCafe2 from './pages/Gyeongsang/introGyeongsangCafe2'
import GyeongsangPlace1 from './pages/Gyeongsang/introGyeongsangPlace1'
import GyeongsangPlace2 from './pages/Gyeongsang/introGyeongsangPlace2'
import GyeongsangRestaurant1 from "./pages/Gyeongsang/introGyeongsangRestaurant1";
import GyeongsangRestaurant2 from "./pages/Gyeongsang/introGyeongsangRestaurant2";
import JeollaCafe1 from './pages/Jeolla/introJeollaCafe1'
import JeollaCafe2 from './pages/Jeolla/introJeollaCafe2'
import JeollaPlace1 from './pages/Jeolla/introJeollaPlace1'
import JeollaPlace2 from './pages/Jeolla/introJeollaPlace2'
import JeollaRestaurant1 from './pages/Jeolla/introJeollaRestaurant1'
import JeollaRestaurant2 from './pages/Jeolla/introJeollaRestaurant2'
import JejuCafe2 from "./pages/Jeju/introJejuCafe2";
import JejuCafe1 from './pages/Jeju/introJejuCafe1'
import JejuPlace1 from './pages/Jeju/introJejuPlace1'
import JejuPlace2 from './pages/Jeju/introJejuPlace2'
import JejuRestaurant1 from './pages/Jeju/introJejuRestaurant1'
import JejuRestaurant2 from './pages/Jeju/introJejuRestaurant2'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Main2 />},
      { path: '/intro/Seoul', element: <SeoulIntro />},
      { path: '/intro/Seoul/cafe1', element: <SeoulCafe1  />},
      { path: '/intro/Seoul/cafe2', element: <SeoulCafe2 />},
      { path: '/intro/Seoul/place1', element: <SeoulPlace1 />},
      { path: '/intro/Seoul/place2', element: <SeoulPlace2 />},
      { path: '/intro/Seoul/food1', element: <Seoulfood1 />},
      { path: '/intro/Seoul/food2', element: <Seoulfood2 />},
      { path: '/intro/Gyeonggi', element: <GgIntro/>},
      { path: '/intro/Gyeonggi/cafe1', element: <IntroGyeonggiCafe1/>},
      { path: '/intro/Gyeonggi/cafe2', element: <IntroGyeonggiCafe2/>},
      { path: '/intro/Gyeonggi/place1', element: <IntroGyeonggiPlace1/>},
      { path: '/intro/Gyeonggi/place2', element: <IntroGyeonggiPlace2/>},
      { path: '/intro/Gyeonggi/food1', element: <IntroGyeonggifood1/>},
      { path: '/intro/Gyeonggi/food2', element: <IntroGyeonggifood2/>},
      { path: '/intro/Gangwon', element: <GwIntro />},
      { path: '/intro/Gangwon/cafe1', element: <IntroGangwonCafe1/>},
      { path: "/intro/Gangwon/cafe2", element: <IntroGangwonCafe2 />},
      { path: "/intro/Gangwon/place1", element: <IntroGangwonPlace1 />},
      { path: "/intro/Gangwon/place2", element: <IntroGangwonPlace2 />},
      { path: "/intro/Gangwon/food1", element: <IntroGangwonfood1 />},
      { path: "/intro/Gangwon/food2", element: <IntroGangwonfood2 />},
      { path: '/intro/Chungcheong', 
        element: <RootLayout />,
        children: [
          { index: true, element: <CcIntro />},
          { path:"cafe1", element: <IntroChungCafe1 />},
          { path:"cafe2", element: <IntroChungCafe2 />},
          { path:"place1", element: <IntroChungPlace1 />},
          { path:"place2", element: <IntroChungPlace2 />},
          { path:"food1", element: <IntroChungFood1 />},
          { path:"food2", element: <IntroChungFood2 />}
        ]
      },
      { path: '/intro/Jeolla', element: <JeollaIntro />},
      { path: '/intro/Jeolla/cafe1', element: <JeollaIntro />},
      { path: '/intro/Jeolla/cafe2', element: <JeollaCafe1 />},
      { path: '/intro/Jeolla/place1', element: <JeollaCafe2 />},
      { path: '/intro/Jeolla/place2', element: <JeollaPlace1 />},
      { path: '/intro/Jeolla/food1', element: <JeollaPlace2 />},
      { path: '/intro/Jeolla/food2', element: <JeollaRestaurant1 />},
      { path: '/intro/Jeolla/food2', element: <JeollaRestaurant2 />},
      { path: '/intro/Gyeongsang', element: <GyeongsangIntro />},
      { path: '/intro/Gyeongsang/cafe1', element: <GyeongsangCafe1 />},
      { path: '/intro/Gyeongsang/cafe2', element: <GyeongsangCafe2 />},
      { path: '/intro/Gyeongsang/place1', element: <GyeongsangPlace1 />},
      { path: '/intro/Gyeongsang/place2', element: <GyeongsangPlace2 />},
      { path: '/intro/Gyeongsang/food1', element: <GyeongsangRestaurant1 />},
      { path: '/intro/Gyeongsang/food2', element: <GyeongsangRestaurant2 />},
      { path: '/intro/Jeju', element: <JejuIntro />},
      { path: '/intro/Jeju/cafe1', element: <JejuCafe1 />},
      { path: '/intro/Jeju/cafe2', element: <JejuCafe2 />},
      { path: '/intro/Jeju/place1', element: <JejuPlace1 />},
      { path: '/intro/Jeju/place2', element: <JejuPlace2 />},
      { path: '/intro/Jeju/food1', element: <JejuRestaurant1/>},
      { path: '/intro/Jeju/food2', element: <JejuRestaurant2 />},
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
    

  );
}

export default App;
