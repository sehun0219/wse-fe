import { ChangeEvent, useRef } from "react";
import { UploadContainer, ImagePreview, FileInput, UploadText } from "./styled";

interface ImgButtonProps {
  onImageUpload: (file: File) => void;
  imgUrl?: string;
}

const ImgButton = ({ onImageUpload, imgUrl = "" }: ImgButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && onImageUpload) {
      onImageUpload(file);
    }
  };

  const handleImageClick = () => {
    if (imgUrl && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <UploadContainer>
      {!imgUrl && <UploadText>+ Add Picture</UploadText>}
      <FileInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        id="upLoadButton"
      />
      {imgUrl && (
        <ImagePreview src={imgUrl} alt="Uploaded" onClick={handleImageClick} />
      )}
    </UploadContainer>
  );
};

export default ImgButton;
