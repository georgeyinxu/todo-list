import { useState } from 'react';
import ReactDOM from 'react';

export default function Home({ listItems }) {
  const [inputItem, setInputItem] = useState('Type Here');

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl font-black mb-10'>
          Welcome to George's Todo list
        </h1>
        <form>
          <input
            type='text'
            placeholder={inputItem}
            className='input w-full max-w-xs'
            onChange={(e) => setInputItem(e.target.value)}
          />
          <button class='btn btn-primary'>Add Item</button>
        </form>
        <div className='grid grid-cols-4 gap-4 px-4 mt-10'>
          {listItems.map((listItem, i) => {
            return (
            <div className='card w-70 bg-base-100 shadow-xl' key={i}>
              <div className='card-body'>
                <h2 className='card-title'>List Item #{i + 1}</h2>
                <p className='text-left'>{listItem.item}</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Completed</button>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
    // <div>
    //   <h1 className='text-3xl font-bold underline'>HOLY</h1>
    //   {/* {JSON.stringify(listItems)}
    //   { error }
    //   {listItems.map((listItem, i) => {
    //     return (
    //       <div key={i}>
    //         <h2>{listItem.item}</h2>
    //       </div>
    //     );
    //   })} */}
    // </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/todo');
  const data = await response.json();
  return {
    props: {
      listItems: data,
    },
  };
}
