export const fetchMembers = () =>
  fetch(
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  ).then((response) => response.json());
