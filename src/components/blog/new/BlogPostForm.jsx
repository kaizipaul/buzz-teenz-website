import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Form } from "@/components/ui/form";
import BlogTitleField from "./BlogTitleField";
import BlogAuthorsField from "./BlogAuthorsField";
import BlogFeaturedSwitch from "./BlogFeaturedSwitch";
import BlogSlugField from "./BlogSlugField";
import BlogSummaryField from "./BlogSummaryField";
import BlogBodyField from "./BlogBodyField";
import BlogImageUploadField from "./BlogImageUploadField";
import BlogSubmitButton from "./BlogSubmitButton";

import { generateSlug } from "@/lib/utils";
import { useImageUpload } from "@/lib/hooks/useImageUpload";
import { createBlogPost } from "@/lib/services/blogService";

const blogFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  authors: z.string().min(1, { message: "At least one author is required" }),
  isFeatured: z.boolean().default(false),
  summary: z.string().min(1, { message: "Summary is required" }),
  body: z.string().min(1, { message: "Blog body is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
});

export default function BlogPostForm({ notification, setNotification }) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(blogFormSchema),
    defaultValues: {
      title: "",
      authors: "",
      isFeatured: false,
      summary: "",
      body: "",
      slug: "",
    },
  });

  const [file, setFile] = useState(null);
  const {
    uploadImage,
    resetImage,
    uploading,
    imageUrl,
    error: uploadError,
  } = useImageUpload("blog-images", "articles");

  const handleTitleChange = (value) => {
    const generatedSlug = generateSlug(value);
    form.setValue("slug", generatedSlug);
  };

  const onSubmit = async (data) => {
    try {
      let imagePublicUrl = null;
      if (file) {
        imagePublicUrl = await uploadImage(file);
      }
      const { data: blogPost, error } = await createBlogPost({
        ...data,
        imageUrl: imagePublicUrl,
      });
      if (error) throw error;
      setNotification({
        type: "success",
        title: "Blog post created!",
        message: "Your blog post has been published successfully.",
      });
      setTimeout(() => {
        router.push("/admin/blog");
      }, 2000);
    } catch (error) {
      setNotification({
        type: "error",
        title: "Failed to create blog post",
        message: error.message || "An unexpected error occurred",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <BlogTitleField form={form} onTitleChange={handleTitleChange} />
        <BlogAuthorsField form={form} />
        <BlogFeaturedSwitch form={form} />
        <BlogSlugField form={form} />
        <BlogSummaryField form={form} />
        <BlogBodyField form={form} />
        <BlogImageUploadField
          imageUrl={imageUrl}
          uploading={uploading}
          error={uploadError}
          onChange={setFile}
          onReset={() => {
            resetImage();
            setFile(null);
          }}
        />
        <BlogSubmitButton uploading={uploading} />
      </form>
    </Form>
  );
}
