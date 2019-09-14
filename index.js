// based on example found at https://medium.com/javascript-in-plain-english/javascript-async-await-and-promises-explained-like-youre-five-years-old-61733751e9a5

async function boilPot() {
  console.log('Start boiling pot');

  return new Promise(resolve => setTimeout(() => {
    console.log('Done boiling pot!');
    resolve();
  }, 5000));
}

function chopCarrots() {
  console.log('Start chopping carrots');

  let k = 0;
  for (let i=0; i<10000; i++) {
    for (let j=0; j<10000; j++) {
      k = Math.pow(k, i*j) / k;
    }
  }
  console.log('End chopping carrots');
}

function chopOnions() {
  console.log('Start chopping onions');

  let k = 0;
  for (let i=0; i<10000; i++) {
    for (let j=0; j<10000; j++) {
      k = Math.pow(k, i*j) / k;
    }
  }
  console.log('End chopping onions');
}

function addCarrots() {
  console.log('Add carrots to the pot');
}

function addOnions() {
  console.log('Add onions to the pot');
}

async function letPotKeepBoiling(time) {
  console.log('Start/Continue cooking vegetable');
  return new Promise(resolve => setTimeout(() => {
    console.log('Vegetable cooked for %s ms', time * 100);
    resolve();
  }, time * 100));
}

async function makeSoupe() {
  console.log('start the soup');

  const pot = boilPot();
  chopCarrots();
  chopOnions();
  await pot;
  addCarrots();
  await letPotKeepBoiling(5);
  addOnions();
  await letPotKeepBoiling(10)

  console.log('end the soup');
}

makeSoupe();
