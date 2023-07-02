import { Container, Title, Form, Input, Button, Body } from "./styled";

const MyRecipeList = () => {
  return (
    <Container>
      <head>
        <title>WSE</title>
      </head>
      <Body>
        <Title>EDIT</Title>
        <p>Welcome here you will see the Recipe List you uploaded</p>
        <Form method="POST">
          <Input
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={""}
            required
          />
          <Button type="submit" value="save"></Button>
        </Form>
      </Body>
    </Container>
  );
};

export default MyRecipeList;
