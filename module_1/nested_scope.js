
const answerToTheUniverse = 42;

function first() {
  // LOCAL SCOPE
  const beer = "Corona"
  console.log('first', answerToTheUniverse);

  function second() {
    console.log('second');

    function third() {
      console.log('third', beer);

      function fourth() {
        console.log('fourth', answerToTheUniverse);
      }
      fourth();
    }
    third()
  }
  second()
}
first();
console.log(beer); // won't be accesible on the outer scope