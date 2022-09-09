var builderStructureData = [
  {
    operator: 1,
    values: [
      {
        type: "LookupValue",
        value: {},
      },
      {
        type: "IntValue",
        value: {
          value: 2341,
          columnId: "3a094b0a-09d2-4b62-941f-a32fb10b9e2e",
          name: "Episode of Care Id",
          description: "2341",
          operator: 16,
        },
      },
      {
        type: "LookupValue",
        value: [],
      },
      {
        type: "IntValue",
        value: {
          value: 15,
          columnId: "ff8c5ee3-3e25-46cf-945d-5701cdc3f72e",
          name: "Age (At Date of Referral)",
          description: "15",
          operator: 4,
        },
      },
      {
        type: "group",
        value: {
          operator: 1,
          values: [
            {
              type: "IntValue",
              value: {
                value: 10,
                columnId: "d9124cd7-292f-448d-8995-1e9527a99e58",
                name: "Weeks (First Referred To Completed)",
                description: "10",
                operator: 8,
              },
            },
          ],
        },
      },
    ],
  },
];

// var builderStructureData = [
//   {
//     operator: 1,
//     values: []
//   },
// ];


export default builderStructureData;
