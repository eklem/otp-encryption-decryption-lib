const nob = {
  plaincodeRegex: '0\\d{4}|[1-5]|(90[0-9]{1})|(6[0-9]{1})|(7[0-9]{1})|(8[0-9]{1})|(9[1-9]{1})',
  textRegex: '[a-zæøå0-9\\s]|[*@#+-/.:!(=?)]',
  table: [
    { unicode: 'e', plaincode: '1' },
    { unicode: 'r', plaincode: '2' },
    { unicode: 't', plaincode: '3' },
    { unicode: 'n', plaincode: '4' },
    { unicode: 's', plaincode: '5' },
    { unicode: 'i', plaincode: '60' },
    { unicode: 'a', plaincode: '61' },
    { unicode: 'l', plaincode: '62' },
    { unicode: 'o', plaincode: '63' },
    { unicode: 'd', plaincode: '64' },
    { unicode: 'g', plaincode: '65' },
    { unicode: 'k', plaincode: '66' },
    { unicode: 'm', plaincode: '67' },
    { unicode: 'v', plaincode: '68' },
    { unicode: 'p', plaincode: '69' },
    { unicode: 'f', plaincode: '70' },
    { unicode: 'u', plaincode: '71' },
    { unicode: 'h', plaincode: '72' },
    { unicode: 'å', plaincode: '73' },
    { unicode: 'b', plaincode: '74' },
    { unicode: 'j', plaincode: '75' },
    { unicode: 'ø', plaincode: '76' },
    { unicode: 'y', plaincode: '77' },
    { unicode: 'c', plaincode: '78' },
    { unicode: 'æ', plaincode: '79' },
    { unicode: 'w', plaincode: '80' },
    { unicode: 'x', plaincode: '81' },
    { unicode: 'z', plaincode: '82' },
    { unicode: 'q', plaincode: '83' },
    { unicode: '*', plaincode: '84' },
    { unicode: '@', plaincode: '85' },
    { unicode: '#', plaincode: '86' },
    { unicode: '+', plaincode: '87' },
    { unicode: '-', plaincode: '88' },
    { unicode: '/', plaincode: '89' },
    { unicode: '0', plaincode: '900' },
    { unicode: '1', plaincode: '901' },
    { unicode: '2', plaincode: '902' },
    { unicode: '3', plaincode: '903' },
    { unicode: '4', plaincode: '904' },
    { unicode: '5', plaincode: '905' },
    { unicode: '6', plaincode: '906' },
    { unicode: '7', plaincode: '907' },
    { unicode: '8', plaincode: '908' },
    { unicode: '9', plaincode: '909' },
    { unicode: '.', plaincode: '91' },
    { unicode: ':', plaincode: '92' },
    { unicode: '\'', plaincode: '93' },
    { unicode: '!', plaincode: '94' },
    { unicode: '(', plaincode: '95' },
    { unicode: ')', plaincode: '96' },
    { unicode: '=', plaincode: '97' },
    { unicode: '?', plaincode: '98' },
    { unicode: ' ', plaincode: '99' }
  ]
}

export { nob }
