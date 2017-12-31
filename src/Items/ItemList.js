import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import {List} from 'immutable'
import Items from './Items'


/**
import {ItemList} from 'react-cake'


const ListOfItems = props => (
  <ItemList minItems={0} maxItems={5}>
    {
      ({items, addItem, deleteItem, setItems, clearItems, includes}) => (
        <div className='navbar navbar--x-center'>
          <span className='type--m type--grey'>
            <strong>
              Number of items:
            </strong>
            <span className='m--l1 m--r2'>
              {items.size}
            </span>
          </span>

          <form onSubmit={e => {
            e.preventDefault()
            const field = document.getElementById('item1')
            addItem(field.value)
            field.value = ''
          }}>
            <input id='item1' type='text' placeholder='Add item'/>
          </form>

          {
            items.map(item => (
              <button
                key={item}
                className={`
                  btn
                  btn--s
                  ${includes(item) ? 'includes' : ''}
                  m--l1
                `}
                onClick={() => deleteItem(item)}
              >
                Delete '{item}'
              </button>
            ))
          }

          <button className='btn btn--s btn--red m--l2' onClick={clearItems}>
            Clear items
          </button>
        </div>
      )
    }
  </ItemList>
)
*/
export default function ({initialItems = List(), ...props}) {
  return React.createElement(Items, {initialItems, ...props})
}
