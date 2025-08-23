import React from "react";
import { Box, Stack, Container } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";

/** REDUX **/
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

/** MANTIQLAR **/
import { retriveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR **/
const topUsersRetriver = createSelector(retriveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriver);
  return (
    <div className="homepage">
      <div className="active-users-frame">
        <Container>
          <Stack className="main">
            <Box className="category-title">Active User</Box>
            <Stack className="cards-frame">
              <CssVarsProvider>
                {topUsers.length !== 0 ? (
                  topUsers.map((member: Member) => {
                    const imagePath = `${serverApi}/${member.memberImage}`;
                    return (
                      <Card
                        key={member._id}
                        variant="outlined"
                        className="user-card"
                      >
                        <CardOverflow>
                          <img
                            className="user-image"
                            src={imagePath}
                            alt={member.memberNick}
                          />
                        </CardOverflow>
                        <CardContent className="user-card-desc">
                          <Typography level="body-md">
                            {member.memberNick}
                          </Typography>
                        </CardContent>
                      </Card>
                    );
                  })
                ) : (
                  <Box className="no-data">No Active Users!</Box>
                )}
              </CssVarsProvider>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
