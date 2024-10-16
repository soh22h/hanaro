"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Recipe } from "../types/recipe";
import AddRecipe from "./change-recipe/AddRecipe";
import RecipeList from "../components/RecipeList";

const Dashboard = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[][]>([]);
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const { data: session, status } = useSession();

  const userKey = session?.user?.email || "guest";

  useEffect(() => {
    const savedRecipes = localStorage.getItem(`recipes_${userKey}`);
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleAddRecipe = (newRecipe: Recipe[]) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem(`recipes_${userKey}`, JSON.stringify(updatedRecipes));
  };

  const handleCancelAddRecipe = () => {
    setShowAddRecipe(false);
  };

  return (
    <div className="flex flex-col min-h-screen p-5 bg-gray-100 font-sans">
      <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
        <h2 className="font-bold text-2xl text-gray-800">나만의 레시피</h2>
        <div>
          <button
            className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-md shadow hover:bg-blue-700 transition duration-150 ease-in-out mr-2"
            onClick={() => setShowAddRecipe(true)}
          >
            레시피 추가
          </button>
          <button
            className="bg-red-600 text-white px-3 py-1.5 text-sm rounded-md shadow hover:bg-red-700 transition duration-150 ease-in-out"
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className="mt-5">
        {showAddRecipe ? (
          <AddRecipe
            onAddRecipe={(newRecipe: Recipe[]) => {
              handleAddRecipe(newRecipe);
              setShowAddRecipe(false);
            }}
            onCancel={handleCancelAddRecipe}
          />
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
