import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export function Notification({
  title,
  message,
  type = "info", // 'info', 'success', 'warning', 'error'
  duration = 5000,
  onClose,
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration === 0) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 w-80 rounded-md shadow-lg transition-all duration-300 transform",
        "p-4 border",
        {
          "bg-blue-50 border-blue-200": type === "info",
          "bg-green-50 border-green-200": type === "success",
          "bg-yellow-50 border-yellow-200": type === "warning",
          "bg-red-50 border-red-200": type === "error",
        }
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3
            className={cn("font-semibold text-sm", {
              "text-blue-800": type === "info",
              "text-green-800": type === "success",
              "text-yellow-800": type === "warning",
              "text-red-800": type === "error",
            })}
          >
            {title}
          </h3>
          {message && (
            <p
              className={cn("text-sm mt-1", {
                "text-blue-600": type === "info",
                "text-green-600": type === "success",
                "text-yellow-600": type === "warning",
                "text-red-600": type === "error",
              })}
            >
              {message}
            </p>
          )}
        </div>
        <button
          onClick={handleClose}
          className={cn("p-1 rounded-full", {
            "text-blue-400 hover:bg-blue-100": type === "info",
            "text-green-400 hover:bg-green-100": type === "success",
            "text-yellow-400 hover:bg-yellow-100": type === "warning",
            "text-red-400 hover:bg-red-100": type === "error",
          })}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
