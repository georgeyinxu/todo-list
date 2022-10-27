const ItemInput = ({ inputItem, handleAddition, setInputItem }) => {
  return (
  <form>
    <input
      type='text'
      placeholder={inputItem}
      className='input w-full max-w-xs'
      onChange={(e) => setInputItem(e.target.value)}
    />
    <button className='btn btn-primary' onClick={handleAddition}>Add Item</button>
  </form>
  )
}

export default ItemInput;