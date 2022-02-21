import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  height: 32px;
  padding: 0 20px;
  margin-right: 12px;
  border-radius: 16px;
  background-color: ${({ theme, selected }) =>
    selected === true
      ? theme.colors.selected_item
      : theme.colors.unselected_item};
  justify-content: center;
`;

export const CategoryText = styled.Text<ButtonProps>`
  font-size: ${RFValue(12)}px;
  color: ${({ theme, selected }) =>
    selected === true ? theme.colors.background : theme.colors.texts};
  font-family: ${({ theme }) => theme.fonts.poppinsSemiBold};
`;
