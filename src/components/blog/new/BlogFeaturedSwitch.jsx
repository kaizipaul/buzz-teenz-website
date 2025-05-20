import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

export default function BlogFeaturedSwitch({ form }) {
  return (
    <FormField
      control={form.control}
      name="isFeatured"
      render={({ field }) => (
        <FormItem className="flex items-center gap-2">
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormLabel>Featured Post</FormLabel>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
