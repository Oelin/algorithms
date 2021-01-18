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
    new = node(value)

    if (this.empty()) {
      new.next = new
    } else {
      new.next = this.head()
      this.last.next = new
    }

    this.last = new
    this.length++
  }

  this.prepend = function(value) {
    new = node(value)
    new.next = this.head()
    this.last.next = new

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
