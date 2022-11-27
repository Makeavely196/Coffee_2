import React from "react";
function Element({ name, onAdd, index }) {
  const [isClick, SetIsClick] = React.useState(false);
  const masIng = (e) => {
    SetIsClick(!isClick)
    onAdd(name)
    const input = e.target.querySelector('input')
    if (input) input.checked = !input.checked
  }
  return (
    <div className='blocks-button__item item-button' onClick={masIng} style={isClick ? {backgroundColor: 'salmon', color: 'white',borderRadius: 30} : null
    }>
      <div className='icon'>
        <svg>
          <circle r="20px" cx="20" cy="20" fill="#8b5637" />
          <text class="text" x="10" y="25">{isNaN(name[0]) ? name.slice(0, 2) : `${name[0]}${name.substr(name.indexOf(" ") + 1).slice(0, 1)}`}</text>
        </svg>
      </div>
      <div class="item-button__text text-item">
        <input type="checkbox" class="custom-checkbox" id={['ing', index].join()} />
        <label for={['ing', index].join()}>{name}</label>
      </div>
    </div>
  );
}

export default Element;