import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Generates a URL-friendly slug from a string
 * @param {string} str - The string to convert to a slug
 * @returns {string} - The generated slug
 */
export function generateSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, '-')
}
