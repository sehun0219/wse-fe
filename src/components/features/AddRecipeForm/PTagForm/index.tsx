import { Title, TextBox, Container } from "./styled";

interface PTagFormProps {
  title: string;
  placeholder?: string;
  value?: string;
  onChange?: (text: string) => void;
}

const PTagForm = ({
  title,
  placeholder = "",
  value = "",
  onChange = () => null,
}: PTagFormProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TextBox
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        type="text"
        placeholder={placeholder}
      />
    </Container>
  );
};

export default PTagForm;
