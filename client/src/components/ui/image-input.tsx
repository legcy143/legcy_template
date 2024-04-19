import React, { useState, InputHTMLAttributes } from 'react';
import { LuImagePlus } from 'react-icons/lu';
import { Label } from './label';
import { cn } from '@/lib/utils';

interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  PreviewClassName?:string
  imagePreviewUrl?:string
}

export default function ImageInput({
  onChange,
  label = 'image',
  PreviewClassName,
  imagePreviewUrl="",
  ...props
}: ImageInputProps) {
  const [imagePreview, setImagePreview] = useState<string>(imagePreviewUrl);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
          setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    if (onChange) {
      onChange(e);
    }
  };

  


  return (
    <div className="">
      {label && (
        <Label>
          {label} <span className="text-red-500">*</span>
        </Label>
      )}
      <label
        htmlFor={label}
        className={cn(`w-full p-1 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-center text-sm cursor-pointer aspect-video`,PreviewClassName)}>
        {imagePreview ? (
          <img src={imagePreview} alt={label} style={{
            objectFit:"contain", maxWidth: '100%', maxHeight: '100%', borderRadius: 6 }} />
        ) : (
          <>
            <LuImagePlus className="h-6 w-6 m-auto" /> upload {label.toLowerCase()}
          </>
        )}
      </label>
      <input id={label} type="file" className="hidden" onChange={handleImageChange} {...props} />
    </div>
  );
}
