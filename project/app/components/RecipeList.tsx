"use client";

import { useRouter } from "next/navigation";
import { Recipe } from "../types/recipe";

interface RecipeListProps {
  recipes: Recipe[][];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  const router = useRouter();

  const goToDetail = (recipeId: number) => {
    // Ensure client-side navigation
    if (typeof window !== "undefined") {
      router.push(`/dashboard/recipe/${recipeId}`); // Correct routing
    }
  };

  if (recipes.length === 0) {
    return <></>;
  }

  return (
    <ul className="space-y-4">
      {recipes.map((recipe: Recipe[], index) => (
        <li
          key={index}
          className="border border-gray-100 rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
          onClick={() => goToDetail(index)} // Pass the index as the ID
        >
          <h3 className="mb-2 text-2xl font-semibold text-gray-900 leading-snug">
            {recipe[recipe.length - 1].title}
          </h3>

          <div className="mb-4 flex flex-wrap space-x-2">
            {recipe[recipe.length - 1].tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
              >
                {`#${tag}`}
              </span>
            ))}
          </div>

          <button
            className="mt-2 px-3 py-1.5 bg-gray-800 text-white text-sm font-medium py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              goToDetail(index);
            }}
          >
            자세히 보기
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
