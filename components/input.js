const ItemInput = ({ inputItem, handleAddition, setInputItem }) => {
  return (
  <form onSubmit={handleAddition}>
    <input
      type='text'
      placeholder={inputItem}
      className='input w-full max-w-xs'
      onChange={(e) => setInputItem(e.target.value)}
    />
    <button type="submit" className='btn btn-primary'>Add Item</button>
  </form>
  )
}

export default ItemInput;