"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { Recipe } from "../../../types/recipe"; // Assuming Recipe type is defined
import ModifyRecipe from "../../change-recipe/ModifyRecipe";

const RecipeDetail: React.FC = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the recipe ID from the route
  const [recipes, setRecipes] = useState<Recipe[][]>([[]]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [versionHistory, setVersionHistory] = useState<Recipe[]>([]);
  const [showModifyRecipe, setShowModifyRecipe] = useState(false); // State to toggle between pages

  const [timeInputs, setTimeInputs] = useState<string[]>([]); // Store user input for time
  const [timers, setTimers] = useState<number[]>([]); // Store the countdown time for each step
  const [timerIntervals, setTimerIntervals] = useState<(NodeJS.Timeout | null)[]>([]); // Store intervals
  const { data: session } = useSession();

  const userKey = session?.user?.email || "guest";

  // Load the recipe and version history from local storage
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem(`recipes_${userKey}`) || "[[]]");
    const recipe: Recipe[] = savedRecipes[id as unknown as number];
    const r: Recipe = recipe[recipe.length - 1];
    if (r) {
      setRecipes(savedRecipes);
      setCurrentRecipe(r);
      setVersionHistory(recipe);
      setTimeInputs(new Array(r.instructions.length).fill("")); // Initialize time input fields
      setTimers(new Array(r.instructions.length).fill(0)); // Initialize timers
      setTimerIntervals(new Array(r.instructions.length).fill(null)); // Initialize intervals    
    }
  }, [id]);

  // Start/Stop/Resume the timer for each step
  const toggleTimer = (index: number) => {
    if (timerIntervals[index]) {
      // Timer is running, stop it and store the remaining time
      clearInterval(timerIntervals[index]!);
      const updatedIntervals = [...timerIntervals];
      updatedIntervals[index] = null;
      setTimerIntervals(updatedIntervals);
    } else {
      // Timer is stopped, so resume or start it based on the current timer value
      const timeToRun = timers[index] > 0 ? timers[index] : parseInt(timeInputs[index], 10); // Get remaining or input value

      if (!isNaN(timeToRun) && timeToRun > 0) {
        const updatedTimers = [...timers];
        updatedTimers[index] = timeToRun; // Set or resume the timer from where it was stopped
        setTimers(updatedTimers);

        const interval = setInterval(() => {
          if (updatedTimers[index] > 0) {
            updatedTimers[index] -= 1; // Countdown the timer
            setTimers([...updatedTimers]);
          } else {
            // Timer reached zero, stop the timer
            clearInterval(timerIntervals[index]!);
            const updatedIntervals = [...timerIntervals];
            updatedIntervals[index] = null;
            setTimerIntervals(updatedIntervals);
          }
        }, 1000);

        const updatedIntervals = [...timerIntervals];
        updatedIntervals[index] = interval;
        setTimerIntervals(updatedIntervals);
      }
    }
  };

  // Restore previous version
  const restoreVersion = (versionIndex: number) => {
    const selectedVersion = versionHistory[versionIndex];
    setCurrentRecipe(selectedVersion);
  };

  const updateRecipe = () => {
    setShowModifyRecipe(true);
  };

  const handleDelete = () => {
    alert('레시피가 삭제되었습니다.');
    const updatedRecipes = recipes.splice(id as unknown as number, 1);
    setRecipes(updatedRecipes);
    localStorage.setItem(`recipes_${userKey}`, JSON.stringify(updatedRecipes));
    router.push(`/dashboard`);
  };

  const handleModifyRecipe = (newRecipe: Recipe) => {
    const modifiedList: Recipe[] = [...versionHistory, newRecipe];
    recipes[id as unknown as number] = modifiedList;
    setRecipes(recipes);
    localStorage.setItem(`recipes_${userKey}`, JSON.stringify(recipes));
    setVersionHistory(modifiedList); // Ensure version history updates
    setCurrentRecipe(newRecipe);
  };

  return (
    showModifyRecipe ? (
      <ModifyRecipe
        onModifyRecipe={(newRecipe: Recipe) => {
          handleModifyRecipe(newRecipe);
          setShowModifyRecipe(false);
        }}
        recipes={versionHistory}
      />
    ) : (
      <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
        {/* Title */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h2 className="text-3xl font-bold text-gray-900">{currentRecipe?.title}</h2>
        </div>
    
        {/* Tags */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <div className="flex flex-wrap gap-2">
            {currentRecipe?.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
    
        {/* Ingredients */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="text-xl font-semibold text-gray-800">재료</h3>
          <ul className="list-disc pl-6 text-gray-600 text-sm">
            {currentRecipe?.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
    
        {/* Cooking Instructions with Timers */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="text-xl font-semibold text-gray-800">조리 과정</h3>
          {currentRecipe?.instructions.map((instruction, index) => (
            <div key={index} className="space-y-2">
              <p className="text-gray-600 text-sm">Step {index + 1}: {instruction}</p>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={timeInputs[index]}
                  onChange={(e) => {
                    const updatedTimeInputs = [...timeInputs];
                    updatedTimeInputs[index] = e.target.value;
                    setTimeInputs(updatedTimeInputs);
                  }}
                  placeholder="초 단위로 입력"
                  className="w-24 p-2 border border-gray-100 rounded-lg text-sm"
                />
                <span className="text-gray-500 text-xs">남은 시간: {timers[index] || 0}초</span>
                <button
                  onClick={() => toggleTimer(index)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    timerIntervals[index] ? "bg-red-600 text-white" : "bg-yellow-500 text-white"
                  } transition duration-150 ease-in-out`}
                >
                  {timerIntervals[index] ? "타이머 중지" : "타이머 시작"}
                </button>
              </div>
            </div>
          ))}
        </div>
    
        {/* Version Control Section */}
        <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
          <h3 className="text-xl font-semibold text-gray-800">수정 기록</h3>
          <ul className="list-disc pl-6 text-gray-600 text-sm">
            {versionHistory
              .slice(1, versionHistory.length - 1)
              .map((recipe, index) => (
                <li key={index} className="flex items-center justify-between mb-2">
                  <span>버전 {index + 1}: (수정일 {recipe.dateModified.toString()})</span>
                  <button
                    onClick={() => restoreVersion(index + 1)}
                    className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition duration-150 ease-in-out"
                  >
                    이 버전으로 복원
                  </button>
                </li>
              ))}
          </ul>
        </div>
    
        {/* Action Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-700 transition duration-150 ease-in-out"
          >
            삭제
          </button>
          <button
            onClick={updateRecipe}
            className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-150 ease-in-out"
          >
            수정
          </button>
          <button
            onClick={() => router.push(`/dashboard`)}
            className="bg-gray-800 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition duration-150 ease-in-out"
          >
            목록으로
          </button>
        </div>
      </div>
    )
  );
};

export default RecipeDetail;
