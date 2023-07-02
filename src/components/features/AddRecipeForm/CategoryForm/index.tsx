import { useState } from "react";
import {
  Title,
  CategoryContainer,
  Select,
  Options,
  CategoriesBox,
} from "./styled";

interface CategoryFormProps {
  title: string;
  onChange: (value: string[]) => void;
}

const CategoryForm = ({ title, onChange }: CategoryFormProps) => {
  const [selectedOptions, setSelectedOptions] = useState(["", "", ""]);

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newOptions = [...selectedOptions];
    newOptions[index] = event.target.value;
    setSelectedOptions(newOptions);
    onChange(newOptions);
  };

  return (
    <CategoryContainer>
      <Title>{title}</Title>
      <CategoriesBox>
        <Select id="cookingType1" onChange={(event) => handleChange(event, 0)}>
          <Options value="hidden">Types</Options>
          <Options value="Main dish">Main dish</Options>
          <Options value="Snack">Snack</Options>
          <Options value="Drink">Drink</Options>
        </Select>
      </CategoriesBox>
    </CategoryContainer>
  );
};

export default CategoryForm;
