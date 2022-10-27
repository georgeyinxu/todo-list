const CardItems = ({ items, handleCompletedTask }) => {
  return (
    <div className='grid grid-cols-4 gap-4 px-4 mt-10'>
      {items && items.map((listItem, i) => {
        return (
        <div className='card w-70 bg-base-100 shadow-xl' key={i}>
          <div className='card-body'>
            <h2 className='card-title'>List Item #{i + 1}</h2>
            <p className='text-left'>{listItem.item}</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary' onClick={() => handleCompletedTask(listItem.id)}>Completed</button>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default CardItems;