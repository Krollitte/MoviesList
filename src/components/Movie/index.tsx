import React from "react";
import { TouchableOpacityProps } from "react-native";
import MoviePosterImage from "../../assets/MoviePost.png";
import { MovieDTO } from "../../dtos/MovieDTO";

import {
  Container,
  MoviePosterContainer,
  MoviePoster,
  MovieInfoContainer,
  MovieInfoWrapper,
  MovieInfoLabel,
  MovieInfoText,
} from "./styles";

interface Props extends TouchableOpacityProps {
  data: MovieDTO;
}
export function Movie({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <MoviePosterContainer>
        <MoviePoster
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
          }}
        />
      </MoviePosterContainer>
      <MovieInfoContainer>
        <MovieInfoWrapper>
          <MovieInfoLabel>Title:</MovieInfoLabel>
          <MovieInfoText>{data.title}</MovieInfoText>
        </MovieInfoWrapper>
        <MovieInfoWrapper>
          <MovieInfoLabel>Release Date:</MovieInfoLabel>
          <MovieInfoText>{data.release_date}</MovieInfoText>
        </MovieInfoWrapper>
        <MovieInfoWrapper>
          <MovieInfoLabel>Average Rating:</MovieInfoLabel>
          <MovieInfoText>{data.vote_average}</MovieInfoText>
        </MovieInfoWrapper>
      </MovieInfoContainer>
    </Container>
  );
}
