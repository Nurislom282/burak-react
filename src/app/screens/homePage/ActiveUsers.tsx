import React from "react";
import { Box, Stack, Container } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography, AspectRatio } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from "@mui/joy/CardContent";

/** REDUX **/
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

/** MANTIQLAR **/
import { retriveTopUsers } from "./selector";
import { Member } from "../../../lib/types/member";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR **/
const topUsersRetriver = createSelector(retriveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriver);
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {Array.isArray(topUsers) && topUsers.length > 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`;
                  return (
                    <Card key={member._id} className="card">
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <Typography className={"member-nickname"}>
                        {member.memberNick}
                      </Typography>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users Yet!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
