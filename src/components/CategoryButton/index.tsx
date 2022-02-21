import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

import { Container, CategoryText } from "./styles";

interface Props {
  name: string;
  functional: boolean;
}

export function CategoryButton({ name, functional }: Props) {
  const dispatch = useDispatch();

  const { selectButton } = bindActionCreators(actionCreators, dispatch);

  const SelectedButton = useSelector(
    (state: State) => state.buttonSelection.selected
  );

  return (
    <Container
      selected={SelectedButton === name ? true : false}
      onPress={() => (functional == true ? selectButton(name) : () => {})}
    >
      <CategoryText selected={SelectedButton === name ? true : false}>
        {name}
      </CategoryText>
    </Container>
  );
}
