const app = {
    init: function() {
      const form = document.querySelector('form')
      form.addEventListener('submit', (ev) => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
    },
    arr: new Array(),
    renderProperty: function(name, value) {
      const el = document.createElement('span')
      el.classList.add(name)
      el.textContent = value
      el.setAttribute('title', value)
      return el
    },
  
    renderItem: function(spell) {
      // ['name', 'level']
      const properties = Object.keys(spell)
  
      // collect an array of <span> elements
      const childElements = properties.map((prop) => {
        return this.renderProperty(prop, spell[prop])
      })
      const item = document.createElement('li')
      item.classList.add('spell')
      
      // append each <span> to the <li>
      childElements.forEach(function(el) {
        item.appendChild(el)
      })
      const deleteButton = document.createElement('button');
      deleteButton.className='delete';
      deleteButton.textContent='X';
      item.appendChild(deleteButton);
      
      return item
    },
  
    handleSubmit: function(ev) {
      const f = ev.target
  
      const spell = {
        name: f.spellName.value,
        level: f.level.value,
      }
  
      const item = this.renderItem(spell)
  
      const list = document.querySelector('#spells')
      list.appendChild(item)
      this.arr.push(item);
      //console.log(this.arr);
      f.reset()
    },
  }
  
  app.init()