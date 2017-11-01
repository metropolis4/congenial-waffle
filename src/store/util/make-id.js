function* idFactory () {
  let id = 0;
  while (true) {
    id++;
    yield(id);
  };
}

const makeId = idFactory();

export default makeId;
