import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { useTheme } from "styled-components";

import { CategoryButton } from "../../components/CategoryButton";
import { Movie } from "../../components/Movie";
import { MovieDTO } from "../../dtos/MovieDTO";

import {
  Container,
  Header,
  Title,
  Content,
  ContentTitle,
  CategoriesList,
  MovieList,
} from "./styles";

export interface DataListProps extends MovieDTO {
  id: string;
}
export function Home() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState();
  const {
    get_recommended_movies_data,
    get_popular_movies_data,
    get_trending_movies_data,
  } = bindActionCreators(actionCreators, dispatch);

  const SelectedButton = useSelector(
    (state: State) => state.buttonSelection.selected
  );

  const recommendedIds = useSelector(
    (state: State) => state.movies.recommended_movies_ids
  );
  const popularIds = useSelector(
    (state: State) => state.movies.popular_movies_ids
  );
  const trendingsId = useSelector(
    (state: State) => state.movies.trendings_movies_ids
  );

  const recommendedMovies = useSelector(
    (state: State) => state.movies.recommended_movies_array
  );
  const popularMovies = useSelector(
    (state: State) => state.movies.popular_movies_array
  );
  const trendingMovies = useSelector(
    (state: State) => state.movies.trendings_movies_array
  );

  function handleNavigateMovieScreen(movie: MovieDTO) {
    navigation.navigate("Movie", { movie: movie });
  }

  useEffect(() => {
    switch (SelectedButton) {
      case "Recomendados": {
        setLoading(true);
        get_recommended_movies_data(recommendedIds);
        setLoading(false);
      }
      case "Popular": {
        setLoading(true);
        get_popular_movies_data(popularIds);
        setLoading(false);
      }
      case "Mais Assistidos": {
        setLoading(true);
        get_trending_movies_data(trendingsId);
        setLoading(false);
      }
    }
  }, [SelectedButton]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <Title>Movie List</Title>
      </Header>
      <Content>
        <ContentTitle>Categorias</ContentTitle>
        <CategoriesList>
          <CategoryButton functional name={"Popular"} />
          <CategoryButton functional name={"Recomendados"} />
          <CategoryButton functional name={"Mais Assistidos"} />
        </CategoriesList>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={theme.colors.button_background}
          />
        ) : (
          <MovieList
            keyExtractor={(key) => String(key.id)}
            data={
              SelectedButton === "Popular"
                ? popularMovies
                : SelectedButton === "Recomendados"
                ? recommendedMovies
                : SelectedButton === "Mais Assistidos" && trendingMovies
            }
            renderItem={({ item }) => {
              return (
                <Movie
                  onPress={() => handleNavigateMovieScreen(item)}
                  data={item}
                />
              );
            }}
          />
        )}
      </Content>
    </Container>
  );
}
