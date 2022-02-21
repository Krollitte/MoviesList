import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

import Icon from "../../assets/svgs/Icon.svg";

import { Container } from "./styles";

export function Splash() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    get_recommended_movies_ids,
    get_popular_movies_ids,
    get_trendings_movies_ids,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    get_recommended_movies_ids();
    get_popular_movies_ids();
    get_trendings_movies_ids();
  }, []);

  const recommendedId = useSelector(
    (state: State) => state.movies.recommended_movies_ids
  );

  const popularId = useSelector(
    (state: State) => state.movies.popular_movies_ids
  );
  const trendingId = useSelector(
    (state: State) => state.movies.trendings_movies_ids
  );

  useEffect(() => {
    navigation.navigate("Home");
  }, [recommendedId, popularId, trendingId]);
  return (
    <Container>
      <Icon />
    </Container>
  );
}
