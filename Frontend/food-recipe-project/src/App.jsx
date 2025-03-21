import './App.css'
import MainNavigation from './components/MainNavigation';
import Home from './pages/home';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import axios from 'axios';
import AddFoodRecipe from './pages/AddFoodRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeDetails from './pages/RecipeDetails';

const getAllRecipes = async () => {
  let allRecipes =[]
  await axios.get('https://food-recipe-backend-d2v1.onrender.com/recipe')
  .then((res) => {
    allRecipes = res.data
  })
  return allRecipes
}

const getMyRecipe = async()=>{
  let user=JSON.parse(localStorage.getItem("user"))
  let allRecipes=await getAllRecipes()
  return allRecipes.filter(item=>item.createdBy===user._id)
}

const getFavRecipe =()=>{
  return JSON.parse(localStorage.getItem("fav"))
}

const getRecipe=async({params})=>{
  let recipe;
  await axios.get(`https://food-recipe-backend-d2v1.onrender.com/recipe/${params.id}`)
  .then(res=>recipe=res.data)

  await axios.get(`https://food-recipe-backend-d2v1.onrender.com/user/${recipe.createdBy}`)
  .then(res=>{
    recipe={...recipe,email:res.data.email}
  })

  return recipe
}

const router = createBrowserRouter([
  {path: "/", element:<MainNavigation />,children:[
    {path:"/",element:<Home />,loader:getAllRecipes},
    {path:"/myRecipe",element:<Home/>,loader:getMyRecipe},
    {path:"/favRecipe",element:<Home />,loader:getFavRecipe},
    {path:"/addRecipe",element:<AddFoodRecipe/>},
    {path:"/editRecipe/:id",element:<EditRecipe/>},
    {path:"/recipe/:id",element:<RecipeDetails/>,loader:getRecipe},
  ]}
]);
function App() {
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
