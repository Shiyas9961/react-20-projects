//import Accordian from './components/accordian/Accordian';
//import RandomColor from './components/randomColor/RandomColor';
//import ImageSlider from './components/img-slider/ImageSlider';
//import StarRating from './components/start-rating/StarRating';
//import UseHooks from './components/customeHooks/UseHooks';
//import UseOutsideClick from './components/customeHooks/UseOutsideClick';
//import UseResizeHook from './components/customeHooks/UseResizeHook';
//import FeatureFlag from './components/feature-flag/FeatureFlag';
//import FeatureGlobalAccess from './components/feature-flag/context/feauterContext';

import ScrollBySection from "./components/scroll-by-section/ScrollBySection";
//import ScrollTopAndBottom from "./components/scroll-top-and-bottom/ScrollTopAndBottom";

//import TicToc from "./components/tic-toc-game/TicToc";

//import SearchItem from "./components/search-filter/SearchItem";

//import TabList from "./components/click-tabs/TabList";
//import GitHubProfile from "./components/git-hub-profile-finder/GitHubProfile";
//import ModelTest from "./components/model-pop-up/ModelTest";

//import ThemeChange from "./components/light-dark/ThemeChange";
//import ScrollBar from "./components/scroll-bar/ScrollBar";
//import QrCodeGenerator from "./components/qr-code-generator/QrCodeGenerator";

//import LoadMore from "./components/load-more-button/LoadMore";
//import TreeView from "./components/tree-view/TreeView";
//import menus from "./components/tree-view/data";

function App() {
  return (
    <div className='main'>
      {/* Accordian component */}
      {/* <Accordian/> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Start rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider component */}
      {/* <ImageSlider page={"1"} url={'https://picsum.photos/v2/list'} limit={"10"}/> */}

      {/* Load more button component */}
      {/* <LoadMore/> */}

      {/* Tree view component */}
      {/* <TreeView menus={menus}/> */}

      {/* QrCode Generator component */}
      {/* <QrCodeGenerator/> */}

      {/* Theme Changer component */}
      {/* <ThemeChange /> */}

      {/* Scroll percentage component */}
     {/*  <ScrollBar url={'https://dummyjson.com/products?limit=100'}/> */}

     {/* Tab click component */}
     {/* <TabList/> */}

     {/* Model Pop up component */}
     {/* <ModelTest/> */}

     {/* GitHub Profile finder */}
     {/* <GitHubProfile/> */}

     {/* Search component */}
     {/* <SearchItem/> */}

     {/* Tic Toc Game component */}
     {/* <TicToc/> */}

     {/* Features component */}
     {/* <FeatureGlobalAccess>
      <FeatureFlag/>
     </FeatureGlobalAccess> */}

     { /* Custome Hooks component */ }
     {/* <UseHooks/> */}
     {/* <UseOutsideClick/> */}
     {/* <UseResizeHook/> */}

     {/* scroll component */}
     {/* <ScrollTopAndBottom/> */}
     <ScrollBySection/>
    </div>
  );
}

export default App;
