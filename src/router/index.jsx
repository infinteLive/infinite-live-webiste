import { createBrowserRouter} from "react-router-dom";
import LandingPage from "../pages/Landing-page";
import BaseLayout from "../BaseLayout";
import NewsBlog from "../pages/NewsBlog";
import About from "../pages/About";
import OurProject from "../pages/OurProject";
import Contactus from "../pages/Contact_us";
import ContactRent from "../pages/Contact-usRent";
import ContactFixed from "../pages/Contact-usFixed";
import ProductRent from "../pages/Product-rent";
import ProductFixed from "../pages/Product-fixed";
import ProjectRent from "../pages/Project-rent";
import ProjectFixed from "../pages/Project-fixed";
import DetailRent from "../pages/detailRent";
import DetailFixed from "../pages/detailFixed";
import DetailProjectRent from "../pages/DetailProject-rent";
import CardProjectRent from "../components/cardProject-rent";
import CardProjectFixed from "../components/cardProjectFixed";
import DetailProjectFixed from "../pages/detailProject-Fixed";
// import Navbar from "../components/Navbar";




const router = createBrowserRouter([
  {
   element : <BaseLayout/>,
   children : [
      {
         path : '/',
         element : <LandingPage/>
      },
      {
         path : '/news',
         element : <NewsBlog/>
      },
      {
         path : '/about',
         element : <About/>
      },
      {
         path : '/project',
         element : <OurProject/>
      },
      // {
      //    path : '/contact-us',
      //    element : <Contactus/>
      // },
      {
         path : '/contact-us',
         element : <ContactRent/>
      },
      {
         path : '/contact-fixed',
         element :<ContactFixed/>
      },
      {
         path : '/product-rent',
         element : <ProductRent/>
      },
      {
         path : '/product-fixed',
         element : <ProductFixed/>
      },
      {
         path :'/project-rent',
         element : <ProjectRent/>
      },
      {
         path :'/project-fixed',
         element : <ProjectFixed/>
      },
      {
         path : '/detailRent',
         element : <DetailRent/>
      },
      {
         path : '/detailfixed',
         element : <DetailFixed/>
      },
      {
         path : '/detailProject-rent',
         element : <DetailProjectRent/>
      },
      {
         path :'/projectRent',
         element : <CardProjectRent/>
      },
      {
         path : '/projectFixed',
         element : <CardProjectFixed/>
      },
      {
         path : '/detailProject-fixed',
         element : <DetailProjectFixed/>
      }
   ]
  }
])


 export default router