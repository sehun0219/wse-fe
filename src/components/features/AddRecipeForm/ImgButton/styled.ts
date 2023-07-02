import styled from "styled-components";

export const UploadContainer = styled.div`
  width: 270px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 4px;
  position: relative;
  border: 1px solid #23272f;
  border-radius: 4px;
`;
export const UploadText = styled.div`
  color: black;
  font-size: 20px;
  text-align: center;
  width: 100%;
  position: absolute;
`;
export const FileInput = styled.input`
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
