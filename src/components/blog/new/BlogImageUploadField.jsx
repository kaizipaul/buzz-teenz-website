import ImageUploadField from "@/components/blog/ImageUploadField";

export default function BlogImageUploadField({
  imageUrl,
  uploading,
  error,
  onChange,
  onReset,
}) {
  return (
    <div>
      <label className="block font-medium mb-1">Cover Image</label>
      <span className="block text-sm text-muted-foreground mb-2">
        Upload a cover image for your blog post
      </span>
      <ImageUploadField
        onChange={onChange}
        imageUrl={imageUrl}
        uploading={uploading}
        error={error}
        onReset={onReset}
      />
    </div>
  );
}
