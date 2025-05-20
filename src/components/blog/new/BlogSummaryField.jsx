import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function BlogSummaryField({ form }) {
  return (
    <FormField
      control={form.control}
      name="summary"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Summary</FormLabel>
          <FormControl>
            <Textarea {...field} rows={3} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
