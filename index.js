import Counter from "./counter";

document.addEventListener("DOMContentLoaded", () => {
  (() => {
    const $count = document.getElementById("count");
    const $increase = document.getElementById('increase')
    const $decrease = document.getElementById('decrease')
    const $address = document.getElementById('address')
    const $status = document.getElementById('status')

    const counter = Counter();

    const handleGetCount = (err, count) => {
      if (err) {
        return alert(err);
      }

      $count.innerHTML = count;
    };
    
    const handleIncrease = (e) => {
      e.preventDefault()

      counter.increase($address.value)
      counter.getCount(handleGetCount);
    }

    const handleDecrease = (e) => {
      e.preventDefault()
      
      counter.decrease($address.value)
      counter.getCount(handleGetCount);
    }

    $increase.addEventListener('click', handleIncrease)
    $decrease.addEventListener('click', handleDecrease)
    $address.addEventListener('keyup', (e) => {
      $status.innerHTML = 'Changing Address ...'
      counter.getCount(handleGetCount);
      $status.innerHTML = 'Update count'
    })
    counter.getCount(handleGetCount);
  })();
});
