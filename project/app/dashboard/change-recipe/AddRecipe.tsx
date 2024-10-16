"use client";

import { useState } from "react";
import { Recipe } from "../../types/recipe";

interface AddRecipeProps {
  onAddRecipe: (newRecipe: Recipe[]) => void;
  onCancel: () => void;
}

const AddRecipe: React.FC<AddRecipeProps> = ({ onAddRecipe, onCancel }) => {
  const [version] = useState(0);
  const [dateModified] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instruction, setInstruction] = useState("");
  const [instructions, setInstructions] = useState<string[]>([]);

  // Handler to add tag
  const handleAddTag = () => {
    if (tag.trim()) {
      setTags([...tags, tag]);
      setTag(""); // Clear input after adding
    }
  };

  // Handler to add ingredient
  const handleAddIngredient = () => {
    if (ingredient.trim()) {
      setIngredients([...ingredients, ingredient]);
      setIngredient(""); // Clear input after adding
    }
  };

  // Handler to add instruction
  const handleAddInstruction = () => {
    if (instruction.trim()) {
      setInstructions([...instructions, instruction]);
      setInstruction(""); // Clear input after adding
    }
  };

  // Handler to delete tag
  const handleDeleteTag = (index: number) => {
    const updatedTags = tags.filter((_, i) => i !== index);
    setTags(updatedTags);
  };

  // Handler to delete ingredient
  const handleDeleteIngredient = (index: number) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  // Handler to delete instruction
  const handleDeleteInstruction = (index: number) => {
    const updatedInstructions = instructions.filter((_, i) => i !== index);
    setInstructions(updatedInstructions);
  };

  // Handle recipe submission
  const handleSaveRecipe = () => {
    if (title.trim()) {
      const newRecipe: Recipe = {
        version,
        dateModified,
        title,
        tags,
        ingredients,
        instructions,
      };

      onAddRecipe([newRecipe]); // Pass new recipe as an array
      // Clear form after saving
      setTitle("");
      setTags([]);
      setIngredients([]);
      setInstructions([]);
    }
  };

  return (
      <div className="p-6 space-y-4 min-h-screen bg-gray-100 shadow-md rounded-lg">
        <h3 className="font-bold text-xl pb-5 text-gray-900">새 레시피 추가</h3>
    
        {/* Recipe Title */}
        <div className="border border-gray-100 rounded-md p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <label className="block mb-2 text-sm font-medium text-gray-600">레시피 제목</label>
          <div className="flex">
          <input
            type="text"
            placeholder="레시피 제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-2  text-sm rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          </div>
        </div>
    
        {/* Tags */}
        <div className="border border-gray-100 rounded-md p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <label className="block mb-2 text-sm font-medium text-gray-600">태그</label>
          <div className="flex">
            <input
              type="text"
              placeholder="태그를 입력하세요"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="flex-1 p-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              className="ml-2 bg-blue-600 text-white p-2 text-sm rounded-md hover:bg-blue-700 transition"
              onClick={handleAddTag}
            >
              추가
            </button>
          </div>
          <ul className="mt-2">
            {tags.map((t, index) => (
              <li key={index} className="flex items-center mt-1">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded-md mr-2">{t}</span>
                <button
                  onClick={() => handleDeleteTag(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
    
        {/* Ingredients */}
        <div className="border border-gray-100 rounded-md p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <label className="block mb-2 text-sm font-medium text-gray-600">재료</label>
          <div className="flex">
            <input
              type="text"
              placeholder="재료를 입력하세요"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="flex-1 p-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              className="ml-2 bg-blue-600 text-white p-2 text-sm rounded-md hover:bg-green-700 transition"
              onClick={handleAddIngredient}
            >
              추가
            </button>
          </div>
          <ul className="mt-2">
            {ingredients.map((ing, index) => (
              <li key={index} className="flex items-center mt-1">
                <span className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-md mr-2">
                  {ing}
                </span>
                <button
                  onClick={() => handleDeleteIngredient(index)}
                  className="text-red-600 hover:text-red-800 text-xs"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
    
        {/* Instructions */}
        <div className="border border-gray-100 rounded-md p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <label className="block mb-2 text-sm font-medium text-gray-600">조리 과정</label>
          <div className="flex">
            <input
              type="text"
              placeholder="조리 과정을 입력하세요"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              className="flex-1 p-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              className="ml-2 bg-blue-600 text-white p-2 text-sm rounded-md hover:bg-purple-700 transition"
              onClick={handleAddInstruction}
            >
              추가
            </button>
          </div>
          <ul className="mt-2">
            {instructions.map((instr, index) => (
              <li key={index} className="flex items-center mt-1">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded-md mr-2">{instr}</span>
                <button
                  onClick={() => handleDeleteInstruction(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
    
        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
            onClick={handleSaveRecipe}
          >
            레시피 저장
          </button>
          <button
            className="px-3 py-1.5 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition"
            onClick={onCancel}
          >
            취소
          </button>
        </div>
      </div>
    );
};

export default AddRecipe;
