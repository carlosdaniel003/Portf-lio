// src/app/twitter-image.tsx
import { createSocialImage } from "@/lib/socialImage";

export const alt =
  "Carlos Daniel — Software, inteligência artificial e automação industrial";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage();
}