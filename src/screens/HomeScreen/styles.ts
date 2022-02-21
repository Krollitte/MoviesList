import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";

import { DataListProps } from ".";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFValue(150)}px;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.texts};
  font-family: ${({ theme }) => theme.fonts.poppinsBold};
`;

export const Content = styled.View`
  padding: 0 30px;
  flex: 1;
`;

export const ContentTitle = styled.Text`
  margin-bottom: 11px;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.texts};
  font-family: ${({ theme }) => theme.fonts.poppinsSemiBold};
`;

export const CategoriesList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  bounce: false,
  contentContainerStyle: {},
})`
  width: 100%;
  height: 42px;
`;

export const MovieList = styled(
  FlatList as new (
    props: FlatListProps<DataListProps>
  ) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 130,
  },
})`
  width: 100%;
  margin-top: ${RFValue(30)}px;
`;

export const Movie = styled.View``;
