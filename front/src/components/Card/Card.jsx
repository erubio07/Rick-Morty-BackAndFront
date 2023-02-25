import styled from "styled-components";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import { connect, useDispatch, useSelector } from "react-redux";

const Img = styled.img`
  border-radius: 50%;
  box-shadow: 2px -6px 10px #fff;
`;

const Title = styled.h1`
  color: beige;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const Text = styled.h2`
  color: #efe;
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
color: white;
border 1px solid white;
border-radius: 5px
`;

export function Card(props) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    console.log(props);
    let charac = {
      name: props.name,
      gender: props.gender,
      species: props.species,
      id: props.id,
      image: props.image,
    };
    console.log(charac);
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(props.id));
      // props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      // props.addFavorite(props);
      dispatch(addFavorite(charac));
    }
  }

  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <Button1 onClick={() => props.onClose(props.id)}>X</Button1>
      </div>
      <Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
        <Title>{props.name}</Title>
      </Link>
      <Img src={props.image} alt="img not found" />
      <div className={styles.textContainer}>
        <Text>{props.species}</Text>
        <Text>{props.gender}</Text>
      </div>
    </div>
  );
}

// export function mapDispatchToProps(dispatch) {
//   return {
//     addFavorite: function (fav) {
//       dispatch(addFavorite(fav));
//     },

//     deleteFavorite: function (id) {
//       dispatch(deleteFavorite(id));
//     },
//   };
// }

// export function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
export default Card;