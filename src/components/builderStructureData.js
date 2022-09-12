var builderStructureData = [
  {
    operator: 1,
    values: [
      {
        type: "DateTimeValue",
        value: {
          columnId: "05b1087f-c51a-4dac-9e4d-afaf4c602974",
          name: "Date of Birth",
        },
      },
      {
        type: "LookupValue",
        value: {
          columnId: "d0e396d6-94f2-479f-8c1a-701943472cc1",
          name: "Ethnic Group",
        },
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
        value: {
          columnId: "b88baf4d-7091-49f4-be0d-db9fcdd640ce",
          name: "Language",
        },
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
            {
              type: "LookupValue",
              value: {
                columnId: "038b1e11-cf9b-4683-a0a3-5e5a92c95d0b",
                name: "Completion Reason (Episode of Care)",
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
//     values: [
//       {
//         type: "IntValue",
//         value: [],
//       },
//     ],
//   },
// ];

export default builderStructureData;
