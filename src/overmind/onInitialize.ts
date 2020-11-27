import { OnInitialize } from "overmind";
import { tree } from "./tree";

export const onInitialize: OnInitialize = async ({
  state,
  actions,
  effects,
}) => {
  await actions.oada
    .connect({
      token: "abc",
      domain: "https://cloudradio40.ecn.purdue.edu",
    })
    .then((response) => {
      console.log(response);
      if (!response.error) {
        state.connection = response.connectionId;
      }
      return response;
    });
  const requests = [
    {
      path: "/bookmarks/agrinovus",
      tree,
      watch: {
        actions: [],
      },
    },
  ];
  await actions.oada.get({ requests, connection_id: state.connection });
  state.loaded = true;
  //console.log(state.oada.localhost.bookmarks.agrinovus["field-index"].Field1);
};
