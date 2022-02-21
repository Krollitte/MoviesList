import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  margin-bottom: ${RFValue(18)}px;
`;

export const MoviePosterContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const MoviePoster = styled.Image`
  border-radius: 16px;
  width: 95px;
  height: 120px;
`;

export const MovieInfoContainer = styled.View`
  margin-left: ${RFValue(22)}px;
  justify-content: space-evenly;
`;

export const MovieInfoWrapper = styled.View`
  width: 100%;

  align-items: flex-start;
  justify-content: center;
`;

export const MovieInfoLabel = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: 15px;
  font-family: ${({ theme }) => theme.fonts.poppinsMedium};
  color: ${({ theme }) => theme.colors.texts};
`;

export const MovieInfoText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.poppinsRegular};
  color: ${({ theme }) => theme.colors.texts};
`;
