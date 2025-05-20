import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function ImageUploadField({
  onChange,
  imageUrl,
  uploading,
  error,
  onReset,
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              onChange(file);
            }
          }}
          disabled={uploading}
        />
        {imageUrl && (
          <Button
            variant="destructive"
            size="icon"
            onClick={onReset}
            type="button"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      {imageUrl && (
        <div className="mt-2">
          <img
            src={imageUrl}
            alt="Preview"
            className="max-w-[200px] rounded-md"
          />
        </div>
      )}

      {uploading && (
        <div className="text-sm text-muted-foreground">Uploading...</div>
      )}

      {error && <div className="text-sm text-destructive">{error}</div>}
    </div>
  );
}
