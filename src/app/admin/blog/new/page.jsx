"use client";

import { useState } from "react";
import PageHeader from "@/components/blog/new/PageHeader";
import { Notification } from "@/components/ui/notification";
import BlogPostForm from "@/components/blog/new/BlogPostForm";

export default function NewBlogPostPage() {
  const [notification, setNotification] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <PageHeader />
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <BlogPostForm
        notification={notification}
        setNotification={setNotification}
      />
    </div>
  );
}
