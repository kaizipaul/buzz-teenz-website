import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function BlogAuthorsField({ form }) {
  return (
    <FormField
      control={form.control}
      name="authors"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Authors</FormLabel>
          <FormDescription>
            Separate multiple authors with commas
          </FormDescription>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
