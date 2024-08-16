// components/SuggestionForm.js
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

const SuggestionForm = ({ categoryId, categories }) => {
  const router = useRouter();
  const [suggestion, setSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionError, setSuggestionError] = useState(null);
  const [suggestionLoading, setSuggestionLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  const handleSuggestionChange = (e) => {
    setSuggestion(e.target.value);
  };

  const handleAddSuggestion = () => {
    if (suggestions.length < 3 && suggestion.trim() !== "") {
      setSuggestions([...suggestions, suggestion]);
      setSuggestion("");
    } else if (suggestions.length >= 3) {
      setSuggestionError("You can only add up to 3 suggestions.");
    }
  };

  console.log(suggestion);

  const handleSuggestionSubmit = async () => {
    setSuggestionLoading(true);
    setSubmissionError(null);
    setSubmissionSuccess(null);

    try {
      const { error } = await supabase.from("suggestions").insert(
        suggestions.map((suggestion) => ({
          category_id: categoryId,
          name: suggestion,
        }))
      );

      if (error) {
        throw error;
      }

      setSubmissionSuccess("Suggestions submitted successfully.");
      setSuggestions([]);

      const nextCategoryIndex =
        categories.findIndex((cat) => cat.id === parseInt(categoryId)) + 1;
      if (nextCategoryIndex < categories.length) {
        router.push(`/vote/${categories[nextCategoryIndex].id}`);
      } else {
        router.push("/thank-you");
      }
    } catch (error) {
      setSubmissionError(error.message);
    } finally {
      setSuggestionLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 relative h-full">
      <h2>Suggest Your Nominees (max. 3)</h2>

      <div className="flex space-x-2">
        <Input
          type="text"
          value={suggestion}
          onChange={handleSuggestionChange}
          placeholder="e.g Diamond Platnumz"
          className="bg-slate-300"
        />
        <Button
          className="bg-[#AB0758]"
          onClick={handleAddSuggestion}
          disabled={suggestions.length >= 3}
        >
          Add
        </Button>
      </div>
      <ul className="flex flex-col gap-2">
        {suggestions.map((suggestion, index) => (
          <li className="bg-[#221F2D] p-2 rounded-md text-white w-fit" key={index}>{suggestion}</li>
        ))}
      </ul>
      {suggestionLoading && <p>Submitting your suggestions...</p>}
      {submissionError && <p style={{ color: "red" }}>{submissionError}</p>}
      {submissionSuccess && (
        <p style={{ color: "green" }}>{submissionSuccess}</p>
      )}
      <div className="flex justify-end absolute bottom-0 right-0">
        <Button
          className="bg-[#AB0758]"
          onClick={handleSuggestionSubmit}
          disabled={suggestionLoading || suggestions.length === 0}
        >
          Next Category
        </Button>
      </div>
    </div>
  );
};

export default SuggestionForm;

// TODOS
// 1. Add toast for states ie submitting, errors, etc
// 2. Add loaders and spinners to loading states
// 3. Add progress tracker as the form moves forward
