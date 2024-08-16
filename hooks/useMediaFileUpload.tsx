import { RefObject, useState } from "react";

export default function UseMediaFileUpload(
  ref: RefObject<HTMLInputElement>,
): [string, string, () => void] {
  const [imageFile, setImgFile] = useState("");
  const [videoFile, setVideoFile] = useState("");

  const changeMediaFile = () => {
    const file = ref.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      const fileType = file.type.split("/")[0];

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (fileType === "image") {
          setImgFile(reader.result as string);
          setVideoFile("");
        }
        if (fileType === "video") {
          setVideoFile(reader.result as string);
          setImgFile("");
        }
      };
    }
  };

  return [imageFile, videoFile, changeMediaFile];
}
