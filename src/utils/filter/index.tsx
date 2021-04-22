const filter = (users: Array<{ name: string }>, query: string) => {
  console.log("Filter RENDER");

  return users.filter((item) => item.name.toLowerCase().includes(query));
};

export default filter;
