window.addEventListener('DOMContentLoaded', (event) => {
  class Queue {
    /**
     * Again, our queue is using a JavaScript array as a list rather than memory.
     */

    constructor() {
      this.list = [];
      this.length = 0;
    }

    /**
     * Similar to stacks we're going to define two functions for adding and
     * removing items from the queue. The first is "enqueue".
     *
     * This will push values to the end of the list.
     */

    enqueue(value) {
      this.length++;
      this.list.push(value);
    }

    /**
     * Next is "dequeue", instead of removing the item from the end of the list,
     * we're going to remove it from the start.
     */

    dequeue() {
      // Don't do anything if we don't have any items.
      if (this.length === 0) return;

      // Shift the first item off the start of the list and return the value.
      this.length--;
      return this.list.shift();
    }

    /**
     * Same as stacks we're going to define a "peek" function for getting the next
     * value without removing it from the queue.
     */

    peek() {
      return this.list[0];
    }
  }

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        let r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }

  let alertQueue = new Queue();

  const templateAlert1 = (id) => ` <div
    id="vtmn-alert-${id}"
    class="vtmn-alert vtmn-alert_variant--danger"
    aria-labelledby="alert-title-${id}"
  >
    <div class="vtmn-alert_content">
      <div id="alert-title-${id}" class="vtmn-alert_content-title">
        This is the title of the alert
      </div>
    </div>
  </div>`;

  const templateAlert2 = (id) => ` <div
    id="vtmn-alert-${id}"
    class="vtmn-alert vtmn-alert_variant--success"
    aria-labelledby="alert-title-${id}"
  >
    <div class="vtmn-alert_content">
      <div id="alert-title-${id}" class="vtmn-alert_content-title">
        This is the title of the alert
        <button
          id="btn-close-alert-${id}"
          class="vtmn-btn vtmn-btn_variant--ghost-reversed vtmn-btn_size--small vtmn-btn--icon-alone"
        >
          <span class="vtmn-sr-only">Close alert</span>
          <span class="vtmx-close-line" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </div>`;

  const templateAlert3 = (id) => ` <div
    id="vtmn-alert-${id}"
    class="vtmn-alert vtmn-alert_variant--warning"
    aria-labelledby="alert-title-${id}"
    aria-describedby="alert-text-${id}"
  >
    <div class="vtmn-alert_content">
      <div id="alert-title-${id}" class="vtmn-alert_content-title">
        This is the title of the alert
      </div>
      <p id="alert-text-${id}" class="vtmn-alert_content-description">
        Alert are used to draw the users attention to an important information
      </p>
    </div>
  </div>`;

  const templateAlert4 = (id) => ` <div
    id="vtmn-alert-${id}"
    class="vtmn-alert vtmn-alert_variant--info"
    aria-labelledby="alert-title-${id}"
    aria-describedby="alert-text-${id}"
  >
    <div class="vtmn-alert_content">
      <div id="alert-title-${id}" class="vtmn-alert_content-title">
        This is the title of the alert
        <button
          id="btn-close-alert-${id}"
          class="vtmn-btn vtmn-btn_variant--ghost-reversed vtmn-btn_size--small vtmn-btn--icon-alone"
        >
          <span class="vtmn-sr-only">Close alert</span>
          <span class="vtmx-close-line" aria-hidden="true"></span>
        </button>
      </div>
      <p id="alert-text-${id}" class="vtmn-alert_content-description">
        Alert are used to draw the users attention to an important information
      </p>
    </div>
  </div>`;

  function instanciateAlert(id) {
    let uid = uuidv4();
    switch (id) {
      case 1:
        document.body.lastChild.innerHTML = templateAlert1(uid);
        break;
      case 2:
        document.body.lastChild.innerHTML = templateAlert2(uid);
        break;
      case 3:
        document.body.lastChild.innerHTML = templateAlert3(uid);
        break;
      case 4:
        document.body.lastChild.innerHTML = templateAlert4(uid);
        break;
      default:
        document.body.lastChild.remove();
    }

    if (document.getElementById(`btn-close-alert-${uid}`)) {
      document
        .getElementById(`btn-close-alert-${uid}`)
        .addEventListener('click', function () {
          document.getElementById(`vtmn-alert-${uid}`).parentElement.remove();
        });
    }

    document.getElementById(`vtmn-alert-${uid}`).style.display = 'none';
    alertQueue.enqueue(document.getElementById(`vtmn-alert-${uid}`));
  }

  function createAlert(type) {
    //Create the block div container
    let newDiv = document.createElement('div');
    newDiv.classList.add('block');
    newDiv.setAttribute('role', 'alert');
    newDiv.setAttribute('aria-live', 'assertive');
    document.body.appendChild(newDiv);
    instanciateAlert(type);
  }

  let timeOut;
  let intervalTimer = setInterval(function addShowClass() {
    if (alertQueue.length > 0) {
      clearInterval(intervalTimer);
      let currentAlert = alertQueue.dequeue();
      currentAlert.style.display = 'flex';
      currentAlert.classList.add('show');
      timeOut = setTimeout(function removeShowClass() {
        currentAlert.parentElement.remove();
        intervalTimer = setInterval(addShowClass, 1000);
      }, 8000);
    } else {
    }
  }, 1000);

  document.getElementById('btn-alert-1').addEventListener('click', function () {
    createAlert(1);
  });

  document.getElementById('btn-alert-2').addEventListener('click', function () {
    createAlert(2);
  });

  document.getElementById('btn-alert-3').addEventListener('click', function () {
    createAlert(3);
  });

  document.getElementById('btn-alert-4').addEventListener('click', function () {
    createAlert(4);
  });
});
