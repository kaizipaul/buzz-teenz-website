import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function BlogBodyField({ form }) {
  return (
    <FormField
      control={form.control}
      name="body"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Body</FormLabel>
          <FormControl>
            <Textarea {...field} rows={10} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
