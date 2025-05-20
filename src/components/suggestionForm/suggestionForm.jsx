// components/SuggestionForm.js
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast"; // Add this import

const SuggestionForm = ({ categoryId, categories }) => {
  const router = useRouter();
  const [suggestion, setSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSuggestionChange = (e) => setSuggestion(e.target.value);

  const handleAddSuggestion = () => {
    if (suggestions.length < 3 && suggestion.trim()) {
      setSuggestions([...suggestions, suggestion.trim()]);
      setSuggestion("");
    } else if (suggestions.length >= 3) {
      toast.error("You can only add up to 3 suggestions.");
    }
  };

  const handleSuggestionSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("suggestions").insert(
        suggestions.map((suggestion) => ({
          category_id: categoryId,
          name: suggestion,
        }))
      );

      if (error) throw error;

      toast.success("Suggestions submitted successfully.");
      setSuggestions([]);

      const nextCategoryIndex = categories.findIndex((cat) => cat.id === parseInt(categoryId)) + 1;
      router.push(nextCategoryIndex < categories.length 
        ? `/vote/${categories[nextCategoryIndex].id}`
        : "/thank-you"
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
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
      <div className="flex justify-end absolute bottom-0 right-0">
        <Button
          className="bg-[#AB0758]"
          onClick={handleSuggestionSubmit}
          disabled={isSubmitting || suggestions.length === 0}
        >
          {isSubmitting ? "Submitting..." : "Next Category"}
        </Button>
      </div>
    </div>
  );
};

export default SuggestionForm;

