export function quickSort(array) {

    const arr = [...array]
    const steps = []

    function sort(start, end) {

        if (start >= end) return

        const pivot = arr[end]
        let i = start

        for (let j = start; j < end; j++) {

            steps.push({
                array: [...arr],
                active: [j, end]
            })

            if (arr[j] < pivot) {

                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp

                steps.push({
                    array: [...arr],
                    active: [i, j]
                })

                i++

            }

        }

        let temp = arr[i]
        arr[i] = arr[end]
        arr[end] = temp

        steps.push({
            array: [...arr],
            active: [i, end]
        })

        sort(start, i - 1)
        sort(i + 1, end)

    }

    sort(0, arr.length - 1)

    return steps
}