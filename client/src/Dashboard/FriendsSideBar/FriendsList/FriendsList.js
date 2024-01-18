import React from 'react'
import {styled} from '@mui/system'

const DUMMY_FRIENDS = [
    {
      id: 1,
      username: "Mark",
      isOnline: true,
    },
    {
      id: 2,
      username: "Anna",
      isOnline: false,
    },
    {
      id: 3,
      username: "John",
      isOnline: false,
    },
  ];

const MainContainer = styled("div")({
    flexGrow: 1,
    width: "100%",
  });

const FriendsList = () => {
  return (
    <MainContainer></MainContainer>
  )
}

export default FriendsList
