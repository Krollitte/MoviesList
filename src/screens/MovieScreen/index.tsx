import React from "react";
import { StatusBar } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CategoryButton } from "../../components/CategoryButton";
import { MovieDTO } from "../../dtos/MovieDTO";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  CoverImage,
  Content,
  PosterAndTitleContainer,
  PosterContainer,
  TitleContainer,
  Poster,
  Title,
  GenresList,
  AboutMovieContainer,
  InfoWrapper,
  InfoLabel,
  InfoText,
  InfoWrapperHorizontal,
  Footer,
  BackButton,
  BackButtonText,
} from "./styles";

interface Params {
  movie: MovieDTO;
}

export function Movie() {
  const route = useRoute();
  const navigation = useNavigation();
  const { movie } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <CoverImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
          }}
        />
        <PosterAndTitleContainer>
          <PosterContainer>
            <Poster
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              }}
            />
          </PosterContainer>
          <TitleContainer>
            <Title>{movie.title}</Title>
          </TitleContainer>
        </PosterAndTitleContainer>
      </Header>
      <Content>
        <GenresList>
          {movie.genres.map((genre) => {
            return (
              <CategoryButton
                functional={false}
                key={genre.id}
                name={genre.name}
              />
            );
          })}
        </GenresList>

        <AboutMovieContainer>
          <InfoWrapper>
            <InfoLabel>OverView</InfoLabel>
            <InfoText>{movie.overview}</InfoText>
          </InfoWrapper>
          <InfoWrapper>
            <InfoLabel>Release Date:</InfoLabel>
            <InfoText>{movie.release_date}</InfoText>
          </InfoWrapper>

          <InfoWrapper>
            <InfoWrapperHorizontal>
              <InfoWrapper>
                <InfoLabel>Average Rating:</InfoLabel>
                <InfoText>{movie.vote_average}</InfoText>
              </InfoWrapper>
              <InfoWrapper>
                <InfoLabel>Rate Count:</InfoLabel>
                <InfoText>{movie.vote_count}</InfoText>
              </InfoWrapper>
            </InfoWrapperHorizontal>
          </InfoWrapper>

          <InfoWrapper>
            <InfoLabel>Popularity:</InfoLabel>
            <InfoText>{movie.popularity}</InfoText>
          </InfoWrapper>
        </AboutMovieContainer>
        <Footer>
          <BackButton onPress={handleBack}>
            <AntDesign name="arrowleft" height={24} width={24} color="white" />
            <BackButtonText>Back</BackButtonText>
          </BackButton>
        </Footer>
      </Content>
    </Container>
  );
}
