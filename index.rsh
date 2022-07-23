'reach 0.1';

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    getset: Fun([], Null),
  });


  const nBobs = API('Bob', {

  });

  init();

  Alice.only(() => {
    interact.getset();
  })
  Alice.publish()
  commit()
  exit()
});