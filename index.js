import a from './tasks/task1.js';
import b from './tasks/task2.js';
import c from './tasks/task3.js';

document.querySelectorAll('button').forEach((btn, inx) =>
  btn.addEventListener('click', () => {
    console.clear();
    switch (inx) {
      case 0:
        a();
        break;
      case 1:
        b();
        break;
      case 2:
        c();
        break;
      default:
        break;
    }
  }),
);
