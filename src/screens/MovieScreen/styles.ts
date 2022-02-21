import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View``;

export const CoverImage = styled.Image`
  width: 100%;
  height: 210px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const PosterAndTitleContainer = styled.View`
  z-index: 1;
  padding: 0 30px;
  flex-direction: row;
  align-items: flex-end;
  margin-top: -${RFPercentage(9)}px;
`;

export const PosterContainer = styled.View``;

export const TitleContainer = styled.View`
  width: 80%;

  padding: 0 0 0 12px;
  justify-content: flex-end;
`;

export const Title = styled.Text.attrs({})`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.texts};
  font-family: ${({ theme }) => theme.fonts.poppinsSemiBold};
`;

export const Poster = styled.Image`
  width: ${RFValue(95)}px;
  height: ${RFValue(120)}px;
  border-radius: 16px;
`;

export const GenresList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
  },
})`
  margin-top: ${RFValue(18)}px;
`;

export const AboutMovieContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {},
})`
  margin-top: ${RFValue(30)}px;
  padding: 0 30px;
`;

export const InfoWrapper = styled.View`
  margin-bottom: 15px;
`;

export const InfoLabel = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: 15px;
  font-family: ${({ theme }) => theme.fonts.poppinsMedium};
  color: ${({ theme }) => theme.colors.texts};
`;

export const InfoText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  color: ${({ theme }) => theme.colors.texts};
`;

export const InfoWrapperHorizontal = styled.View`
  width: 80%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Footer = styled.View`
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  height: 42px;
  width: 105px;
  margin-left: 30px;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.input_background};
`;

export const BackButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.poppinsSemiBold};
  color: ${({ theme }) => theme.colors.texts};
`;
