import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

/**
 * Custom hook for handling image uploads to Supabase storage
 * @param {string} bucketName - The name of the Supabase storage bucket
 * @param {string} folder - The folder path within the bucket
 * @returns {Object} - Functions and state for handling image uploads
 */
export function useImageUpload(bucketName, folder = '') {
  const [uploading, setUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)
  const [error, setError] = useState(null)

  const uploadImage = async (file) => {
    try {
      setUploading(true)
      setError(null)

      if (!file) {
        throw new Error('Please select an image file.')
      }

      // Create unique file path
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`
      const filePath = folder ? `${folder}/${fileName}` : fileName

      // Upload file to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath)

      setImageUrl(publicUrl)
      return publicUrl
    } catch (error) {
      console.error('Error uploading image:', error)
      setError(error.message || 'Error uploading image')
      throw error
    } finally {
      setUploading(false)
    }
  }

  const resetImage = () => {
    setImageUrl(null)
    setError(null)
  }

  return {
    uploadImage,
    resetImage,
    uploading,
    imageUrl,
    error
  }
} 