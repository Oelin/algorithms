function node(value, next) {
  return {
    value,
    next
  }
}


function circle() {
  this.last = null
  this.length = 0

  this.empty = function() {
    return this.length == 0
  }

  this.head = function() {
    return this.last.next
  }

  this.append = function(value) {
    n = node(value)

    if (this.empty()) {
      n.next = n
    } else {
      n.next = this.head()
      this.last.next = n
    }

    this.last = n
    this.length++
  }

  this.prepend = function(value) {
    n = node(value)
    n.next = this.head()
    this.last.next = n

    this.length++
  }

  this.access = function(value) {
    let i = 0
    let previous = this.last

    while (i++ < this.length) {
      if (previous.next.value == value) {
        return previous
      }

      previous = previous.next
    }

    throw `${value} not in list`
  }

  this.find = function(value) {
    return this.access(value).next
  }

  this.delete = function(value) {
    if (this.empty()) {
      throw 'list is empty'
    }

    let previous = this.access(value)

    if (previous.next == this.last) {
      this.last = previous
    }

    previous.next = previous.next.next
    this.length--
  }
}


function circle2List(circle) {
  let list = []
  let current = circle.head()
  
  for (let i=0; i < circle.length; i++) {
    list.push(current.value)
    current = current.next
  }
}
