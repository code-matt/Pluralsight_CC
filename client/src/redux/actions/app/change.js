const change = (value, fieldId, propName) => ({
  type: 'CHANGE_DATA',
  fieldId: fieldId,
  value: value,
  propName: propName
})

export default change
