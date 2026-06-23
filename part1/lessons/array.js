const t = [1, -1, 3]

t.push(5)


t.forEach( value => {
    console.log(value)
})

const m1 = [1, 2, 3]

const m2 = m1.map( value => '<li>' + value + '</li>')
console.log(m2)