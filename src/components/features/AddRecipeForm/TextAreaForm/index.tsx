import { Title, TextBox, Container } from "./styled";

interface TextAreaFormProps {
  title: string;
  placeholder?: string;
  value?: string;
  onChange?: (text: string) => void;
}

const TextAreaForm = ({
  title,
  placeholder = "",
  value = "",
  onChange = () => null,
}: TextAreaFormProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TextBox
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default TextAreaForm;
