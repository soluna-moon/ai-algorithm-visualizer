export function bubbleSort(array) {

const arr = [...array]
const steps = []

for (let i = 0; i < arr.length; i++) {

for (let j = 0; j < arr.length - i - 1; j++) {

  steps.push({
    array: [...arr],
    active: [j, j + 1]
  })

  if (arr[j] > arr[j + 1]) {

    let temp = arr[j]
    arr[j] = arr[j + 1]
    arr[j + 1] = temp

    steps.push({
      array: [...arr],
      active: [j, j + 1]
    })

  }

}

}

return steps
}